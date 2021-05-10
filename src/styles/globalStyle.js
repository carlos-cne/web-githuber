import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background-color: #8D1CE7;
  }

  body {
    @media (min-width: 1367px) {
      overflow-y: scroll
    }
  }
`;
