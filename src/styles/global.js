import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: linear-gradient(135deg, #d8e9f3 0%, #d8e9f3 50%, #457ab1 50%,#457ab1 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
  }

  body, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

  img {
    border: 0;
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  #root {
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 15px;
  }
`;
