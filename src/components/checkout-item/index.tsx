import React from 'react'
import { useDispatch } from 'react-redux'

import {
  Wrapper,
  ImageContainer,
  Image,
  Price,
  Name,
  Quantity,
  RemoveButton,
  Arrow,
  Value
} from './styles'
import { clearItemFromCart, addItem, removeItem, CartItem } from '../../features/cart/slice'

interface Props {
  item: CartItem
}

export const CheckoutItem = ({ item }: Props) => {
  const dispatch = useDispatch()

  const { name, price, quantity, imageUrl } = item

  const clearItem = () => dispatch(clearItemFromCart(item))

  const remove = () => dispatch(addItem(item))

  const add = () => dispatch(removeItem(item))

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imageUrl} alt="Item" />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={add}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={remove}>&#10095;</Arrow>
      </Quantity>
      <Price>{price * quantity}</Price>
      <RemoveButton onClick={clearItem}>&#10005;</RemoveButton>
    </Wrapper>
  )
}
