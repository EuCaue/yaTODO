import { createGlobalStyle } from 'styled-components';

interface Theme {
  primary: string;
  secondary: string;
  text: string;
  error: string;
  accentColor: string;
}

export default createGlobalStyle<{ theme: Theme }>`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 20px;
      outline: 0;
      border: none;
      transition: all 0.2s linear;
      background-color: ${(props) => props.theme.primary};
      color: ${(props) => props.theme.text};
::selection {
      background-color: ${(props) => props.theme.accentColor};
color: ${(props) =>
  localStorage.getItem('currentTheme') === 'rosePineLightTheme'
    ? props.theme.secondary
    : props.theme.text};
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
.Toastify__toast-container {
background-color: transparent;
}

.Toastify__toast {
color: ${(props) => props.theme.text};
background-color: ${(props) => props.theme.primary};
    text-align: center;
}


.Toastify__close-button {
color: ${(props) => props.theme.text};
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
    color: ${(props) => props.theme.accentColor};
}


`;
