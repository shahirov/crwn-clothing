import styled from 'styled-components'

interface WrapperProps {
  size?: string
}

interface BgImageProps {
  imageUrl: string
}

export const BgImage = styled.div<BgImageProps>`
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-position: center;
  background-size: cover;
`

export const ItemContent = styled.div`
  position: absolute;
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: #fff;
  opacity: 0.7;
`

export const Wrapper = styled.div<WrapperProps>`
  min-width: 30%;
  height: ${(props) => (props.size === 'large' ? '380px' : '240px')};
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  @media screen and (max-width: 800px) {
    height: 200px;
  }

  &:hover {
    cursor: pointer;

    & ${BgImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${ItemContent} {
      opacity: 0.9;
    }
  }
`

export const ItemTitle = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const ItemSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`