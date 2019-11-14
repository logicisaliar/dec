const details = document.querySelectorAll(".detail-text");

details.forEach(detail => {
  detail.addEventListener('click', () => {
    detail.childNodes[3].classList.toggle("hidden")
    detail.childNodes[1].childNodes[1].classList.toggle("hidden")
    detail.childNodes[1].childNodes[3].classList.toggle("hidden")
  })
})
