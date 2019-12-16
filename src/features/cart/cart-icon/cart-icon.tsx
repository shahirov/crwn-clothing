import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Wrapper, ShoppingIcon, ItemCount } from './cart-icon.styles'
import { toggleCartHidden } from '../cart-slice'
import { RootState } from '../../../app/rootReducer'

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.cartItems)

  const totalCount = useMemo(() => cartItems.reduce((total, item) => total + item.quantity, 0), [
    cartItems
  ])

  const handleClick = () => dispatch(toggleCartHidden())

  return (
    <Wrapper onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{totalCount}</ItemCount>
    </Wrapper>
  )
}

export default CartIcon
