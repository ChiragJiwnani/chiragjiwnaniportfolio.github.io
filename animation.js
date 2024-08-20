document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.animate-fadein');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('.fade-in-visible');
                observer.unobserve(entry.target);  // Remove observer once the element is visible
            }
        });
    }, { threshold: 0.1 });  // Adjust the threshold as needed

    elements.forEach(element => {
        observer.observe(element);
    });
});