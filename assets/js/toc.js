document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("h2, h3");
  const tocLinks = document.querySelectorAll(".floating-toc a");

  console.log("Sections found:", sections.length);
  console.log("TOC links found:", tocLinks.length);

  if (!sections.length || !tocLinks.length) {
    console.warn("TOC JS stopped: missing sections or links");
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("Active section:", entry.target.id);
      }
    });
  });

  sections.forEach(section => observer.observe(section));
});
