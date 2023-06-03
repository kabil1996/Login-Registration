import React from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = ({ openClass }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('auth');
      navigate('/login');
    };
  return (
    <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
      <ul className="navlist">
        <li>
          <a className="menu-item" href="/home">
            Home
          </a>
        </li>
        <li>
          <a className="menu-item" href="/aboutus">
           Aboutus
          </a>
        </li>
        <li>
      <button className="submit-button" onClick={handleLogout}>
        Logout
      </button>
      </li>
      </ul>
    </nav>
  );
};

export default SideBar;
