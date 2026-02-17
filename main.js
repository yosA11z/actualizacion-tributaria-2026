
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close mobile menu when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').classList.add('fa-bars');
        mobileMenuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('April 21, 2026 18:30:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Scroll Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll, .animate-left, .animate-right').forEach(el => {
    observer.observe(el);
});

// Form Submission
const registrationForm = document.getElementById('registrationForm');
const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');

function openModal() {
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    successModal.classList.remove('active');
    document.body.style.overflow = '';
}

registrationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate form submission
    const submitBtn = registrationForm.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';

    setTimeout(() => {
        openModal();
        registrationForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Inscripción';
    }, 1500);
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    setTimeout(() => {
        openModal();
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
    }, 1500);
});

// Close modal on overlay click
successModal.addEventListener('click', (e) => {
    if (e.target === successModal) {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add stagger animation delay to cards
document.querySelectorAll('.topic-card, .benefit-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.schedule-day').forEach((day, index) => {
    day.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.speaker-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});