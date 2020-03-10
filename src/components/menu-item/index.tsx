import React from 'react'
import { useHistory } from 'react-router-dom'

import { Wrapper, ItemContent, ItemSubtitle, ItemTitle, BgImage } from './styles'

interface Props {
  title: string
  imageUrl: string
  route: string
  size?: string
}

export const MenuItem = ({ title, imageUrl, size, route }: Props) => {
  const history = useHistory()

  return (
    <Wrapper size={size} onClick={() => history.push(`/shop/${route}`)}>
      <BgImage imageUrl={imageUrl} />
      <ItemContent>
        <ItemTitle>{title.toUpperCase()}</ItemTitle>
        <ItemSubtitle>SHOP NOW</ItemSubtitle>
      </ItemContent>
    </Wrapper>
  )
}
