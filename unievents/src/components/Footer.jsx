import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" class="footer light-background">

    <div class="container footer-top">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-12 footer-about">
          <a href="index.html" class="logo d-flex align-items-center">
            <span class="sitename">UniEvents</span>
          </a>
          <p>Thank you for visiting our platform dedicated to enhancing university event management across Sri Lanka. Join us in creating a vibrant community where every event is an opportunity for learning, growth, and connection.
            </p><p> For inquiries, support, or to share your events, feel free to contact us. Together, let’s make university life more enriching!</p>          <div class="social-links d-flex mt-4">
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div class="col-lg-3 col-md-12 footer-links">
          <h4>Explore</h4>
          <ul>
          <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="./events" activeClassName="active">Events</NavLink></li>
            {/* <li><a href="./gallery">Gallery</a></li> */}
            <li><NavLink to="./about-us" activeClassName="active">About Us</NavLink></li>
            <li><NavLink to="./contact-us" activeClassName="active">Contact</NavLink></li>
          </ul>
        </div>

        <div class="col-lg-4 col-md-12 footer-contact text-center text-md-start">
          <h4>Contact Us</h4>
          <p>Colombo, Sri Lanka.</p>
          <p class="mt-3"><strong>Phone:</strong> <span>011-00000000</span></p>
          <p><strong>Email:</strong> <span>unievents@hotmail.com</span></p>
        </div>

      </div>
    </div>

    <div class="container copyright text-center mt-4">
      <p>© <span>Copyright</span> <strong class="px-1 sitename">UniEvents</strong> <span>All Rights Reserved</span></p>
      <div class="credits">
        Designed by UniEvents
      </div>
    </div>

  </footer>
  )
  
}

export default Footer