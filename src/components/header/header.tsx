import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ReactComponent as Logo } from './crown-logo.svg'
import { Navigation, LogoContainer, NavLinks, StyledLink, SignOutButton } from './header.styles'
import { RootState } from '../../redux/rootReducer'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import { selectCurrentUser, signOutStart } from '../../slices/user-slice'
import { selectCartHidden } from '../../slices/cart-slice'

const Header = () => {
  const dispatch = useDispatch()

  const user = useSelector((state: RootState) => selectCurrentUser(state))
  const hidden = useSelector((state: RootState) => selectCartHidden(state))

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
export default Header
