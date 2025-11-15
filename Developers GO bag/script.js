// nav.js
const jsButton = document.getElementById("js-btn");
const interactivityLinks = document.querySelector(".nav-interactivities-links");

jsButton.addEventListener("click", () => {
  interactivityLinks.classList.toggle("show");
});
