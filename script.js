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
function showArticle(subject) {
  const description = document.querySelector(".description-container");
  description.classList.toggle("show");
  description.classList.toggle("hidden");

  if (subject === "htmlcss") {
    description.innerHTML = `
            <h2>HTML & CSS</h2>
            <ul>
              <li>Responsive web pages</li>
              <li>Structured content</li>
              <li>DOM Manipulation</li>
              <li>Styled CSS</li>
            </ul>
            <h4>Examples:</h4>
            <a
              href="https://sbrugo.github.io/static-web-sites/Responsive-web-page/index.html"
              >Landing Page</a
            >
            <p>
              I worked translating designs into markup language and layout
              ensuring to reflected the visual and functional structure and
              implementing it on frontend frameworks.
            </p>`;
  }
}
function openPanel() {
  const body = document.querySelector(".panel-body");
}
