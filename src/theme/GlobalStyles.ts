import { createGlobalStyle } from "styled-components";
import backgroundImg from "../assets/background-body.png";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #7EE5A4;
  }

  li > {
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  :focus {
    outline: transparent;
    box-shadow: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset {
    min-width: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }

`;
