import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import { Wrapper, CartItems, EmptyMessage } from './cart-dropdown.styles'
import CustomButton from '../../../components/custom-button/custom-button'
import { RootState } from '../../../app/rootReducer'
import CartItem from '../../../components/cart-item/cart-item'
import { selectCartItems } from '../cart-selectors'

const CartDropdown = () => {
  const history = useHistory()

  const cartItems = useSelector((state: RootState) => selectCartItems(state))

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

export default CartDropdown
