import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, CartItems } from './cart-dropdown.styles'
import CustomButton from '../custom-button/custom-button'
import { RootState } from '../../app/rootReducer'

const CartDropdown = () => {
  const hidden = useSelector((state: RootState) => state.cart.hidden)

  return !hidden ? (
    <Wrapper>
      <CartItems></CartItems>
      <CustomButton type="button" color="default" name="default">
        GO TO CHECKOUT
      </CustomButton>
    </Wrapper>
  ) : null
}
export default CartDropdown
