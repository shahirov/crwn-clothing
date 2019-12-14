import React from 'react'
import { useDispatch } from 'react-redux'

import { Wrapper, ShoppingIcon, ItemCount } from './cart-icon.styles'
import { toggleCartHidden } from '../../features/cart/cart-slice'

const CartIcon = () => {
  const dispatch = useDispatch()

  const handleClick = () => dispatch(toggleCartHidden())

  return (
    <Wrapper onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>0</ItemCount>
    </Wrapper>
  )
}
export default CartIcon
