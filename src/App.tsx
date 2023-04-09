import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from './assets/styles/globalStyles';

import {
  defaultDark,
  darker,
  defaultLight,
  rosePineDarkTheme,
  rosePineLightTheme,
  Colors
} from './assets/styles/themes';
import { GlobalContext } from './utils/GlobalContext';

import Header from './components/Header';
import Router from './routes';
import AuthProvider from './utils/AuthProvider';

interface Themes {
  defaultDark: Colors;
  darker: Colors;
  defaultLight: Colors;
  rosePineDarkTheme: Colors;
  rosePineLightTheme: Colors;
  [key: string]: Colors;
}

const themesMap: Themes = {
  defaultDark,
  darker,
  defaultLight,
  rosePineDarkTheme,
  rosePineLightTheme
};

export default function App(): JSX.Element {
  const storedTheme = localStorage.getItem('currentTheme') || 'darker';
  const [currentTheme, setCurrentTheme] = useState<string>(storedTheme);
  const theme: Colors = themesMap[currentTheme];
  const themesMemo = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme]
  );

  return (
    <GlobalContext.Provider value={themesMemo}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <BrowserRouter>
            <Header />
            <Router />
            <GlobalStyles />
            <ToastContainer
              position="top-right"
              autoClose={1200}
              newestOnTop
              hideProgressBar
            />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
