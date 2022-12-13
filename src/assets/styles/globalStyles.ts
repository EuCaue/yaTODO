import { createGlobalStyle } from 'styled-components';

interface Theme {
  primary: string;
  text: string;
}

export default createGlobalStyle<{ theme: Theme }>`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Ubuntu", sans-serif;
      font-size: 18px;
      outline: 0;
      border: none;
      transition: all 0.2s linear;
}

html, body, #root {
  // height: 100%;
  scroll-behavior: smooth;
}

body {
  height: 100%;
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
}


`;
