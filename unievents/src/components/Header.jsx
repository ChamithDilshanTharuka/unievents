import React from 'react';
import { Link } from 'react-router-dom';

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
          <li><Link to="/" className="active">Home</Link></li>
            <li><a href="./events">Events</a></li>
            {/* <li><a href="./gallery">Gallery</a></li> */}
            <li><Link to="./about-us">About Us</Link></li>
            <li><Link to="./contact-us">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link to="./login" className="btn-getstarted">Login</Link>

      </div>
    </header>
  );
};

export default Header;
