import React from 'react'
import { useSelector } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown-logo.svg'
import { Navigation, LogoContainer, NavLinks, StyledLink, SignOutButton } from './header.styles'
import { RootState } from '../../app/rootReducer'
import firebase from '../../firebase/firebase'
import CartIcon from '../../components/cart-icon/cart-icon'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown'

const Header = () => {
  const user = useSelector((state: RootState) => state.user.currentUser)

  const signOutUser = () => {
    firebase.auth.signOut()
  }

  return (
    <header>
      <Navigation>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <StyledLink to="/shop">SHOP</StyledLink>
          {user ? (
            <li>
              <SignOutButton onClick={signOutUser}>SIGN OUT</SignOutButton>
            </li>
          ) : (
            <>
              <li>
                <StyledLink to="/signin">SIGN IN</StyledLink>
              </li>
              <li>
                <StyledLink to="/signup">SIGN UP</StyledLink>
              </li>
            </>
          )}
          <li>
            <CartIcon />
          </li>
        </NavLinks>
      </Navigation>
      <CartDropdown />
    </header>
  )
}
export default Header
