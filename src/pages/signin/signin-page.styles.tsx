import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 450px;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  margin: 10px 0;
  text-align: center;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Divider = styled.div`
  border-top: 2px solid #d9dadc;
  display: flex;
  line-height: 1px;
  margin: 30px 0;
  position: relative;
  text-align: center;
`

export const SignUpTitle = styled.span`
  text-align: center;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
`

export const SignUpLink = styled(Link)`
  text-align: center;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  margin-top: 15px;
  padding: 16px 48px 18px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border-width: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: normal;
  display: block;
  font-weight: 700;
  height: 50px;
  box-shadow: inset 0 0 0 2px #616467;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: #fff;
    background-color: #616467;
  }
`
