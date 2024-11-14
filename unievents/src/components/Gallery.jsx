import React from 'react';

const Gallery = () => {
  return (
    <section id="portfolio" class="portfolio section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Gallery</h2>
      <p>Discover vibrant moments from our events and see the energy of our university community come alive!</p>
    </div>
    <div class="container">

      <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">Competitions</li>
          <li data-filter=".filter-product">Cultural</li>
          <li data-filter=".filter-branding">Sports</li>
        </ul>
        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img src="assets/img/gallery/g1.jpg" class="img-fluid" alt=""/>
            {/* <div class="portfolio-info">
              <h4>App 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="assets/img/gallery/g1.jpg" title="App 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="#" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img src="assets/img/gallery/g2.jpg" class="img-fluid" alt=""/>
            {/* <div class="portfolio-info">
              <h4>Product 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="assets/img/gallery/g2.jpg" title="Product 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="#" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
            <img src="assets/img/gallery/g3.jpg" class="img-fluid" alt=""/>
            {/* <div class="portfolio-info">
              <h4>Branding 1</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="assets/img/gallery/g3.jpg" title="Branding 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="#" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
            <img src="assets/img/gallery/g4.jpg" class="img-fluid" alt=""/>
            {/* <div class="portfolio-info">
              <h4>App 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="assets/img/gallery/g4.jpg" title="App 2" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="#" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div> */}
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
            <img src="assets/img/gallery/g5.jpg" class="img-fluid" alt=""/>
            {/* <div class="portfolio-info">
              <h4>Product 2</h4>
              <p>Lorem ipsum, dolor sit</p>
              <a href="assets/img/gallery/g5.jpg" title="Product 2" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
              <a href="#" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
            </div> */}
          </div>

        </div>

      </div>

    </div>

  </section>
  )
}

export default Gallery