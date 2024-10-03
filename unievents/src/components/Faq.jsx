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
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                <div className="faq-content">
                  <p>Feugiat pretium nibh ipsum consequat...</p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
              <div className="faq-item">
                <h3>Feugiat scelerisque varius morbi enim nunc faucibus?</h3>
                <div className="faq-content">
                  <p>Dolor sit amet consectetur adipiscing elit...</p>
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
