import React, { useContext } from "react";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/images/crown.svg';

// import './header.style.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.style";
import { ContextApp } from "../../context/app/app-context-provider";

const Header = () => {
  const context = useContext(ContextApp);
  const { 
    userContext: { currentUser }, 
    cartContext: { hidden, cartItems, toggleCartHidden, } 
  } = context;

  return (
    <HeaderContainer className="header">
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer className="options">
        <OptionLink className="option" to="/shop">
          SHOP
        </OptionLink>
        <OptionLink className="option" to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink> 
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header;