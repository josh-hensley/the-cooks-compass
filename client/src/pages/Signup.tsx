import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { createUser } from '../api/userAPI.js';

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const handleChange: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit: FormEventHandler = async (e: FormEvent) => {
    e.preventDefault();
    if (formData) {
      const user = await createUser(formData);
      localStorage.setItem('user', JSON.stringify(user));
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <button type="submit" onSubmit={handleSubmit}>Sign Up</button>
      </form>
    </div>
  );
}

export default SignupForm;