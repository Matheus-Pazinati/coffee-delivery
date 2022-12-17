import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['base-text']};
    font-family: 'Roboto', sans-serif;
  }
  
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
  }

  fieldset {
    border: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input {
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus {
  -webkit-text-fill-color: #000;
  box-shadow: inset;
  -webkit-box-shadow: 0 0 0px 40rem #EDEDED inset;
}
`