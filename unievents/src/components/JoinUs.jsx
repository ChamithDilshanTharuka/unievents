import React from 'react'

const JoinUs = () => {
    return (
        <section id="about-alt" className="about-alt section">

            <div className="container">

                <div className="row gy-4">
                    <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/about.webp" className="img-fluid" alt="" />
                        <a href="#" className="glightbox pulsating-play-btn"></a>
                    </div>
                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
                        <h3>Be Part of UniEvents!</h3>
                        <p className="fst-italic">
                            Join a community where collaboration and shared ideas spark growth and innovation. Connect with like-minded students, explore new perspectives, and contribute to a lively network.
                        </p>
                        <p>
                            <strong>Don’t miss out on expanding your skills and reaching new heights in your university journey!</strong>
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-all"></i> <span>Attend events, notify peers, and spread awareness across campuses.</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Collaborate on projects, build connections, and share creative ideas.</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Organize your own events and grow their reach in the community.</span></li>
                        </ul>
                        <p>
                            Become part of UniEvents to access endless opportunities to network, learn, and grow within the university community. Engage with events that reflect diverse interests and make your university life truly memorable!
                        </p>
                    </div>


                </div>

            </div>

        </section>
    )
}

export default JoinUs