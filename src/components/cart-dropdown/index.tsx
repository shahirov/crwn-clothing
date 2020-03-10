import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { Wrapper, CartItems, EmptyMessage } from './styles'
import { CustomButton } from '../custom-button'
import { CartItem } from '../cart-item'
import { selectCartItems } from '../../features/cart/selectors'

export const CartDropdown = () => {
  const history = useHistory()

  const cartItems = useSelector(selectCartItems)

  const toCheckoutPage = () => history.push('/checkout')

  return (
    <Wrapper>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <CustomButton type="button" color="default" name="default" handleClick={toCheckoutPage}>
        GO TO CHECKOUT
      </CustomButton>
    </Wrapper>
  )
}
