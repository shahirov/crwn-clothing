import React, { useMemo } from 'react'

import { CollectionItem } from '../collection-item'
import { Wrapper, Items, Title } from './styles'
import { CollectionItem as ICollectionItem } from '../../lib/types'

interface Props {
  title: string
  items: ICollectionItem[]
}

export const CollectionPreview = ({ title, items }: Props) => {
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
