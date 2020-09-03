/**
 * @description Document DOM ready.
 */
(function () {
	/*
	* CALLBACK :: start
	* ============================================= */
	const headerSearch = () => {
		$('.header__form input').on('focus', (ev) => {
			console.log('focus');
			$(ev.currentTarget).closest('.header__form').addClass('is-focus');
		});
		$('.header__form input').on('blur', (ev) => {
			console.log('blur');
			$(ev.currentTarget).closest('.header__form').removeClass('is-focus');
		});
	};


	const headerNavLine = () => {
		$('.header__nav-link').hover(
			(ev) => {
				const el = $(ev.currentTarget),
					elParent = $(el).closest('.header__nav'),
					lineNav = $('.header__nav-line');

				lineNav.css({
					left: el[0].getBoundingClientRect().left - $(elParent)[0].getBoundingClientRect().left,
					width: el[0].getBoundingClientRect().width
				});
			},
			(ev) => {
				const lineNav = $('.header__nav-line');

				lineNav.css({
					left: 0, width: 0
				});
			}
		);
	};


	const mainFormFieldToggle = () => {
		$('[main-more-js]').on('click', (ev) => {
			const _parentNode = $(ev.currentTarget).closest('.main__form');

			$(ev.currentTarget).toggleClass('is-active');

			_parentNode.find('.main__form-field-2, .main__form-field-3').slideToggle(400).css({
				'display': 'flex'
			});
		});
	};


	const initDatePicker = () => {
		$.each($('.datepicker'), (idx, val) => {
			new Pikaday({
				field: $(val)[0],
				format: 'DD/MM/YYYY',
			});
		});
	};


	const profileOpportunity = () => {
		$('[profile-opportunity-js]').on('click', (ev) => {
			$('[profile-opportunity-js]').removeClass('is-active');
			$(ev.currentTarget).addClass('is-active');
		});
	};


	const selectDropdown = () => {
		$('[select-dropdown-js]').select2({
			width: '100%',
			placeholder: 'Select an option'
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
	const initNative = () => {
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
		// ==========================================
	};

	window.addEventListener('load', (ev) => {
		initNative();
	}, false);

	window.addEventListener('resize', (ev) => {
		if($(window).width() > 1023 && $('html').hasClass('is-hideScroll')) {
			$('html, body').removeClass('is-hideScroll');
		}
	}, false);
})();
