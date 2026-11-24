'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NextAppDirEmotionCacheProvider } from './EmotionCache';
import { getPortfolioTheme } from './theme';

interface ColorModeContextType {
  mode: 'light' | 'dark';
  toggleColorMode: () => void;
}

export const ColorModeContext = React.createContext<ColorModeContextType>({
  mode: 'light',
  toggleColorMode: () => {},
});

export const useColorMode = () => React.useContext(ColorModeContext);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    try {
      const urlTheme = new URLSearchParams(window.location.search).get('theme');
      const savedTheme = (urlTheme === 'dark' || urlTheme === 'light')
        ? urlTheme
        : (localStorage.getItem('portfolio-theme') as 'light' | 'dark' | null);

      if (savedTheme === 'dark' || savedTheme === 'light') {
        setMode(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
        document.body.setAttribute('data-theme', savedTheme);
        localStorage.setItem('portfolio-theme', savedTheme);
      } else {
        setMode('light');
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.setAttribute('data-theme', 'light');
      }
    } catch {
      setMode('light');
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.setAttribute('data-theme', 'light');
    }
  }, []);

  const colorMode = React.useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          try {
            localStorage.setItem('portfolio-theme', newMode);
          } catch {}
          document.documentElement.setAttribute('data-theme', newMode);
          document.body.setAttribute('data-theme', newMode);
          return newMode;
        });
      },
    }),
    [mode]
  );

  const theme = React.useMemo(() => createTheme(getPortfolioTheme(mode)), [mode]);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ColorModeContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
