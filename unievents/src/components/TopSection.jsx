import React from 'react';

const TopSection = () => {
  return (
<main className="main">
        <section id="hero" className="hero section">

      <img src="assets/img/hero-bg-abstract.jpg" alt=""  className=""/>

      <div className="container">
        <div className="row justify-content-center" >
          <div className="col-xl-7 col-lg-9 text-center">
            <h1>UniEvents</h1>
            <p>We are team of talented designers making websites with Bootstrap</p>
          </div>
        </div>
        <div className="text-center" >
          <a href="#about" className="btn-get-started">Get Started</a>
        </div>

        <div className="row gy-4 mt-5">
          <div className="col-md-6 col-lg-3" >
            <div className="icon-box">
              <div className="icon"><i className="bi bi-easel"></i></div>
              <h4 className="title"><a href="">Lorem Ipsum</a></h4>
              <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" >
            <div className="icon-box">
              <div className="icon"><i className="bi bi-gem"></i></div>
              <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" >
            <div className="icon-box">
              <div className="icon"><i className="bi bi-geo-alt"></i></div>
              <h4 className="title"><a href="">Magni Dolores</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" >
            <div className="icon-box">
              <div className="icon"><i className="bi bi-command"></i></div>
              <h4 className="title"><a href="">Nemo Enim</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>
      </div>

    </section>
    </main>


  )
}

export default TopSection;