// class active

const navbarMobile = document.querySelector(".navbar-container");

// saat mengklik mobile menu

document.querySelector("#mobile-menu").onclick = () => {
  navbarMobile.classList.toggle("active");
};

// hilangkan ketika klik diluar container mobile menu

const mobileMenu = document.querySelector("#mobile-menu");

document.addEventListener("click", function (e) {
  if (!mobileMenu.contains(e.target) && !navbarMobile.contains(e.target)) {
    navbarMobile.classList.remove('active');
  }
});
