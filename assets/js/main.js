// Show Menu
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* Menu Show */
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* Menu Hidden */
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* Remove Menu Mobile*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const header = document.getElementById("nav");
  // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 100) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const headerTitle = document.getElementById("header-title");

const typewriter = new Typewriter(headerTitle, {
  loop: true,
  delay: 95,
});

typewriter
  .pauseFor(500)
  .typeString("GDI Wonder Consulting")
  .pauseFor(1000)
  .start();
const talkHeading = document.getElementById("talk-heading");
const typewriter2 = new Typewriter(talkHeading, {
  loop: true,
  delay: 95,
});

typewriter2
  .pauseFor(500)
  .typeString("  ¿Busca servicios digitales exclusivos?")
  .pauseFor(1000)
  .start();
