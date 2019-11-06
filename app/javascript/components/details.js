const details = document.querySelectorAll(".detail-text");

details.forEach(detail => {
  detail.addEventListener('click', () => {
    detail.childNodes[3].classList.toggle("hidden")
    console.log(detail.childNodes[1].childNodes[3].childNodes);
  })
})
