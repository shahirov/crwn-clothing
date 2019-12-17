import React from 'react'

import { Wrapper, ItemImage, ItemDetails, ItemName } from './cart-item.styles'

type CartItemProps = {
  item: {
    name: string
    price: number
    imageUrl: string
    quantity: number
  }
}

const CartItem: React.FC<CartItemProps> = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <Wrapper>
      <ItemImage src={imageUrl} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <span>
          {quantity} x ${price * quantity}
        </span>
      </ItemDetails>
    </Wrapper>
  )
}

export default CartItem
