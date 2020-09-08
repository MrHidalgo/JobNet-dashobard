

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
const initSwiper = () => {

	new Swiper('.dashboardJobsLast', {
    loop: true,
    effect: 'slide',
		speed: 750,
		spaceBetween: 11,
		slidesPerView: 'auto',
    autoplay: {
      delay: 5000,
			disableOnInteraction: false
    }
  });

	new Swiper('.dashboardHiringSlider', {
    loop: true,
    effect: 'slide',
		speed: 750,
		spaceBetween: 0,
		slidesPerView: 1,
		navigation: {
			nextEl: '.dashboard__hiring-btn--next',
			prevEl: '.dashboard__hiring-btn--prev',
		},
  });

};
