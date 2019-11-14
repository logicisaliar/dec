const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    // console.log(navItem.parentNode);
    navItem.parentNode.classList.toggle("hidden");
  })
})

const navTogglers = document.querySelectorAll(".navbar-toggler");

navTogglers.forEach(navToggler => {
  navToggler.addEventListener('click', () => {
    navToggler.nextSibling.nextSibling.childNodes[1].classList.remove("hidden");
  })
})


