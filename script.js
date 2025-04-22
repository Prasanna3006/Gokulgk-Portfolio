document.addEventListener("DOMContentLoaded", function () {
    const contents = document.querySelectorAll('.content');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // only trigger once
        }
      });
    }, {
      threshold: 0.1
    });

    contents.forEach(content => {
      observer.observe(content);
    });
  });