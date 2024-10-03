import React from 'react';

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
            <li><a href="#hero" className="active">Home<br /></a></li>
            <li><a href="#services">Events</a></li>
            <li><a href="#portfolio">Gallery</a></li>
            <li><a href="../AboutUs">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <a className="btn-getstarted" href="#about">Get Started</a>

      </div>
    </header>
  );
};

export default Header;
