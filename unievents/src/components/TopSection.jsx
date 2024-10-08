import React from 'react';

const TopSection = () => {
  return (
<main className="main">
        <section id="hero" className="hero section">

      <img src="assets/img/hero-bg-abstract.jpg" alt="" data-aos="fade-in" className=""/>

      <div className="container">
        <div className="row justify-content-center" data-aos="zoom-out">
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>UniEvents</h1>
            <p>Welcome to Our Centralized University Event Management Platform</p>
          </div>
        </div>


        <div className="row gy-4 mt-5">
          <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-universal-access"></i></div>
              <h4 className="title"><a href="">Connect & Collaborate</a></h4>
              <p className="description">Collaborate with students from other universities to build lasting connections through shared events.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-calendar-event"></i></div>
              <h4 className="title"><a href="">Exclusive Events</a></h4>
              <p className="description">Unlock access to exclusive events, including competitions, cultural festivals, and interactive workshops.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-diagram-3"></i></div>
              <h4 className="title"><a href="">Expand Your Network</a></h4>
              <p className="description">Engage with students from various universities, building new friendships and opportunities.</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="zoom-out" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-search"></i></div>
              <h4 className="title"><a href="">New Opportunities</a></h4>
              <p className="description">Find and participate in a range of events that align with your passions.</p>
            </div>
          </div>

        </div>
      </div>

    </section>
    </main>


  )
}

export default TopSection;