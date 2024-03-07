import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Greeter from "./greeter";
import 'bootstrap/dist/css/bootstrap.min.css';


const RegistrationForm1 = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fullname) {
      errors.fullname = "Enter your fullname";
      isValid = false;
    }

    if (!email) {
      errors.email = "Enter your Email";
      isValid = false;
    }

    if (email.length > 0) {
      // Add email validation if needed
    }

    if (!password) {
      errors.password = "Enter the password";
      isValid = false;
    }

    if (password.length > 0) {
      if (password.length < 6) {
        errors.password = 'Password must be at least 6 characters long';
        isValid = false;
      }
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Enter the password';
      isValid = false;
    }

    if (confirmPassword.length > 0) {
      if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }

    setErrors(errors);
    return isValid;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log(`Name: ${fullname}\n Email: ${email}\n Password: ${password}`)
      // You can add your logic to handle the registration here
      navigate('/login');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullname">Name</label>
        <input
          type="text"
          className={`form-control ${errors.fullname ? 'error' : ''}`}
          id="fullName"
          value={fullname}
          onChange={(event) => setFullname(event.target.value)}
        />
        {errors.fullname && <span className="text-danger">{errors.fullname}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className={`form-control ${errors.email ? 'error' : ''}`}
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        {errors.email && <span className="text-danger">{errors.email}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className={form-control ${errors.password ? 'error' : ''}}
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {errors.password && <span className="text-danger">{errors.password}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          className={form-control ${errors.confirmPassword ? 'error' : ''}}
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword}</span>}
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
    </form>
  );
}

export default RegistrationForm1;   