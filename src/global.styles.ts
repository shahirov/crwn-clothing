import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 20px 60px;
    font-family: 'Open Sans Condensed', sans-serif;
    
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
  
  li {
    list-style: none;
  }
  
  button {
    font-size: 14px;
    line-height: 1;
    min-width: 150px;
    margin-right: auto;
    border-radius: 500px;
    padding: 0 35px 0 35px;
    transition-property: background-color, border-color, color, box-shadow, filter;
    transition-duration: 0.3s;
    border-width: 0;
    letter-spacing: 2px;
    text-transform: uppercase;
    white-space: normal;
    display: block;
    font-family: 'Open Sans Condensed';
    font-weight: 700;
    height: 50px;
    color: white;
    border-width: 0;
    text-transform: uppercase;
    cursor: pointer;
  }
`
