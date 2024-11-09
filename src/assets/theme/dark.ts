import { createTheme } from '@mui/material';

const themeDark = createTheme({
  palette: {
    primary: {
      main: '#2a0b2b',
      light: '#1e2025',
      darker: '#1e2025',
      border: '#2d2b2a',
      contrastText: '#ffffff',
      dark: '#718096',
      hover: '#201f1e',
      mobile_button: '#cb2498',
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
      mainDark: 'rgb(14, 203, 129)',
      bgLight: '#00c38c',
      bgDark: '#0d622c',
    },
    error: {
      main: '#fff',
      mainLight: '#fff',
      mainDark: 'rgb(246, 70, 93)',
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

export default themeDark;
