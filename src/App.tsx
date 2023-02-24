import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './assets/styles/globalStyles';

import {
  defaultDark,
  defaultLight,
  rosePineDarkTheme,
  rosePineLightTheme,
  Colors,
} from './assets/styles/themes';
import { GlobalContext } from './utils/GlobalContext';

import Header from './components/Header';
import Router from './routes';

interface Themes {
  defaultDark: Colors;
  defaultLight: Colors;
  rosePineDarkTheme: Colors;
  rosePineLightTheme: Colors;
  [key: string]: Colors;
}

const themesMap: Themes = {
  defaultDark,
  defaultLight,
  rosePineDarkTheme,
  rosePineLightTheme,
};

export default function App(): JSX.Element {
  const storedTheme = localStorage.getItem('currentTheme') || 'defaultDark';
  const [currentTheme, setCurrentTheme] = useState<string>(storedTheme);
  const theme: Colors = themesMap[currentTheme];
  const themesMemo = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme],
  );

  return (
    <GlobalContext.Provider value={themesMemo}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Router />
          <GlobalStyles />
          <ToastContainer
            position="top-center"
            autoClose={1200}
            newestOnTop
            hideProgressBar
          />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
