import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Auth from '../Components/Auth';
import Home from '../Components/Home';
import { useAuth } from '../Context/authContext';

interface protectedRouteProps {
  signed: boolean;
  children: React.ReactNode;
}

function ProtectedRoute({ signed, children }: protectedRouteProps) {
  const location = useLocation();

  if (!signed) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}

function Router() {
  const { signed } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute signed={signed}><Home /></ProtectedRoute>} />

        <Route path="/login/*" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
