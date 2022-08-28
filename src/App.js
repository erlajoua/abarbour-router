import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        { /* protected route */}
        <Route path="linkpage" element={<RequireAuth component={LinkPage} />} />
      </Route>
    </Routes>
  );
}

export default App;