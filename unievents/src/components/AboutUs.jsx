import React from 'react'
import '../styles/main.css';

const AboutUs = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About UniEvents</h2>
        <p>Connecting students and empowering events across universities in Sri Lanka.</p>
      </div>

      <div className="container">
        <div className="row gy-4">

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p>
              UniEvents is dedicated to creating a centralized platform that brings together university students for diverse events and collaborative opportunities. Join us to enhance your university experience through engaging events and meaningful connections.
            </p>
            <ul>
              <li><i className="bi bi-check2-circle"></i> <span>Seamless event notifications to keep everyone informed and engaged.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>Opportunities for collaboration on projects and ideas across universities.</span></li>
              <li><i className="bi bi-check2-circle"></i> <span>A vibrant community fostering personal and academic growth.</span></li>
            </ul>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <p>
              Our mission is to bridge the gap in university event engagement by creating a space where students can connect, share, and grow together. With UniEvents, you’re part of a community that values collaboration and innovation, making each event a memorable experience.
            </p>
            <a href="#" className="read-more"><span>Learn More</span><i className="bi bi-arrow-right"></i></a>
          </div>

        </div>
      </div>

    </section>
  )
}

export default AboutUs;
