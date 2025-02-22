import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const word = location.state?.word || 'member';
  const isNew = location.state?.isNew || 'login';
  const [view, setView] = useState(isNew);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');



  const handleLogin = (event) => {
    event.preventDefault(); 
    const credentials = { email, password};
    navigate('/menu', { state: credentials });
  };

  const handleSignup = (event) => {
    event.preventDefault(); 
    const reg = { email, password, firstName, lastName, phone, city, country };
    navigate('/menu', { state: reg });
  };

  


  return (
    <div className="App-container">
      {/* Background Image Section */}
      <div className="background-image"></div>
  
      {/* Login Form Section */}
      <div className="login-container">
        {view === 'login' ? (
          <div className="login-card">
            <div className="login-header">
              <h3>Welcome Back!</h3>
              <h2>Log In as a {word}</h2>
            </div>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '20px' }}></div>

              <div className="checkbox-group">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button type="submit" className="login-btn">Login</button>
              <a
                href="https://support.google.com/accounts/answer/7682439?hl=en"
                className="forgot-password"
              >
                Forgot Password?
              </a>
            </form>
            <p className="forgot-password">
              Don't have an account?{' '}
              <button onClick={() => setView('signup')} className="link-button">
                Sign up
              </button>
            </p>
          </div>
        ) : (
          <div className="login-card">
            <div className="login-header">
              <h2>Register as a {word}</h2>
            </div>
            <form className="login-form" onSubmit={handleSignup}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="First Name"
                  className="input-field"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input-field"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input-field"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="City"
                  className="input-field"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Country"
                  className="input-field"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input-field"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '20px' }}></div>

              <div className="checkbox-group">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button type="submit" className="login-btn">Sign Up</button>
            </form>
            <p className="forgot-password">
              Already have an account?{' '}
              <button onClick={() => setView('login')} className="link-button">
                Log In
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
  
}

export default Login;