import React, { memo } from 'react'

import { Wrapper, ItemImage, ItemDetails, ItemName } from './styles'

interface Props {
  item: {
    name: string
    price: number
    imageUrl: string
    quantity: number
  }
}

export const CartItem = memo(({ item: { name, price, imageUrl, quantity } }: Props) => {
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
})
