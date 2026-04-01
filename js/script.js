const elHamburgerBtn = document.querySelector(".header__hamburger");
const elHeaderNav = document.querySelector(".header__container");

elHamburgerBtn.addEventListener("click", () => {
  elHeaderNav.classList.toggle("header__nav--open");
});
