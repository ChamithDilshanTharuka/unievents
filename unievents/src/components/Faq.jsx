import React, { useEffect } from 'react';

const Faq = () => {
    useEffect(() => {
        const faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle');

        const toggleFaqItem = (event) => {
            const faqItem = event.target.closest('.faq-item');
            faqItem.classList.toggle('faq-active');
        };

        faqItems.forEach((item) => {
            item.addEventListener('click', toggleFaqItem);
        });

        return () => {
            faqItems.forEach((item) => {
                item.removeEventListener('click', toggleFaqItem);
            });
        };
    }, []);

    return (
        <section id="faq" className="faq section light-background">
            <div className="container section-title" data-aos="fade-up">
                <h2>Frequently Asked Questions</h2>
                <p>Got Questions? Discover helpful answers in our FAQ section to navigate our event management system with ease.</p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
                        <div className="faq-container">
                            <div className="faq-item faq-active">
                                <h3>How do I register for an event?</h3>
                                <div className="faq-content">
                                    <p>To register for an event, simply navigate to the Events page, select the event you're interested in, and go to on the "Registeration Link".</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>

                            <div className="faq-item">
                                <h3>Can I attend events from other universities?</h3>
                                <div className="faq-content">
                                    <p>Yes! Our centralized event management system allows students from all participating universities to view and register for events hosted by any university in the network.</p>
                                </div>
                                <i className="faq-toggle bi bi-chevron-right"></i>
                            </div>

                            {/* Add more FAQ items as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
