import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogin = (word,isNew) => {
    navigate('/login', { state: { word, isNew } });
  };

  return (
    <div>
      <h1>Welcome to the App</h1>
      <h2>Are you a new member</h2>
      <button onClick={() => handleLogin('Member','signup')}>Member</button>
      <button onClick={() => handleLogin('Court Owner','signup')}>Court Owner</button>
      <button onClick={() => handleLogin('Personal Trainer','signup')}>Personal Trainer</button>
      <h2>Already Have an account</h2>
      <button onClick={() => handleLogin('Member','login')}>Member</button>
      <button onClick={() => handleLogin('Court Owner','login')}>Court Owner</button>
      <button onClick={() => handleLogin('Personal Trainer','login')}>Personal Trainer</button>
    </div>
  );
}

export default Home;
