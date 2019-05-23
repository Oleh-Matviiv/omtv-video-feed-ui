import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @media screen and (max-width: 1199px) {
    html {
      font-size: 3vmin;
    }
  }
  @media screen and (min-width: 1200px) {
    html {
      font-size: 4.5vmin;
    }
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
