document.addEventListener('DOMContentLoaded', () => {
  const content = document.querySelector('.content');
  const tocContainer = document.getElementById('toc-container');
  
  // Exit if the page doesn't have these elements
  if (!content || !tocContainer) return;

  // Find all major headers in the content
  const headers = content.querySelectorAll('h2, h3');
  
  // Hide the ToC box entirely if the page has no headers
  if (headers.length === 0) {
    document.querySelector('.sidebar').style.display = 'none';
    return;
  }

  const ul = document.createElement('ul');
  
  headers.forEach((header, index) => {
    // Jekyll's Kramdown usually auto-generates IDs, but this acts as a fallback
    if (!header.id) {
      header.id = `section-${index}`;
    }

    const li = document.createElement('li');
    // Indent h3 tags slightly more than h2 tags for hierarchy 
    li.className = `toc-item toc-${header.tagName.toLowerCase()}`;
    
    const a = document.createElement('a');
    a.href = `#${header.id}`;
    a.textContent = header.textContent;
    a.className = 'toc-link';
    
    li.appendChild(a);
    ul.appendChild(li);
  });

  tocContainer.appendChild(ul);

  // Set up the Intersection Observer for hover/active states
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.toc-link').forEach(link => link.classList.remove('active'));
        const activeLink = document.querySelector(`.toc-link[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  headers.forEach(header => observer.observe(header));
});
