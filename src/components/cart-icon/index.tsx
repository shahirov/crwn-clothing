import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Wrapper, ShoppingIcon, ItemCount } from './styles'
import { selectCartItemsCount } from '../../features/cart/selectors'
import { toggleCartHidden } from '../../features/cart/slice'

export const CartIcon = () => {
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
