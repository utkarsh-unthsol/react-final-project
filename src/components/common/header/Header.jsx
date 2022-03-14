import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserUpdater } from '../../../context/User';
import './Header.css';

export default function Header() {
  const navigate = useNavigate();
  const userUpdater = useUserUpdater();

  const handleLogout = () => {
    userUpdater(null);
    navigate('/login', { replace: true });
  };

  return (
    <header>
      <nav className="header-page-nav">
        <div>
          <img src="/images/logo.png" className="header-nav-logo" alt="logo" />
        </div>
        <div>
          <button type="button" onClick={handleLogout} className="btn-02 btn">
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
}
