import { createGlobalStyle } from 'styled-components';
import {
  colors
} from './theme'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body{
    background: ${colors.white};
    -webkit-font-smooth: antialiased;
  }

  body, input, text-area, button{
    font-family: 'DM Sans', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;