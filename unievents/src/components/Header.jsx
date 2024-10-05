import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">

        <a href="index.html" className="logo d-flex align-items-center me-auto">
          <img src="assets/img/logo.png" alt="UniEvents Logo" />
          <h1 className="sitename">UniEvents</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="./events" activeClassName="active">Events</NavLink></li>
            {/* <li><a href="./gallery">Gallery</a></li> */}
            <li><NavLink to="./about-us" activeClassName="active">About Us</NavLink></li>
            <li><NavLink to="./contact-us" activeClassName="active">Contact</NavLink></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <NavLink to="./login" className="btn-getstarted" activeClassName="active">Login</NavLink>

      </div>
    </header>
  );
};

export default Header;
