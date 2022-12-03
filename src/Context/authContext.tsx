import React from 'react';
import api from '../service/api';

interface authProviderProps {
  children: React.ReactNode;
}

export interface User {
  id: string;
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
  userId: User;
}

const AuthContext = React.createContext<authContextData>({} as authContextData);

export function AuthProvider({ children }: authProviderProps) {
  const [userId, setUserId] = React.useState<User>({} as User);
  const [signed, setSigned] = React.useState(false);

  React.useEffect(() => {
    const token = localStorage.getItem('@tokenJWT');
    const userid = localStorage.getItem('@user');

    async function autoLogin() {
      if (token && userid) {
        const tokenJWT = JSON.parse(token);

        api.defaults.headers.common.authorization = `Bearer ${tokenJWT}`;
        const isTokenValid = await api
          .get(`user/${userid}`)
          .then((response) => response.data);

        if (isTokenValid) {
          setUserId({ id: userid });
          setSigned(true);
        } else {
          setSigned(false);
          setUserId({} as User);
          localStorage.removeItem('@tokenJWT');
          localStorage.removeItem('@user');
          api.defaults.headers.common = { Authorization: false };
        }
      }
    }

    autoLogin();
  }, []);

  async function handleLogin({ email, password }: loginProps) {
    const response = await api.post('auth/login', { email, password });

    setSigned(true);
    setUserId(response.data.id);
    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
    localStorage.setItem('@tokenJWT', JSON.stringify(response.data.token));
    localStorage.setItem('@user', JSON.stringify(response.data.id));

    return response.status;
  }

  function handleLogout() {
    setSigned(false);
    setUserId({} as User);
    localStorage.removeItem('@tokenJWT');
    localStorage.removeItem('@user');
    api.defaults.headers.common = { Authorization: false };

    window.location.reload();
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ handleLogin, handleLogout, signed, userId }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const { handleLogin, handleLogout, signed, userId } = React.useContext(AuthContext);

  return { handleLogin, handleLogout, signed, userId };
}
