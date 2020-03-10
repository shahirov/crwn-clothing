import styled from 'styled-components'

interface Props {
  color?: 'blue' | 'green' | 'default'
  name?: 'signin' | 'signup' | 'default'
}

export const Button = styled.button<Props>`
  background-color: ${({ color }) => {
    switch (color) {
      case 'blue':
        return '#3b5998'
      case 'green':
        return '#1db954'
      default:
        return '#000'
    }
  }};
  width: ${({ name }) => {
    switch (name) {
      case 'signup':
        return '320px'
      case 'signin':
        return '250px'
      default:
        return 'auto'
    }
  }};
  margin: ${({ name }) => {
    switch (name) {
      case 'signup':
        return '0 auto'
      case 'signin':
        return ''
      default:
        return 'auto auto 0 auto'
    }
  }};

  &:hover {
    color: ${({ color }) => (color === 'default' ? 'white' : 'black')};
    background-color: ${({ color }) => {
      switch (color) {
        case 'blue':
          return '#3a61b3'
        case 'green':
          return '#1ed760'
        default:
          return '#191919'
      }
    }};
  }
`
