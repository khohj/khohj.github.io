document.getElementById("year").textContent = new Date().getFullYear();

const sections = [...document.querySelectorAll(".section, .hero")];
const navLinks = [...document.querySelectorAll(".nav-item")]
  .filter(a => a.getAttribute("href")?.startsWith("#"));

const setActive = () => {
  const y = window.scrollY + 120;
  let current = "top";
  for (const s of sections) {
    if (s.id && s.offsetTop <= y) current = s.id;
  }
  navLinks.forEach(a => {
    const target = a.getAttribute("href").slice(1);
    a.classList.toggle("active", target === current);
  });
};

window.addEventListener("scroll", setActive);
setActive();
