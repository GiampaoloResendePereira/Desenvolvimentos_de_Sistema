// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

// Hamburger menu functionality
function toggleMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

// Close menu on nav menu clicks
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const navLinks = document.querySelectorAll("#nav-link");
navLinks.forEach(link => link.addEventListener("click", closeMenu));

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Theme switcher functionality
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
