import React, { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './assets/styles/globalStyles';
import YaTodo from './pages/yaTodo';
import {
  defaultDark,
  defaultLight,
  rosePineDarkTheme,
  rosePineLightTheme,
  Colors,
} from './assets/styles/themes';
import { GlobalContext } from './utils/GlobalContext';

interface ThemesA {
  defaultDark: Colors;
  defaultLight: Colors;
  rosePineDarkTheme: Colors;
  rosePineLightTheme: Colors;
}

// HACK: use any because any other type not work, fix this in the futere.
const themesMap: any = {
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
        <GlobalStyles />
        <YaTodo />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
