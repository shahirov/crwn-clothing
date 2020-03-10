import React from 'react'
import { useSelector } from 'react-redux'

import { Wrapper } from './styles'
import { MenuItem } from '../menu-item'
import { selectDirectorySections } from '../../features/directory/selectors'

export const DirectoryMenu = () => {
  const sections = useSelector(selectDirectorySections)

  return (
    <Wrapper>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </Wrapper>
  )
}
