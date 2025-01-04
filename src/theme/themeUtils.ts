import { createTheme } from '@mui/material';
import { PaletteMode } from '@mui/material';

export const createAppTheme = (mode: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: 'Inter, "system-ui", "Avenir", "Helvetica", Arial, sans-serif',
      h1: {
        fontWeight: 600,
      },
      h2: {
        fontWeight: 500,
      },
      h6: {
        fontWeight: 500,
      },
    },
    palette: {
      mode,
      background: {
        default: mode === 'light' ? '#FAF9F6' : '#121212', // Cream color in light mode
        paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
      },
      text: {
        primary: mode === 'light' ? '#333333' : '#FFFFFF',
        secondary: mode === 'light' ? '#666666' : '#CCCCCC',
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: ({ ownerState, theme }) => ({
            backgroundColor:
              theme.palette.mode === 'light'
                ? '#333333' // Dark grey for header
                : '#1E1E1E',
            color: '#FFFFFF',
            ...(ownerState.position === 'static' && {
              'footer &': {
                backgroundColor:
                  theme.palette.mode === 'light'
                    ? '#C0C0C0' // Silver footer
                    : '#A9A9A9', // Darker silver in dark mode
                color: theme.palette.mode === 'light' ? '#333333' : '#FFFFFF',
              },
            }),
          }),
        },
      },
      MuiLink: {
        styleOverrides: {
          root: ({ theme }) => ({
            color:
              theme.palette.mode === 'light'
                ? '#0d47a1' // Deep blue for light mode
                : '#90caf9', // Soft blue for dark mode
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            '&:hover': {
              color:
                theme.palette.mode === 'light'
                  ? '#1565c0' // Slightly brighter blue on hover in light mode
                  : '#64b5f6', // Brighter blue on hover in dark mode
              textDecoration: 'underline',
            },
            '&:visited': {
              color:
                theme.palette.mode === 'light'
                  ? '#4a148c' // Deep purple for visited links in light mode
                  : '#ba68c8', // Lighter purple for visited links in dark mode
            },
          }),
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: ({ theme }) => ({
            '& a': {
              color:
                theme.palette.mode === 'light'
                  ? '#0d47a1' // Deep blue for light mode
                  : '#90caf9', // Soft blue for dark mode
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                color:
                  theme.palette.mode === 'light'
                    ? '#1565c0' // Slightly brighter blue on hover in light mode
                    : '#64b5f6', // Brighter blue on hover in dark mode
                textDecoration: 'underline',
              },
              '&:visited': {
                color:
                  theme.palette.mode === 'light'
                    ? '#4a148c' // Deep purple for visited links in light mode
                    : '#ba68c8', // Lighter purple for visited links in dark mode
              },
            },
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            '&:hover': {
              backgroundColor: mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
            },
          },
        },
      },
    },
  });

export type ThemeContextType = {
  mode: PaletteMode;
  toggleColorMode: () => void;
};
