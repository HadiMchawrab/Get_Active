import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './home.js';
import Login from './login.js';
import Menu from './menu.js';
// import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(process.env.Project_URL, process.env.Project_KEY)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />        
      </Routes>
    </Router>
  );
}

export default App;