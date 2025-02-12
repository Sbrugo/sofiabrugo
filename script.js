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
  const allSections = document.querySelectorAll('.description-container');

  allSections.forEach((section) => {
    section.parentElement.classList.add('hidden');
    section.parentElement.classList.remove('show');
  });

  const description = document.getElementById(title);
  description.classList.toggle('show');
  description.classList.toggle('hidden');
}

function closeSection(title) {
  const section = document.getElementById(title);
  section.classList.add('hidden');
  section.classList.remove('show');
}