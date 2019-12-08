import React from 'react'
import { useHistory } from 'react-router-dom'

import { Wrapper, ItemContent, ItemSubtitle, ItemTitle, BgImage } from './menu-item.styles'

type MenuItemProps = {
  title: string
  imageUrl: string
  route: string
  size?: string
}

const MenuItem: React.FC<MenuItemProps> = ({ title, imageUrl, size, route }) => {
  const history = useHistory()

  return (
    <Wrapper size={size} onClick={() => history.push(`/${route}`)}>
      <BgImage imageUrl={imageUrl} />
      <ItemContent>
        <ItemTitle>{title.toUpperCase()}</ItemTitle>
        <ItemSubtitle>SHOP NOW</ItemSubtitle>
      </ItemContent>
    </Wrapper>
  )
}
export default MenuItem
