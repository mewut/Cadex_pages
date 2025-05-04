import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.5;
    color: #333;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  h2, h3, h4 {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  a, p {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;