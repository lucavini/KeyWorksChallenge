/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import 'styled-components';
import { PaletteColorOptions, PaletteColor, SimplePaletteColorOptions } from '@mui/material/styles';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
      };

      secondary: {
        light: string;
        main: string;
        dark: string;
      };

      error: {
        main: string;
      };
    };
  }
}

declare module '@mui/material/styles' {
  export interface PaletteColorOptions {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  }
  export interface PaletteColor {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  }
  export interface SimplePaletteColorOptions {
    light?: string;
    main?: string;
    dark?: string;
    contrastText?: string;
  }
}
