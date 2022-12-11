import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import MUITheme from '../styles/Default/Mui';
import MUIThemePersonal from '../styles/Default/MuiPersonal';
import SCTheme from '../styles/Default/Styled';
import SCThemePersonal from '../styles/Default/StyledPersonal';
import GlobalStyles from '../styles/Global';

import Auth from '../Components/Auth';
import Home from '../Components/Home';
import { useAuth } from '../Context/authContext';
import { ProjectContext } from '../Context/ProjectContext';

interface protectedRouteProps {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: protectedRouteProps) {
  const location = useLocation();
  const { signed } = useAuth();

  if (!signed) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

function Router() {
  const { isPersonal } = React.useContext(ProjectContext);
  return (
    <MUIThemeProvider theme={isPersonal ? MUIThemePersonal : MUITheme}>
      <SCThemeProvider theme={isPersonal ? SCThemePersonal : SCTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />

            <Route path="/login/*" element={<Auth />} />
          </Routes>
        </BrowserRouter>
      </SCThemeProvider>
    </MUIThemeProvider>
  );
}

export default Router;
