import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 23%;
  padding-right: 15px;
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
`

export const Name = styled.span`
  padding-right: 20px;
  text-align: center;
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
  }
`

export const Price = styled.span`
  padding-left: 35px;
  width: 23%;

  @media screen and (max-width: 800px) {
    width: 22%;
    padding-left: 18px;
  }
`

export const Quantity = styled.div`
  display: flex;
  width: 23%;
  padding-left: 25px;

  @media screen and (max-width: 800px) {
    padding-left: 7px;
  }
`

export const RemoveButton = styled.span`
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    padding-right: 8px;
  }
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const Value = styled.span`
  margin: 0 10px;
`
