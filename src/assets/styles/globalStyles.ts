import { createGlobalStyle } from 'styled-components';

interface Theme {
  primary: string;
  text: string;
  highlight: string;
  accentColor: string;
}

export default createGlobalStyle<{ theme: Theme }>`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 18px;
      outline: 0;
      border: none;
      transition: all 0.2s linear;
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.text};
::selection {
      background-color: ${(props) => props.theme.highlight};
  }
}

html, body, #root {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
   ::-webkit-scrollbar {
  display: none;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  }
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.text};
}

a {
  text-decoration: none;
  color: ${(props) => props.theme.text};
}

button {
  cursor: pointer;
}

svg {
  background-color: transparent;
}

svg:hover {
  fill: ${(props) => props.theme.accentColor};
}

`;
