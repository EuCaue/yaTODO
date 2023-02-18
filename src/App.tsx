import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
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

import router from './routes';
import Header from './components/Header';

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
        <Header />
        <RouterProvider router={router} />
        <GlobalStyles />
        <ToastContainer
          position="top-center"
          autoClose={1200}
          newestOnTop
          hideProgressBar
        />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
