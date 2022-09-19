import { createGlobalStyle } from 'styled-components';

const DisplayStyle = createGlobalStyle`
  html {
    background-color: ${props => props.theme.background};
    transition: all ease-in-out 200ms;
  }
`;

export default DisplayStyle;