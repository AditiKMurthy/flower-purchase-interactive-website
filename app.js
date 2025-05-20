// Smooth Scroll Effect for Navbar Links
const links = document.querySelectorAll("header .navbar a");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Toggle Menu for Mobile View
const toggler = document.getElementById("toggler");
const navbar = document.querySelector("header .navbar");
toggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Animate Button on Hover
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
  });
  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});

// Image Hover Effect in Product Section
const productImages = document.querySelectorAll(
  ".products .box-container .box .image img"
);
productImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";
  });
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });
});

// To make heart red

// Select ALL heart icons
// Select ALL heart icons
const heartIcons = document.querySelectorAll(".fa-heart");

heartIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent link jumping
    icon.classList.toggle("active"); // Toggle red color
  });
});
