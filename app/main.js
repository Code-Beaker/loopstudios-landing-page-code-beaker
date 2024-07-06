import "./typeScales.css";
import "./scss/style.scss";
import closeIcon from "./assets/images/icon-close.svg";
import hamburgerIcon from "./assets/images/icon-hamburger.svg";

const d = new Date().getFullYear();
const date = document.querySelector(".footer__year");
date.textContent = d;

const navigationToggleButton = document.querySelector(".navbar__toggle-btn");
const toggleIcon = document.querySelector(".navbar__toggle-btn--icon");
let hidden = true;
const navigationLinks = document.querySelector(".navbar__links");

navigationToggleButton.addEventListener("click", () => {
  if (hidden) {
    navigationToggleButton.setAttribute("aria-expanded", true);
    toggleIcon.setAttribute("src", closeIcon);
    hidden = false;
    navigationLinks.classList.add("links-show");
  } else {
    navigationToggleButton.setAttribute("aria-expanded", false);
    toggleIcon.setAttribute("src", hamburgerIcon);
    hidden = true;
    navigationLinks.classList.remove("links-show");
  }
});
