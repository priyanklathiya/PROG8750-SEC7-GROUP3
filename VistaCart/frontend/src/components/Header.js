import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../css/header.css';
import Logo from '../images/vistacartlogomini.png';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(prevState => !prevState);
  };

    return (
      <>
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="Vista cart Logo" />
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>
        <div className={`menu-icon ${isNavVisible ? 'active' : ''}`} onClick={toggleNavVisibility}>
          <i className="fa fa-bars"></i>
        </div>            
      </div>
        <nav className={`nav-links ${isNavVisible ? 'visible' : ''}`}>
          <Link to="/">Home</Link>
          <div className="categories-dropdown">
            <button className="categories-button">Categories</button>
            <div className="categories-content">
              <Link to="/" className="category-link">Men</Link>
              <Link to="/" className="category-link">Women</Link>
            </div>
          </div>
          <Link to="/" className="cart-link">Cart</Link>
          <Link to="/Login" className="login-link">Sign Up/Login</Link>
        </nav>
    </header>
            
      <Outlet />
      </>
  );
};

export default Header;
