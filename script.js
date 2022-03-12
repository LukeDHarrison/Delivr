"use strict";

const navBar = document.getElementById(`nav-bar`);
const hamburgerIcon = document.getElementById(`hamburger-icon`);
const mobileMenu = document.getElementById(`mobile-menu`);

// get height of navbar
const navHeight = navBar.getBoundingClientRect().height;

hamburgerIcon.addEventListener(`click`, function () {
  mobileMenu.classList.toggle(`hide`);
  hamburgerIcon.classList.toggle(`open`);
  // set value of css variable to nav height
  document.body.classList.toggle(`prevent-scroll`);
  document.documentElement.style.setProperty(`--nav-height`, `${navHeight}px`);
});
