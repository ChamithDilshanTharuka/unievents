import React from 'react'

const JoinUs = () => {
    return (
        <section id="about-alt" className="about-alt section">

            <div className="container">

                <div className="row gy-4">
                    <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
                        <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
                    </div>
                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
                        <h3>Join Us</h3>
                        <p className="fst-italic">
                            Collaborating and sharing ideas is essential for growth and innovation. By joining our community, you will have the opportunity to connect with like-minded individuals, gain new insights, and contribute to a vibrant network of university students. 
                            <p>Don’t miss the chance to enhance your skills and expand your horizons!</p>
                        </p>
                        <ul>
                            <li><i className="bi bi-check2-all"></i> <span>Participate in events and notify others to spread awareness.</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Collaborate with peers to develop projects and share ideas.</span></li>
                            <li><i className="bi bi-check2-all"></i> <span>Create new events and boost your events across the community.</span></li>
                        </ul>
                        <p>
                            By becoming part of our platform, you will unlock numerous opportunities to network, learn, and grow within the university community. Engage with diverse events that cater to various passions and interests, making your university experience more enriching and enjoyable.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default JoinUs