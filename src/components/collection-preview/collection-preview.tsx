import React, { useMemo } from 'react'
import CollectionItem from '../../features/cart/collection-item/collection-item'
import { Wrapper, Items, Title } from './collection-preview.styles'

export type Item = {
  id: number
  name: string
  price: number
  imageUrl: string
}

type CollectionPreviewProps = {
  title: string
  items: Item[]
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
  const memoizedItems = useMemo(
    () =>
      items.filter((_, idx) => idx < 4).map((item) => <CollectionItem key={item.id} item={item} />),
    [items]
  )

  return (
    <Wrapper>
      <Title>{title.toUpperCase()}</Title>
      <Items>{memoizedItems}</Items>
    </Wrapper>
  )
}
export default CollectionPreview
