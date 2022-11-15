import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from '../Components/Auth';
import Home from '../Components/Home';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/*' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
