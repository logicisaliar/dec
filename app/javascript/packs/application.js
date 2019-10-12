import "bootstrap";
import { plusSlides } from '../components/image';
import { showSlides } from '../components/image';
import { currentSlides } from '../components/image';
import { loadDynamicBannerText } from '../components/banner';
import { details } from '../components/details';
// import { initUpdateNavbarOnScroll } from '../components/navbar';

// initUpdateNavbarOnScroll();
loadDynamicBannerText();
details();
showSlides();
plusSlides();
currentSlides();
