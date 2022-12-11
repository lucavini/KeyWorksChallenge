import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },

  palette: {
    primary: {
      light: '#84BBE9',
      main: '#518CBC',
      dark: '#1C5788',
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

    info: {
      main: '#D60297',
    },
  },
});

export default theme;
