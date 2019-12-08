import React, { useMemo } from 'react'
import CollectionItem from '../collection-item/collection-item'
import { Wrapper, Items, Title } from './collection-preview.styles'

type PreviewItem = {
  id: number
  name: string
  price: number
  imageUrl: string
}

type CollectionPreviewProps = {
  title: string
  items: PreviewItem[]
}

const CollectionPreview: React.FC<CollectionPreviewProps> = ({ title, items }) => {
  const memoizedItems = useMemo(
    () =>
      items
        .filter((_, idx) => idx < 4)
        .map(({ id, ...otherProps }) => <CollectionItem key={id} {...otherProps} />),
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
