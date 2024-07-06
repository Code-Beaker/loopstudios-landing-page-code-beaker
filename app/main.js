import "./typeScales.css";
import "./scss/style.scss";

const d = new Date().getFullYear();
const date = document.querySelector(".footer__year");
date.textContent = d;

const navigationToggleButton = document.querySelector(".navbar__toggle-btn");
const toggleIcon = document.querySelector(".navbar__toggle-btn--icon");
let hidden = true;

navigationToggleButton.addEventListener("click", () => {
  if (hidden) {
    navigationToggleButton.setAttribute("aria-expanded", true);
    toggleIcon.setAttribute("src", "./assets/images/icon-close.svg");
    hidden = false;
    document.querySelector(".navbar__links").style.display = "flex";
  } else {
    navigationToggleButton.setAttribute("aria-expanded", false);
    toggleIcon.setAttribute("src", "./assets/images/icon-hamburger.svg");
    hidden = true;
    document.querySelector(".navbar__links").style.display = "none";
  }
});
