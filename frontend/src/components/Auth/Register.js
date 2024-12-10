// Register.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerUser } from '../../api';
import './Register.css'; // Assuming you have the CSS for styling

const Register = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response.status === 201) {
        setSuccess(true);
        setError('');
        // Redirect to login page after successful registration
        setTimeout(() => {
          navigate('/login');
        }, 2000); // 2 seconds delay before navigating to login
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
      setSuccess(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {success && <p className="success-message">Registration successful! Redirecting to login...</p>}
      {error && <p className="error-message">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
