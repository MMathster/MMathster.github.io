document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("h2, h3");
  const tocLinks = document.querySelectorAll(".floating-toc a");

  if (!sections.length || !tocLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;

          let activeLink = null;

          tocLinks.forEach(link => {
            const isMatch = link.getAttribute("href") === "#" + id;
            link.classList.toggle("active", isMatch);
            if (isMatch) activeLink = link;
          });

          if (activeLink && !activeLink.classList.contains("clicked")) {
            activeLink.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }
        }
      });
    },
    {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    }
  );

  sections.forEach(section => observer.observe(section));

  // Click persistence
  tocLinks.forEach(link => {
    link.addEventListener("click", () => {
      tocLinks.forEach(l => l.classList.remove("clicked"));
      link.classList.add("clicked");
    });
  });
});
