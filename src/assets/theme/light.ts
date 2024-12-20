import { createTheme } from '@mui/material';

const themeLight = createTheme({
  palette: {
    primary: {
      main: '#f8f9fa',
      light: '#ffffff',
      darker: '#3a2f54',
      border: '#e9e9e9',
      contrastText: '#000000',
      dark: '#718096',
      hover: '#f1f1f1',
      mobile_button: '#007bff',
    },
    secondary: {
      main: '#2a0b2b',
    },
    font: {
      main: '#ffffff',
    },
    success: {
      main: '#fff',
      mainLight: '#fff',
      mainDark: '#00c38c',
      bgLight: '#00c38c',
      bgDark: '#0d622c',
    },
    error: {
      main: '#fff',
      mainLight: '#fff',
      mainDark: '#ff646d',
      bgLight: '#ea4957',
      bgDark: '#841616',
      alertColor: '#ecc0c0',
      alertBackground: '#3e1b1b',
    },
    favourite: {
      main: '#eda803',
    },
  },
});

export default themeLight;
