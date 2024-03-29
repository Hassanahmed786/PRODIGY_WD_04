
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const toggleMenu = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
};

document.getElementById('menu-btn').addEventListener('click', toggleMenu);


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', toggleMenu);
});

document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();

    alert('Thank you for your message! We will get back to you soon.');
});
