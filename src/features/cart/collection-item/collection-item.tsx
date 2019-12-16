import React from 'react'
import { useDispatch } from 'react-redux'

import { Wrapper, Image, Footer, Name, Price } from './collection-item.styles'
import CustomButton from '../../../components/custom-button/custom-button'
import { addItem } from '../cart-slice'
import { Item } from '../../../components/collection-preview/collection-preview'

type CollectionItemProps = {
  item: Item
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item }) => {
  const dispatch = useDispatch()

  const { name, price, imageUrl } = item

  const addItemToCart = () => {
    dispatch(addItem({ ...item, quantity: 1 }))
  }

  return (
    <Wrapper>
      <Image imageUrl={imageUrl} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <CustomButton type="button" color="default" name="default" handleClick={addItemToCart}>
        ADD TO CART
      </CustomButton>
    </Wrapper>
  )
}

export default CollectionItem
