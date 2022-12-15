import React from 'react';
import api from '../service/api';

interface authProviderProps {
  children: React.ReactNode;
}

export interface User {
  _id: string;
  name: string;
  email: string;
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
  userInfo: User;
  autoLogin: () => Promise<boolean>;
}

const AuthContext = React.createContext<authContextData>({} as authContextData);

export function AuthProvider({ children }: authProviderProps) {
  const [userInfo, setUserInfo] = React.useState<User>({} as User);
  const [signed, setSigned] = React.useState(true);

  const token = localStorage.getItem('@tokenJWT');
  const storagedUser = localStorage.getItem('@user');

  async function autoLogin() {
    if (token && storagedUser) {
      const tokenJWT = JSON.parse(token);
      const user = JSON.parse(storagedUser);

      setSigned(true);
      api.defaults.headers.common.authorization = `Bearer ${tokenJWT}`;

      try {
        const { _id, email, name }: User = await api
          // eslint-disable-next-line no-underscore-dangle
          .get(`user/${user._id}`)
          .then((res) => res.data.user);

        setUserInfo({
          _id,
          email,
          name,
        });
        setSigned(true);
      } catch (error) {
        setSigned(false);
        localStorage.removeItem('@tokenJWT');
        localStorage.removeItem('@user');
        api.defaults.headers.common = { Authorization: false };
      }
    } else {
      setSigned(false);
    }

    return signed;
  }

  React.useEffect(() => {
    autoLogin();
  }, []);

  async function handleLogin(LoginProps: loginProps) {
    const response = await api.post('auth/login', { email: LoginProps.email, password: LoginProps.password });

    api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;

    const user: User = await api.get(`user/${response.data.id}`).then((res) => res.data.user);

    setUserInfo({
      ...user,
    });

    setSigned(true);
    localStorage.setItem('@tokenJWT', JSON.stringify(response.data.token));
    localStorage.setItem('@user', JSON.stringify(user));

    return response.status;
  }

  function handleLogout() {
    setSigned(false);
    localStorage.removeItem('@tokenJWT');
    localStorage.removeItem('@user');
    api.defaults.headers.common = { Authorization: false };

    window.location.reload();
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ handleLogin, handleLogout, signed, autoLogin, userInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  // eslint-disable-next-line operator-linebreak
  const { handleLogin, handleLogout, signed, autoLogin, userInfo } =
    React.useContext(AuthContext);

  return { handleLogin, handleLogout, signed, autoLogin, userInfo };
}
