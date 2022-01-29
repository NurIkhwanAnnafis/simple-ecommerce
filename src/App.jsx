import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout';

import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, convertCollectionsSnapshotToMap, createUserProfileDocument, firestore } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';

import CollectionPage from './pages/collection/collection.component';
import { updateCollection } from './redux/shop/shop.action';
import './App.css';

import WithSpinner from './components/with-spinner/with-spinner';
const CollectionsOverviewWithSpinner = WithSpinner(CollectionPage);
const ShopPageWithSpinner = WithSpinner(ShopPage);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true
    }
  }

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser, updateCollection } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }

      setCurrentUser(userAuth);
    })

    const collectionRef = firestore.collection('collections');

    //Promise Style by library
    collectionRef.get().then(async snapshot => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollection(collectionMap);
      this.setState({ loading: false });
    })

    //Snapshot Style
    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollection(collectionMap);
    //   this.setState({ loading: false });
    // })

    //Legacy Promise Style
    // fetch('https://firestore.googleapis.com/v1/projects/crown-db-9bb79/databases/(default)/documents/collections')
    // .then(res => res.json())
    // .then(collections => {
    //   const collectionMap = convertCollectionsSnapshotToMap(collections);
    //   updateCollection(collectionMap);
    //   this.setState({ loading: false });
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Header/>
          <Routes>
            <Route caseSensitive path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPageWithSpinner isLoading={loading} />} />
            <Route path="/shop/:id" element={<CollectionsOverviewWithSpinner isLoading={loading} />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route caseSensitive path="/signin" element={currentUser ? <Navigate to='/' /> : <SignInAndSignUp /> } />
          </Routes>
        </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  updateCollection: collections => dispatch(updateCollection(collections))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);