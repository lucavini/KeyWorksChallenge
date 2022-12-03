import React from 'react';
import api from '../service/api';

interface authProviderProps {
  children: React.ReactNode;
}

interface loginProps {
  email: string;
  password: string;
}

interface authContextData {
  // eslint-disable-next-line no-unused-vars
  handleLogin: (params: loginProps) => Promise<any>;
  handleLogout: () => void;
  signed: boolean;
}

const AuthContext = React.createContext<authContextData>({} as authContextData);

export function authProvider({ children }: authProviderProps) {
  const [signed, setSigned] = React.useState(false);

  async function handleLogin({ email, password }: loginProps) {
    const response = await api.post('auth/login', { email, password });

    setSigned(true);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    localStorage.setItem('@tokenJWT', JSON.stringify(response.data.token));
    return response.status;
  }

  function handleLogout() {
    setSigned(false);
    localStorage.removeItem('@tokenJWT');
    api.defaults.headers.common = { Authorization: false };

    window.location.reload();
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ handleLogin, handleLogout, signed }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { handleLogin, handleLogout, signed } = React.useContext(AuthContext);

  return { handleLogin, handleLogout, signed };
}
