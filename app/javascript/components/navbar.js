const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight * 0.3) {
        navbar.classList.add('navbar-lewagon-white');
      } else {
        navbar.classList.remove('navbar-lewagon-white');
      }
    });
  }
}
console.log("0");
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


export { initUpdateNavbarOnScroll };
