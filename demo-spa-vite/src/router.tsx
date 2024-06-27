import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<Login />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
