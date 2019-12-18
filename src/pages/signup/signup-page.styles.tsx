import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 450px;
  display: flex;
  flex-direction: column;
`

export const StyledInput = styled.input``

export const Title = styled.h2`
  margin: 10px 0;
  text-align: center;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const SignInWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`

export const SignInTitle = styled.span`
  text-align: center;
  font-weight: 700;
  color: #000;
  padding-right: 5px;
`

export const SignInLink = styled(Link)`
  font-size: 16px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  font-weight: 700;
  color: #1db954;
  cursor: pointer;

  &:hover {
    color: #1ed760;
  }
`
