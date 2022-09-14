import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.background};
    transition: all ease-in-out 200ms;
  }
`;

export default GlobalStyle;