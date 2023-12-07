import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
  }

  body {
    background: ${(props) => props.theme.baseBackground};
    color: ${(props) => props.theme.baseTitle};
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }
`
