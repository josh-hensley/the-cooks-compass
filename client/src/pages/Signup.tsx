//const SignUp: React.FC = () => <h1>Sign-Up Page</h1>;
import React, { useState } from 'react';
import styles from './page4.css'; 

function SignupForm() { 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation here (optional)
    // You can check for empty fields, password length etc.
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    // Send data to server (optional)
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;