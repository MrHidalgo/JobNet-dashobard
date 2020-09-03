"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initHamburger
 *
 * @description Init hamburger logic with animated
 */
var initHamburger = function initHamburger() {

	var btn = document.querySelector("[hamburger-js]"),
	    hideScrollContainer = document.querySelectorAll("html, body"),
	    mobileContainer = document.querySelector("[mobile-block-js]");

	/**
   * @description
  */
	if (btn) {
		btn.addEventListener("click", function (ev) {
			var elem = ev.currentTarget;

			// elem.classList.toggle("is-active");
			mobileContainer.classList.toggle("is-open");

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.toggle("is-hideScroll");
			});
		});

		$('[mobile-close-js]').on('click', function (ev) {
			mobileContainer.classList.add('is-animated');

			mobileContainer.classList.remove('is-open');

			hideScrollContainer.forEach(function (val, idx) {
				val.classList.remove("is-hideScroll");
			});

			setTimeout(function () {
				mobileContainer.classList.remove('is-animated');
			}, 350);
		});
	}
};

/**
 * @name initPopups
 *
 * @description
 */
var initPopups = function initPopups() {

	$('[popup-js]').magnificPopup({
		type: 'inline',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});

	$('[popup-video-js]').magnificPopup({
		type: 'iframe',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'is-show',
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});

	$('[popup-gallery-js]').magnificPopup({
		delegate: 'a',
		type: 'image',
		fixedContentPos: true,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		tLoading: 'Loading image #%curr%...',
		mainClass: 'is-show',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		callbacks: {
			beforeOpen: function beforeOpen() {
				this.st.mainClass = this.st.el.attr('data-effect');
			},
			close: function close() {}
		}
	});
};

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

	var link = document.querySelectorAll("a");

	link.forEach(function (val, idx) {

		val.addEventListener("click", function (e) {
			if (val.getAttribute("href") === "#") {
				e.preventDefault();
			}
		});
	});
};

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
	var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
	var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


	$(btnName).on("click", function (e) {
		var linkHref = $(e.currentTarget).attr('href'),
		    headerHeight = $(".header").outerHeight() || 0,
		    topHeightOffset = $(linkHref).offset().top - headerHeight;

		if (linkHref === '#jobApply') {
			var cardStickyMain = $('[jd-main-js]').outerHeight(true);

			$('body, html').animate({
				scrollTop: $(linkHref).offset().top - cardStickyMain
			}, animateSpeed);
		} else {
			$('body, html').animate({
				scrollTop: topHeightOffset
			}, animateSpeed);
		}
	});
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {

	new Swiper('.reviewsSlider', {
		loop: true,
		effect: 'slide',
		speed: 750,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false
		},
		spaceBetween: 10,
		navigation: {
			nextEl: '.reviews__btn--next',
			prevEl: '.reviews__btn--prev'
		}
	});

	new Swiper('.jobsSlider', {
		loop: false,
		effect: 'slide',
		speed: 750,
		autoplay: {
			delay: 10000,
			disableOnInteraction: false
		},
		slidesPerView: 3,
		spaceBetween: 10,
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 10
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 10
			}
		},
		navigation: {
			nextEl: '.jobs__btn--next',
			prevEl: '.jobs__btn--prev'
		}
	});

	new Swiper('.mainBlogSlider', {
		loop: true,
		effect: 'slide',
		speed: 750,
		navigation: {
			nextEl: '.blog-main__btn--next',
			prevEl: '.blog-main__btn--prev'
		}
	});
};

/**
 * @description Window on load.
 */
window.addEventListener('load', function (ev) {});

/**
 * @description Window on resize.
 */
window.addEventListener('resize', function (ev) {});

/**
 * @description Window on scroll.
 */
window.addEventListener('scroll', function (ev) {});

/**
 * @description Document DOM ready.
 */
(function () {
	/*
 * CALLBACK :: start
 * ============================================= */
	var headerSearch = function headerSearch() {
		$('.header__form input').on('focus', function (ev) {
			console.log('focus');
			$(ev.currentTarget).closest('.header__form').addClass('is-focus');
		});
		$('.header__form input').on('blur', function (ev) {
			console.log('blur');
			$(ev.currentTarget).closest('.header__form').removeClass('is-focus');
		});
	};

	var headerNavLine = function headerNavLine() {
		$('.header__nav-link').hover(function (ev) {
			var el = $(ev.currentTarget),
			    elParent = $(el).closest('.header__nav'),
			    lineNav = $('.header__nav-line');

			lineNav.css({
				left: el[0].getBoundingClientRect().left - $(elParent)[0].getBoundingClientRect().left,
				width: el[0].getBoundingClientRect().width
			});
		}, function (ev) {
			var lineNav = $('.header__nav-line');

			lineNav.css({
				left: 0, width: 0
			});
		});
	};

	var mainFormFieldToggle = function mainFormFieldToggle() {
		$('[main-more-js]').on('click', function (ev) {
			var _parentNode = $(ev.currentTarget).closest('.main__form');

			$(ev.currentTarget).toggleClass('is-active');

			_parentNode.find('.main__form-field-2, .main__form-field-3').slideToggle(400).css({
				'display': 'flex'
			});
		});
	};

	var initDatePicker = function initDatePicker() {
		$.each($('.datepicker'), function (idx, val) {
			new Pikaday({
				field: $(val)[0],
				format: 'DD/MM/YYYY'
			});
		});
	};

	var profileOpportunity = function profileOpportunity() {
		$('[profile-opportunity-js]').on('click', function (ev) {
			$('[profile-opportunity-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};

	var selectDropdown = function selectDropdown() {
		$('[select-dropdown-js]').select2({
			width: '100%',
			placeholder: 'Select an option'
		});
	};

	var manageAccountSettingCB = function manageAccountSettingCB() {
		$('[manage-account-js]').on('change', function (ev) {
			if ($(ev.currentTarget).is(':checked')) {
				$(ev.currentTarget).closest('.modal__form').find('.modal__form-field').show();
			} else {
				$(ev.currentTarget).closest('.modal__form').find('.modal__form-field').hide();
			}
		});
		$('[manage-accountOther-js]').on('change', function (ev) {
			if ($(ev.currentTarget).is(':checked')) {
				$(ev.currentTarget).closest('.modal__form').find('.modal__form-field').hide();
			}
		});
	};
	/*
 * CALLBACK :: end
 * ============================================= */

	/**
  * @name initNative
  *
  * @description Init all method
  */
	var initNative = function initNative() {
		// default
		initPreventBehavior();
		// ==========================================

		// lib
		// initHamburger();
		// initSmoothScroll();
		// initPopups();
		// initSwiper();
		// ==========================================

		// callback
		headerSearch();
		mainFormFieldToggle();
		initDatePicker();
		headerNavLine();
		profileOpportunity();
		selectDropdown();
		manageAccountSettingCB();
		// ==========================================
	};

	window.addEventListener('load', function (ev) {
		initNative();
	}, false);

	window.addEventListener('resize', function (ev) {
		if ($(window).width() > 1023 && $('html').hasClass('is-hideScroll')) {
			$('html, body').removeClass('is-hideScroll');
		}
	}, false);
})();