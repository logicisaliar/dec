var slideIndex = 1;
showSlides(slideIndex);

var next = document.getElementById("next");
next.addEventListener("click", function(){
  console.log(next);
  plusSlides(1);
}, false);

prev.addEventListener("click", function(){
  plusSlides(-1);
}, false);

// var demo = document.getElementsByClassName("demo");


// var demo = document.getElementsByClassName("demo");
// console.log("0");
// console.log(demo);
// console.log("1");

// window.onload = function() {
//   var demo = document.getElementsByClassName("demo");
//   for(var i = 0; i < demo.length; i++) {
//     console.log(i);
//     var anchor = demo[i];
//     anchor.addEventListener("click", function() {
//       alert("Number - " + i);
//     });
//   }
// };

// demo.addEventListener("click", function(){
//   console.log("Show Slide")
//   showSlides(4);
// }, false);

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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
