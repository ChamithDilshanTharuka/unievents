import React from 'react'

export const EventDetails = () => {
    return (
        <>
            <div class="page-title accent-background">
                <div class="container">
                    <h1>Event Details</h1>
                    <nav class="breadcrumbs">
                        <ol>
                            <li><a href="index.html">Home</a></li>
                            <li class="current">Event Details</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section id="service-details" class="service-details section">

                <div class="container">

                    <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <div class="portfolio-item isotope-item filter-app">
                                <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event Name</h4>
                                    <p>Event Description</p>
                                    <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="Event Name" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="services-list">
                                <h4>h1</h4>
                                <h4>h1</h4>
                                <h4>h1</h4>
                                <h4>h1</h4>
                                <h4>h1</h4>
                            </div>

                            <h4>Enim qui eos rerum in delectus</h4>
                            <p>Nam voluptatem quasi numquam quas fugiat ex temporibus quo est. Quia aut quam quod facere ut non occaecati ut aut. Nesciunt mollitia illum tempore corrupti sed eum reiciendis. Maxime modi rerum.</p>
                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
