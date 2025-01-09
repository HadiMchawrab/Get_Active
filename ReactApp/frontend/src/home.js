import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = (word) => {
    navigate('/login', { state: { word } });
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <button onClick={() => handleLogin('Member')}>Member</button>
      <button onClick={() => handleLogin('Court Owner')}>Court Owner</button>
      <button onClick={() => handleLogin('Personal Trainer')}>Personal Trainer</button>
    </div>
  );
}

export default Home;
