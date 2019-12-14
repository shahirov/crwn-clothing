import styled from 'styled-components'

type ButtonProps = {
  color?: 'blue' | 'green' | 'default'
  name?: 'signin' | 'signup' | 'default'
}

export const Button = styled.button`
  background-color: ${({ color }: ButtonProps) => {
    switch (color) {
      case 'blue':
        return '#3b5998'
      case 'green':
        return '#1db954'
      default:
        return '#000'
    }
  }};
  width: ${({ name }: ButtonProps) => {
    switch (name) {
      case 'signup':
        return '320px'
      case 'signin':
        return '250px'
      default:
        return 'auto'
    }
  }};
  margin: ${({ name }: ButtonProps) => {
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
    color: ${({ color }) => (color === 'default' ? 'black' : 'white')};
    background-color: ${({ color }: ButtonProps) => {
      switch (color) {
        case 'blue':
          return '#3a61b3'
        case 'green':
          return '#1ed760'
        default:
          return 'white'
      }
    }};
  }
`
