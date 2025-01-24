import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import Login from './pages/login.js';
import Menu from './pages/menu.js';
import Profile from './pages/profile.js';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />      
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;