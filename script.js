// Add shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("shadow-md");
  } else {
    nav.classList.remove("shadow-md");
  }
});

// Fade-in on scroll
const fadeSections = document.querySelectorAll(".fade-section");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeSections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("visible");
    } else {
      section.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);
