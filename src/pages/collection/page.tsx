import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

import { Wrapper, Items, Title } from './styles'
import { CollectionItem } from '../../components/collection-item'
import { makeSelectCollection } from '../../features/shop/selectors'
import { withSpinner } from '../../lib/hoc'

export const CollectionPage = withSpinner(() => {
  const { categoryId } = useParams()

  const selectCollections = makeSelectCollection(categoryId!)
  const collection = useSelector(selectCollections)

  if (collection === null) return null

  const { title, items } = collection

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Items>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} size="large" />
        ))}
      </Items>
    </Wrapper>
  )
})
