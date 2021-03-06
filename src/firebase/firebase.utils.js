import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyDfOvMyzckA79xG8VMd0tyK2Aod3ByWQLg",
  authDomain: "crown-db-9bb79.firebaseapp.com",
  projectId: "crown-db-9bb79",
  storageBucket: "crown-db-9bb79.appspot.com",
  messagingSenderId: "225758757011",
  appId: "1:225758757011:web:1099be26fcffba0ce50d66",
  measurementId: "G-PMFGL6RHHT"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(element => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, element);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collection) => {
  const transforemdCollection = collection.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transforemdCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection;

    return acc;
  },{});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;