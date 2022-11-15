/* eslint-disable no-useless-return */
import React from 'react';

// Styles
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/Global';

// Themes
import MUITheme from '../styles/Default/Mui';
import SCTheme from '../styles/Default/Styled';

// Components
import Router from '../Router';
import { ProjectProvider } from '../Context/ProjectContext';

function App() {
  return (
    <MUIThemeProvider theme={MUITheme}>
      <SCThemeProvider theme={SCTheme}>
        <GlobalStyles />
        <ProjectProvider>
          <Router />
        </ProjectProvider>
      </SCThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
