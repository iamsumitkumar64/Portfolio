import { createTheme, ThemeOptions } from '@mui/material/styles';

export const getPortfolioTheme = (mode: 'light' | 'dark'): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#005a5f' : '#10b981',
      light: mode === 'light' ? '#039365' : '#34d399',
      dark: mode === 'light' ? '#003d40' : '#059669',
      contrastText: mode === 'light' ? '#ffffff' : '#090a0d',
    },
    secondary: {
      main: mode === 'light' ? '#039365' : '#10b981',
      light: '#34d399',
      dark: '#059669',
      contrastText: mode === 'light' ? '#ffffff' : '#090a0d',
    },
    background: {
      default: mode === 'light' ? '#fbf8f4' : '#090a0d',
      paper: mode === 'light' ? '#ffffff' : '#121317',
    },
    text: {
      primary: mode === 'light' ? '#18181b' : '#f3f4f6',
      secondary: mode === 'light' ? '#52525b' : '#9ca3af',
    },
    divider: mode === 'light' ? '#e0cac5' : '#20232d',
  },
  typography: {
    fontFamily: '"Be Vietnam Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.035em',
    },
    h2: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontFamily: '"Source Serif 4", Georgia, serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
          padding: '8px 20px',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Fira Code", monospace',
          fontWeight: 500,
          borderRadius: 9999,
        },
      },
    },
  },
});
