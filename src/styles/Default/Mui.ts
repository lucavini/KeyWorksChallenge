import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },

  palette: {
    primary: {
      light: '#8CC587',
      main: '#107154',
      dark: '#3A5138',
      contrastText: '#fff',
    },

    secondary: {
      light: '#0000004D',
      main: '#00000080',
      dark: '#000000E6',
      contrastText: '#fff',
    },

    error: {
      main: '#A31E20',
    },
  },
});

export default theme;
