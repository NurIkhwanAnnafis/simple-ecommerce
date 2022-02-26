import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { auth, convertCollectionsSnapshotToMap, createUserProfileDocument, firestore } from '../../firebase/firebase.utils';
import { useModelCart } from '../cart/cart-context';
import { useModelDirectory } from '../directory/directory-context';

export const ContextApp = createContext(null);

const ContextProviderApp = (props) => {
  const [shopContext, setShopContext] = useState({
    collections: [],
    isFetching: false,
    errorMessage: undefined
  })
  const [userContext, setUserContext] = useState({
    currentUser: null
  })
  let context = {
    shopContext: { ...shopContext },
    userContext: { ...userContext },
    cartContext: useModelCart(),
    directoryContext: useModelDirectory()
  }

  function fetchCollection () {
    const collectionRef = firestore.collection('collections');
    setShopContext({
      collections: [],
      isFetching: true,
      errorMessage: undefined
    });
  
    collectionRef.get().then(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      setShopContext({
        collections: collectionMap,
        isFetching: false,
        errorMessage: undefined
      });
    }).catch(error => setShopContext({
      collections: context.shopContext.collections,
      isFetching: false,
      errorMessage: error.message
    }))
  }

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setUserContext({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }

      setUserContext(userAuth);
    })

    fetchCollection();

    return () => {
      unsubscribeFromAuth(null);
    }

  },[])

  return (
    <ContextApp.Provider value={context}>
      {props.children}
    </ContextApp.Provider>
  )
}

export default ContextProviderApp;