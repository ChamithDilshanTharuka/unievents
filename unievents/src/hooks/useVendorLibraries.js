import { useEffect } from 'react';

const useVendorLibraries = () => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init();
    }

    // Initialize GLightbox
    if (window.GLightbox) {
      window.GLightbox({
        selector: '.glightbox'
      });
    }

    // Initialize PureCounter
    if (window.PureCounter) {
      new window.PureCounter();
    }

    // Initialize Swiper
    if (window.Swiper) {
      new window.Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }

    // Initialize Isotope if you add it
    if (window.Isotope) {
      new window.Isotope('.grid', {
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
      });
    }

  }, []); // Empty dependency array to run once on mount
};

export default useVendorLibraries;
