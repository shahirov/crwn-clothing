import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper, CartItems } from './cart-dropdown.styles'
import CustomButton from '../../../components/custom-button/custom-button'
import { RootState } from '../../../app/rootReducer'
import CartItem from '../../../components/cart-item/cart-item'

const CartDropdown = () => {
  const hidden = useSelector((state: RootState) => state.cart.hidden)
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)

  return !hidden ? (
    <Wrapper>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </CartItems>
      <CustomButton type="button" color="default" name="default">
        GO TO CHECKOUT
      </CustomButton>
    </Wrapper>
  ) : null
}

export default CartDropdown
