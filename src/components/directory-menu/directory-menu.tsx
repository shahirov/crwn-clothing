import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './directory-menu.styles'
import MenuItem from '../menu-item/menu-item'
import { RootState } from '../../redux/rootReducer'
import { selectDirectorySections } from '../../slices/directory-slice'

const DirectoryMenu = () => {
  const sections = useSelector((state: RootState) => selectDirectorySections(state))

  return (
    <Wrapper>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </Wrapper>
  )
}
export default DirectoryMenu
