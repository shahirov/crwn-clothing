import React from 'react'
import { useDispatch } from 'react-redux'

import { Wrapper, Image, Footer, Name, Price } from './styles'
import { CustomButton } from '../custom-button'
import { addItem } from '../../features/cart/slice'
import { CollectionItem as ICollectionItem } from '../../lib/types'

interface Props {
  item: ICollectionItem
  size?: 'large' | 'small' | 'default'
}

export const CollectionItem = ({ item, size }: Props) => {
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
        <Price>{price}</Price>
      </Footer>
      <CustomButton type="button" color="default" name="default" handleClick={addItemToCart}>
        ADD TO CART
      </CustomButton>
    </Wrapper>
  )
}
