import React from 'react'

import { ReactComponent as Logo } from './crown-logo.svg'
import { Wrapper, LogoContainer, Options, Option } from './header.styles'

const Header = () => {
  return (
    <Wrapper>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <Options>
        <Option to="/shop">Shop</Option>
        <Option to="/signin">Sign in</Option>
      </Options>
    </Wrapper>
  )
}
export default Header
