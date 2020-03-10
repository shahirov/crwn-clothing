import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as Logo } from './crown-logo.svg'
import { Navigation, LogoContainer, NavLinks, StyledLink, SignOutButton } from './styles'
import { CartIcon } from '../cart-icon'
import { CartDropdown } from '../cart-dropdown'
import { selectCurrentUser } from '../../features/user/selectors'
import { selectCartHidden } from '../../features/cart/selectors'
import { signOutStart } from '../../features/user/slice'

export const Header = () => {
  const dispatch = useDispatch()

  const user = useSelector(selectCurrentUser)
  const hidden = useSelector(selectCartHidden)

  const signOutUser = () => {
    dispatch(signOutStart())
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
      {!hidden && <CartDropdown />}
    </header>
  )
}
