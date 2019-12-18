import React from 'react'
import { useDispatch } from 'react-redux'

import { Wrapper, Image, Footer, Name, Price } from './collection-item.styles'
import CustomButton from '../custom-button/custom-button'
import { addItem } from '../../features/cart/cart-slice'
import { CollectionItemProp } from '../../features/shop/shop-slice'

type CollectionItemProps = {
  item: CollectionItemProp
  size?: 'large' | 'small' | 'default'
}

const CollectionItem: React.FC<CollectionItemProps> = ({ item, size }) => {
  const dispatch = useDispatch()

  const { name, price, imageUrl } = item

  const addItemToCart = () => {
    dispatch(addItem({ ...item, quantity: 1 }))
  }

  return (
    <Wrapper size={size}>
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
