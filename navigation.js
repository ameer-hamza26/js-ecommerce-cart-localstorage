// Get the hamburger menu and nav links
const hamburgerMenu = document.getElementById("hamburger-menu");
const navLinks = document.getElementById("nav-links");

// Toggle the navigation menu
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close the menu when a link is clicked (optional)
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("active");
});