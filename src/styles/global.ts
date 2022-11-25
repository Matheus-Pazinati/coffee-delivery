import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({theme}) => theme.background};
    color: ${({theme}) => theme['base-text']};
    font-family: 'Roboto', sans-serif;
  }
  
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`