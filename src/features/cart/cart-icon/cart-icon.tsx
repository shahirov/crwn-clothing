import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Wrapper, ShoppingIcon, ItemCount } from './cart-icon.styles'
import { toggleCartHidden } from '../cart-slice'
import { RootState } from '../../../app/rootReducer'
import { selectCartItemsCount } from '../cart-selectors'

const CartIcon = () => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state: RootState) => selectCartItemsCount(state))

  const handleClick = () => dispatch(toggleCartHidden())

  return (
    <Wrapper onClick={handleClick}>
      <ShoppingIcon />
      <ItemCount>{totalQuantity}</ItemCount>
    </Wrapper>
  )
}

export default CartIcon
