import React from "react";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from '../../assets/images/crown.svg';

// import './header.style.scss';
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.style";

const Header = ({ currentUser, hidden }) => (
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
      <CartIcon />
    </OptionsContainer>
    {!hidden && <CartDropdown />}
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps,null)(Header);