"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.animate-fadein');
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('.fade-in-visible');
        observer.unobserve(entry.target); // Remove observer once the element is visible
      }
    });
  }, {
    threshold: 0.1
  }); // Adjust the threshold as needed

  elements.forEach(function (element) {
    observer.observe(element);
  });
});
//# sourceMappingURL=animation.dev.js.map
