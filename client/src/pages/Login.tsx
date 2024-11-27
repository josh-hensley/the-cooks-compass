import React, { useState, FormEvent, ChangeEvent } from 'react';
import Auth from '../utils/auth.js'
import { login } from "../api/authAPI.js"

const Login: React.FC = () => {
  const [errorText, setErrorText] = useState('');
  const [loginData, setLoginData] = useState({
    username:'',
    password:''
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]:value
    })
  }
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
      if (!data.ok){
        throw new Error('Invalid login credentials');
      }
    } catch (error) {
      setErrorText(`${error}`);
      console.error('Failed to login', error);
    }
  };

  return (
    <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="login-username" className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="login-username"
                  placeholder="Enter username"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="login-password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="login-password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>{errorText}</p>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
