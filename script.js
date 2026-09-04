const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

elements.forEach(el => observer.observe(el));

/* MENU MOBILE */

const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if(toggle){
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}