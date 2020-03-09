import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Wrapper, ShoppingIcon, ItemCount } from './cart-icon.styles'
import { selectCartItemsCount } from '../../slices/cart/selectors'
import { toggleCartHidden } from '../../slices/cart/slice'

const CartIcon = () => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(selectCartItemsCount)

  const handleClick = () => dispatch(toggleCartHidden())

  return (
    <Wrapper onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </Wrapper>
  )
}

export default CartIcon
