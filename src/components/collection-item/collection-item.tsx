import React from 'react'
import { Wrapper, Image, Footer, Name, Price } from './collection-item.styles'

type CollectionItemProps = {
  name: string
  price: number
  imageUrl: string
}

const CollectionItem: React.FC<CollectionItemProps> = ({ name, price, imageUrl }) => {
  return (
    <Wrapper>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
    </Wrapper>
  )
}
export default CollectionItem
