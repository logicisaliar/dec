const details = document.querySelectorAll(".detail-text");

details.forEach(detail => {
  console.log(detail);
  detail.addEventListener('click', () => {
    detail.childNodes[3].classList.toggle("hidden")
    console.log(detail);
  })
})
