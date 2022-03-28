import React from 'react';
// styles
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/Global';
import MUITheme from '../styles/Default/Mui';
import SCTheme from '../styles/Default/Styled';
import Home from '../Components/Home';
import { ProjectProvider } from '../Context/ProjectContext';

function App() {
  return (
    <MUIThemeProvider theme={MUITheme}>
      <SCThemeProvider theme={SCTheme}>
        <GlobalStyles />
        <ProjectProvider>
          <Home />
        </ProjectProvider>
      </SCThemeProvider>
    </MUIThemeProvider>
  );
}

export default App;
