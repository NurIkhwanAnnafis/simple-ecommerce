import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { fetchCollection } from './redux/shop/shop.action';

import './App.css';

import CollectionOverviewContainer from './components/collections-overview/collection-overview.container';
import CollectionPageContainer from './pages/collection/collection.container';

const App = (props) => {
  
  useEffect(() => {
    const { setCurrentUser, fetchCollection } = props;

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
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

    fetchCollection();

    return () => {
      unsubscribeFromAuth(null);
    }
  }, [])

  const { currentUser } = props;
  return (
    <div>
      <Header/>
      <Routes>
        <Route caseSensitive path="/" element={<HomePage />} />
        <Route path="/shop" element={<CollectionOverviewContainer />} />
        <Route path="/shop/:id" element={<CollectionPageContainer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route caseSensitive path="/signin" element={currentUser ? <Navigate to='/' /> : <SignInAndSignUp /> } />
      </Routes>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  fetchCollection: () => dispatch(fetchCollection())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);