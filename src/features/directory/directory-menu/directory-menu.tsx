import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './directory-menu.styles'
import MenuItem from '../../../components/menu-item/menu-item'
import { RootState } from '../../../app/rootReducer'
import { selectDirectorySections } from '../directory-selectors'

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
