/* eslint-disable no-useless-return */
import React from 'react';

// Components
import Router from '../Router';
import { ProjectProvider } from '../Context/ProjectContext';
import { AuthProvider } from '../Context/authContext';

function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <Router />
      </ProjectProvider>
    </AuthProvider>
  );
}

export default App;
