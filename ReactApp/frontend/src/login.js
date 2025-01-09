import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const word = location.state?.word || 'member';
  console.log("Received word:", word);

  const handleLogin = (event) => {
    event.preventDefault(); 
    navigate('/menu'); 
  };

  return (
    <div className="App-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Log in as a {word}</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <input type="text" placeholder="Username" className="input-field" />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" className="input-field" />
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <a href="https://support.google.com/accounts/answer/7682439?hl=en" className="forgot-password">Forgot Password?</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
