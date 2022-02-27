import React, { useContext, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'

import HomePage from './pages/homepage/homepage.component';
import CheckoutPage from './pages/checkout/checkout';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { GlobalStyle } from './global.style';

import CollectionOverviewContainer from './components/collections-overview/collection-overview.container';
import CollectionPageContainer from './pages/collection/collection.container';
import { ContextApp } from './context/app/app-context-provider';

const App = () => {
  const context = useContext(ContextApp);
  const { userContext: { currentUser } } = context;

  return (
    <div>
      <GlobalStyle />
      <Header />
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

export default App;