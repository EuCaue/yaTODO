import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/globalStyles';
import YaTodo from './pages/yaTodo';
import {
  defaultDark,
  defaultLight,
  rosePineDarkTheme,
  rosePineLightTheme,
} from './assets/styles/themes';
import { GlobalContext } from './utils/GlobalContext';

const themesMap: any = {
  defaultDark,
  defaultLight,
  rosePineDarkTheme,
  rosePineLightTheme,
};

export default function App() {
  const storedTheme = localStorage.getItem('currentTheme') || 'defaultDark';
  const [currentTheme, setCurrentTheme] = useState<string>(storedTheme);
  const theme = themesMap[currentTheme];

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <GlobalContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <YaTodo />;
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
