import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';

function Auth() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  );
}

export default Auth;
