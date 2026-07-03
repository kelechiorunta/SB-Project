import './pages/home';
import 'bootstrap';

import Carousel from 'bootstrap/js/dist/carousel';

const carouselElement = document.querySelector('#carouselLandingCaptions');

if (carouselElement) {
	new Carousel(carouselElement, {
		interval: 3000,
		ride: 'carousel',
		pause: 'hover',
		wrap: true
	});
}

const carouselElement2 = document.querySelector('#carouselTestimonialCaptions');

if (carouselElement2) {
	new Carousel(carouselElement2, {
		interval: 3000,
		ride: 'carousel',
		pause: 'hover',
		wrap: true
	});
}
