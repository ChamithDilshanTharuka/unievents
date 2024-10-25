import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
    return (
        <div>
            <section id="services" className="services section light-background">
                <div className="container section-title" data-aos="fade-up">
                    <h2>Events</h2>
                    <p>Explore Exciting Events Happening Across Our University Network And Discover New Opportunities</p>
                </div>

                <div className="container">

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item item-cyan position-relative">
                                <div className='event-img'>
                                    <img src="/assets/img/1.png" alt="img" />
                                </div>
                                <Link to="/event-details" className="stretched-link">
                                    <h3>Event Name</h3>
                                </Link>
                                <b>Date</b>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    )
}
export default Events;