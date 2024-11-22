const SignupModal: React.FC = () => {
    return (
      <div className="modal fade" id="signupModal" tabIndex={-1} aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="signupModalLabel">Sign Up</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="signupForm">
                <div className="mb-3">
                  <label htmlFor="signup-username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="signup-username" placeholder="Choose a username" />
                </div>
                <div className="mb-3">
                  <label htmlFor="signup-password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="signup-password" placeholder="Create a password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="signup-repassword" className="form-label">Retype Password</label>
                  <input type="password" className="form-control" id="signup-repassword" placeholder="Retype your password" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success" id="signupButton" onClick={handleSignup}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    );

    function handleSignup() {
      const username = (document.getElementById('signup-username') as HTMLInputElement).value;
      const password = (document.getElementById('signup-password') as HTMLInputElement).value;
      const repassword = (document.getElementById('signup-repassword') as HTMLInputElement).value;
      if (!username || !password || !repassword) {
        alert('All fields are required!');
        return;
      }
      if (password !== repassword) {
        alert('Passwords do not match!');
        return;
      }
      alert(`Sign-Up successful! Welcome, ${username}!`);
      (window as any).bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
    }
  };

  export default SignupModal;
