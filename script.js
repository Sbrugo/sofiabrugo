//variables
const tarjetas = document.querySelectorAll(
  ".about-containers .details-container"
);

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

//function used to show description based on the clicked title
function showArticle(title) {
  const description = document.getElementById(title);
  description.classList.toggle("show");
  description.classList.toggle("hidden");
}
function openPanel() {
  const body = document.querySelector(".panel-body");
}
