import React from 'react'

import {
  Wrapper,
  ImageContainer,
  Image,
  Price,
  Name,
  Quantity,
  RemoveButton
} from './checkout-item.styles'
import { CartItem } from '../../features/cart/cart-slice'

type CheckoutItemProps = {
  item: CartItem
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({
  item: { name, price, quantity, imageUrl }
}) => {
  return (
    <Wrapper>
      <ImageContainer>
        <Image src={imageUrl} alt="Item" />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>{quantity}</Quantity>
      <Price>{price}</Price>
      <RemoveButton>&#10005;</RemoveButton>
    </Wrapper>
  )
}

export default CheckoutItem
