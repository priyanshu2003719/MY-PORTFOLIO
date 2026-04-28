// Nav toggle
document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('open');
});

// Nav scroll
window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

// Fade-up observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// Dark mode
let light = false;
document.getElementById('dmToggle').addEventListener('click', () => {
    light = !light;
    document.body.classList.toggle('light', light);
    document.getElementById('dmToggle').innerHTML = light ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Contact handler
function handleContact() {
    const name = document.querySelector('.contact-form input[type=text]').value;
    const email = document.querySelector('.contact-form input[type=email]').value;
    const msg = document.querySelector('.contact-form textarea').value;
    if (!name || !email || !msg) { alert('Please fill in all fields.'); return; }
    const mailto = `mailto:sahoopriyanshu889@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg + '\n\nFrom: ' + email)}`;
    window.location.href = mailto;
}

// Active nav highlight
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
    let cur = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) cur = s.id; });
    navAs.forEach(a => { a.style.color = a.getAttribute('href') === '#' + cur ? 'var(--cyan)' : ''; });
});