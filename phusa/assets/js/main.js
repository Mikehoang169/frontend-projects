/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
document.addEventListener("DOMContentLoaded", function() {

	// Get references to your sections and menu links
	const scrollContainer = document.getElementById("phusa-container");
	const sections = document.querySelectorAll("section");
	const menuLinks = document.querySelectorAll(".menu-link");
	
	// Initialize an array to store the heights of each section
	const sectionHeights = [];
	sections.forEach(section => {
		sectionHeights.push(section.clientHeight);
	});

	// Add a scroll event listener
	scrollContainer.addEventListener("scroll", function () {
		// Get the current scroll position
		const currentScrollPos = scrollContainer.scrollTop;

		// Determine which section is in view based on cumulative heights
		let totalHeight = 0;
		let activeSectionIndex = -1;
		
		for (let i = 0; i < sectionHeights.length; i++) {
			totalHeight += sectionHeights[i];
			if ((currentScrollPos+50) < totalHeight) {
				activeSectionIndex = i;
				break;
			}
		}

		// Update the active menu link
		menuLinks.forEach((link, index) => {
			if (index === activeSectionIndex) {
				link.classList.add("active");
			} else {
				link.classList.remove("active");
			}
		});
	});	
	
	var swiper = new Swiper(".dishSwiper", {
		slidesPerView: 1,
		spaceBetween: 20,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			481: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			737: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			981: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			1281:
			{
				slidesPerView: 4,
				spaceBetween: 20,
			}
		}
	});
	if (window.innerWidth <= 980) {
		var header = document.querySelector("#header");
		var menu = document.querySelector("#header .menu-items");
		var avatarLink = document.querySelector("a.menu.avatar");

		// Function to close the menu
		function closeMenu() {
			menu.style.display = "none";
			header.classList.remove("expanded");
		}

		// Event listener for the avatar link
		avatarLink.addEventListener("click", function(event) {
			event.preventDefault(); // Prevents the default action of the anchor tag.
			if (menu.style.display === "none" || menu.style.display === "") {
				menu.style.display = "block";
				header.classList.add("expanded");
			} else {
				closeMenu();
			}
		});

		// Event listener for clicks outside the header
		document.addEventListener("click", function(event) {
			var target = event.target;
			if (!header.contains(target) || target.tagName === 'A') {
				closeMenu();
			}
		});
	}
});
(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main	= $('#main'),
		$second = $('#second'),
		$third = $('#third'),
		$fourth = $('#fourth'),
		$slide1 =$('#slide-1'),
		$slide2 =$('#slide-2'),
		$slide3 =$('#slide-3'),
		$slide4 =$('#slide-4');



	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$second.insertAfter($main);
			$third.insertAfter($second);
			$fourth.insertAfter($third);
			$footer.insertAfter($fourth);
			breakpoints.on('<=small', function() {
				$slide2.insertAfter($slide1);
				$slide4.insertAfter($slide2);
				$slide3.insertAfter($slide4);
			});
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});
})(jQuery);
/* 
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});
*/
