// Smooth scroll effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create animated circles in the background
const numCircles = 10; // Number of circles to animate
const body = document.querySelector('body');

for (let i = 0; i < numCircles; i++) {
    let circle = document.createElement('div');
    circle.classList.add('circle');
    circle.style.width = Math.random() * 50 + 'px';
    circle.style.height = circle.style.width;
    circle.style.top = Math.random() * window.innerHeight + 'px';
    circle.style.left = Math.random() * window.innerWidth + 'px';
    circle.style.animationDuration = Math.random() * 5 + 3 + 's'; // Random animation duration
    body.appendChild(circle);
}

// Add pulsing effect to logo on hover
document.querySelector('.logo').addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.logo').addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
});

// Change the background color when the user scrolls
window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = scrollY / maxScroll;
    const colorValue = Math.min(255, Math.floor(scrollPercentage * 255)); // Change color based on scroll
    document.body.style.backgroundColor = `rgb(${colorValue}, ${255 - colorValue}, 100)`;
});

// Fade-in effect for page sections when they are in the viewport
const pages = document.querySelectorAll('.page');

function checkVisibility() {
    const windowHeight = window.innerHeight;
    pages.forEach(page => {
        const rect = page.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= windowHeight) {
            page.classList.add('visible');
        } else {
            page.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Call once on load to check initial visibility
