'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser } from '@/lib/api';
import './Register.css'; // Ensure the CSS file is in the same directory

export default function Register() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(formData); // Call the API function
      setSuccess(true); // Show success message
      setError(''); // Clear any previous errors
      setTimeout(() => router.push('/login'), 2000); // Redirect to login page
    } catch (err) {
      setError('Registration failed. Please try again.'); // Display error
      setSuccess(false); // Reset success flag
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {success && <p className="success-message">Registration successful! Redirecting...</p>}
      {error && <p className="error-message">{error}</p>}
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
            className="input-field"
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
            className="input-field"
          />
        </div>
        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}
