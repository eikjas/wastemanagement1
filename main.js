document.addEventListener('DOMContentLoaded', function () {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const authButtons = document.querySelector('.auth-buttons');

    mobileMenuBtn.addEventListener('click', function () {
        navLinks.classList.toggle('show');
        authButtons.classList.toggle('show');
        mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if (navLinks.classList.contains('show')) {
                    navLinks.classList.remove('show');
                    authButtons.classList.remove('show');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                }
            }
        });
    });

    // Waste calculator functionality
    const calculateBtn = document.getElementById('calculate-btn');
    const calculationResult = document.querySelector('.calculation-result');
    const estimatedValue = document.getElementById('estimated-value');

    const priceRanges = {
        plastic: { min: 18, max: 25 },
        paper: { min: 12, max: 15 },
        metal: { min: 45, max: 60 },
        glass: { min: 8, max: 12 },
        'e-waste': { min: 30, max: 150 }
    };

    calculateBtn.addEventListener('click', function (e) {
        e.preventDefault();

        const wasteType = document.getElementById('waste-type').value;
        const quantity = parseFloat(document.getElementById('waste-quantity').value);

        if (!wasteType || isNaN(quantity) || quantity <= 0) {
            alert('Please select a waste type and enter a valid quantity');
            return;
        }

        const priceRange = priceRanges[wasteType];
        const averagePrice = (priceRange.min + priceRange.max) / 2;
        const totalValue = averagePrice * quantity;

        estimatedValue.textContent = `₹${totalValue.toFixed(2)}`;
        calculationResult.style.display = 'block';
    });

    // Schedule Pickup Modal
    const schedulePickupBtn = document.getElementById('schedule-pickup-btn');
    const modal = document.getElementById('schedule-pickup-modal');
    const closeModal = document.querySelector('.close');
    const pickupForm = document.getElementById('pickup-form');

    schedulePickupBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    pickupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you! We will arrive at your location soon ✅');
        modal.style.display = 'none';
        pickupForm.reset();
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            console.log('Contact form submitted:', { name, email, subject, message });

            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const email = this.querySelector('input').value;

            console.log('Newsletter subscription:', email);

            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }

    // Animation on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.service-card, .stat-card, .info-card');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    };

    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});