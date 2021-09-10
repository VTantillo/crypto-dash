import '@fontsource/roboto'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Roboto';
    font-size: 16;
    text-rendering: optimizeLegibility;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.background};
  }

  body {
    min-height: 100vh;
  }
`
