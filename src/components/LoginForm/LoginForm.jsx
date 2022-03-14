import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useUserUpdater } from '../../context/User';
import './LoginForm.css';

export default function Login() {
  const navigate = useNavigate();
  const user = useUser();
  const userUpdater = useUserUpdater();

  useEffect(() => {
    if (user) navigate('/', { replace: true });
  }, [user]);

  const [currentUser, setCurrentUser] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({});

  const handleChange = (e) => {
    const input = e.target;

    setCurrentUser({
      ...currentUser,
      [input.name]: input.value,
    });
  };

  const isValidUser = () => {
    const valid = {
      email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      password: /\S{8}/,
    };

    if (!valid.email.test(currentUser.email)) {
      setError({ email: 'Enter a valid email' });
      return false;
    }

    if (!valid.password.test(currentUser.password)) {
      setError({ password: 'Enter a min 8 characters' });
      return false;
    }

    return true;
  };

  const doSubmit = (e) => {
    e.preventDefault();

    if (!isValidUser()) return;

    userUpdater({
      ...currentUser,
      username: currentUser.email.split('@')[0],
      phone: String(parseInt(currentUser.email, 36))
        .substring(0, 10)
        .padEnd(10, '0'),
    });
    navigate('/', { replace: true });
  };

  return (
    <div className="login-form-container">
      <form className="login-form rounded-1" onSubmit={(e) => doSubmit(e)}>
        <label htmlFor="email" className="input-field text-center">
          <span>Email</span>
          {error.email && (
            <div className="block login-error-message">{error.email}</div>
          )}
          <input
            required
            id="email"
            className="rounded-2 mx-auto p-1 text-center"
            name="email"
            placeholder="ex: example@email.com"
            type="email"
            value={currentUser.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <label htmlFor="password" className="input-field text-center">
          <span>Password</span>
          {error.password && (
            <div className="block login-error-message">{error.password}</div>
          )}
          <input
            required
            id="password"
            className="rounded-2 mx-auto p-1 text-center"
            name="password"
            placeholder="Password"
            type="password"
            value={currentUser.password}
            onChange={(e) => handleChange(e)}
          />
        </label>
        <button className="mx-auto block rounded-2 btn btn-01" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
