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
                                <a href="assets/img/masonry-portfolio/masonry-portfolio-1.jpg" title="Event Name" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><span>Preview     </span><i class="bi bi-zoom-in"></i></a>
                                <img src="assets/img/masonry-portfolio/masonry-portfolio-2.jpg" class="img-fluid" alt="" />
                                <div class="portfolio-info">
                                    <h4>Event Name</h4>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="services-list">
                                <h4>Event Name:</h4>
                                <input type="text" id="ename" placeholder="Enter Event Name" />

                                <h4>Event Category</h4>
                                <input type="text" id="category" placeholder="Enter Event Category" />

                                <h4>Start Date and Time</h4>
                                <input type="datetime-local" id="start-time" />

                                <h4>End Date and Time</h4>
                                <input type="datetime-local" id="end-time" />

                                <h4>Venue/Location</h4>
                                <input type="text" id="location" placeholder="Enter Venue/Location" />

                                <h4>Ticket Fee</h4>
                                <input type="number" id="ticket-fee" placeholder="Enter Ticket Fee" min="0" />

                                <h4>Capacity</h4>
                                <input type="number" id="capacity" placeholder="Enter Capacity" min="0" />

                                <h4>Registration Link</h4>
                                <input type="url" id="reg-link" placeholder="Enter Registration Link" />
                            </div>

                        </div>

                    </div>

                    <div class="col-lg-12" data-aos="fade-up" data-aos-delay="200">
                        <h4>Event Description</h4>
                        <input type="textarea" id="event-data" placeholder="Enter Details" />
                    </div>
                </div>

            </section>
        </>
    )
}
