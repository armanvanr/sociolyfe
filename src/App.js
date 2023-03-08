import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';

const App = () => {
  const location = useLocation();
  const [needSidebar, setNeedSidebar] = useState(true);

  useEffect(() => {
    ['/login'].includes(location.pathname) ? setNeedSidebar(false) : setNeedSidebar(true);
  }, [location]);

  return (
    <div className="App">
      {needSidebar && <Sidebar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div >
  );
};

export default App;
