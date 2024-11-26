import React from 'react';

const LoginModal: React.FC = () => {
  return (
    <div className="modal fade" id="loginModal" tabIndex={-1} aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="loginModalLabel">Login</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="login-username" className="form-label">Username</label>
                <input type="text" className="form-control" id="login-username" placeholder="Enter username" />
              </div>
              <div className="mb-3">
                <label htmlFor="login-password" className="form-label">Password</label>
                <input type="password" className="form-control" id="login-password" placeholder="Enter password" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" id="loginButton" onClick={handleLogin}>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );

  function handleLogin() {
    const username = (document.getElementById('login-username') as HTMLInputElement).value;
    const password = (document.getElementById('login-password') as HTMLInputElement).value;
    if (!username || !password) {
      alert('Please fill out both fields!');
      return;
    }
    alert(`Welcome back, ${username}!`);
    (window as any).bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
  }
};

export default LoginModal;