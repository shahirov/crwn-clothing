import React from 'react'

import {
  Wrapper,
  DirectoryMenu,
  MenuItem,
  ItemContent,
  ItemSubtitle,
  ItemTitle
} from './homepage.styles'

const HomePage = () => {
  return (
    <Wrapper>
      <DirectoryMenu>
        <MenuItem>
          <ItemContent>
            <ItemTitle>Hats</ItemTitle>
            <ItemSubtitle>Shop now</ItemSubtitle>
          </ItemContent>
        </MenuItem>
      </DirectoryMenu>
    </Wrapper>
  )
}
export default HomePage
