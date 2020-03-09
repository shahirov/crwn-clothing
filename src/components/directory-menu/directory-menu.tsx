import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './directory-menu.styles'
import MenuItem from '../menu-item/menu-item'
import { selectDirectorySections } from '../../slices/directory/selectors'

const DirectoryMenu = () => {
  const sections = useSelector(selectDirectorySections)

  return (
    <Wrapper>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </Wrapper>
  )
}
export default DirectoryMenu
