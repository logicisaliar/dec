import "bootstrap";
import { plusSlides } from '../components/image';
import { showSlides } from '../components/image';
import { currentSlides } from '../components/image';
import { loadDynamicBannerText } from '../components/banner';
import { details } from '../components/details';

loadDynamicBannerText();
details();
showSlides();
plusSlides();
currentSlides();
