import React, { useState } from 'react';
import axios from 'axios';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [passwordResetStatus, setPasswordResetStatus] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleConfirmEmailChange = (event) => {
    setConfirmEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if both email and confirmEmail match
    if (email !== confirmEmail) {
      alert('Email and Confirm Email do not match.');
      return;
    }

    try {
      // Send the email and confirmEmail to the backend for password reset
      const response = await axios.post('http://localhost:9001/api/reset-password', {
        email,
      });

      setPasswordResetStatus(response.data);
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Email</label>
          <input
            type="email"
            className="form-control"
            value={confirmEmail}
            onChange={handleConfirmEmailChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
      {passwordResetStatus && <div>{passwordResetStatus}</div>}
    </div>
  );
};


