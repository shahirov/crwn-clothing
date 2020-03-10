import React, { useMemo } from 'react'

import { CollectionItem } from '../collection-item'
import { Wrapper, Items, Title } from './styles'
import { CollectionItemProp } from '../../features/shop/slice'

interface Props {
  title: string
  items: CollectionItemProp[]
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
