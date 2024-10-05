import React, { useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the default Quill styling


export const EventDetails = () => {

    const [editorContent, setEditorContent] = useState(''); // State for ReactQuill content
    const [imageURL, setImageURL] = useState('');

    return (
        <>
            <div className="page-title accent-background">
                <div className="container">
                    <h1>Event Details</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><a href="/">Home</a></li>
                            <li><a href="#">EventDetails</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section id="service-details" className="service-details section">

                <div className="container">

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <div className="portfolio-item isotope-item filter-app">
                            <p>image show up here</p>
                                <img src={imageURL} className="img-fluid" alt="" />
                                <div className="portfolio-info services-list">

                                    <h4>Event Name:</h4>
                                    <p>Enter Event Name</p> 
                                    <h4>Registration Link</h4>
                                    <p>Enter Registration Link</p> 

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="services-list">
                                <h4>Event Name:</h4>
                                <p>Enter Event Name</p>

                                <h4>Event Category</h4>
                                <p>Enter Event Category</p>

                                <h4>Start Date and Time</h4>
                                <p>Start Date</p>

                                <h4>End Date and Time</h4>
                                <p>End Date</p>

                                <h4>Venue/Location</h4>
                                <p>Location</p>

                                <h4>Ticket Fee</h4>
                                <p>Fee</p> 

                                <h4>Capacity</h4>
                                <p>Capacity</p>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-12 services-list" data-aos="fade-up" data-aos-delay="200">
                        <h4>Event Description</h4>

                    </div>
                </div>

            </section>
        </>
    )
}

