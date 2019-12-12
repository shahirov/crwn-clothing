import React, { useContext } from 'react'

import { ReactComponent as Logo } from './crown-logo.svg'
import { Navigation, LogoContainer, NavLinks, StyledLink, SignOutButton } from './header.styles'
import { FirebaseContext } from '../../firebase'

const Header = () => {
  const { user, firebase } = useContext(FirebaseContext)

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
        </NavLinks>
      </Navigation>
    </header>
  )
}
export default Header
