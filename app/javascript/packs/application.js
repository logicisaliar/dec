  console.log("Hello");


var slideIndex = 1;
showSlides(slideIndex);

var next = document.getElementById("next");

console.log(next);

next.addEventListener("click", function(){
    plusSlides(1);
    console.log("in next");
}, false);

console.log(prev);

prev.addEventListener("click", function(){
    plusSlides(-1);
    console.log("in prev");
}, false);

// Next/prev controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  console.log(n);
  console.log(slides.length);
  var dots = document.getElementsByClassName("demo");
  console.log(dots);
  var captionText = document.getElementById("caption");
  console.log(captionText);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


import "bootstrap";
import { loadDynamicBannerText } from '../components/banner';
loadDynamicBannerText();
