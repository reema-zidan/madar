document.addEventListener('DOMContentLoaded', function () {
    // Hero slider
    const hero = document.querySelector('.hero-section');
    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const indicators = Array.from(document.querySelectorAll('.hero-indicator'));
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hero && slides.length > 0) {
        let activeSlide = 0;
        let slideTimer;

        const showSlide = function (index) {
            activeSlide = (index + slides.length) % slides.length;
            slides.forEach(function (slide, slideIndex) {
                const isActive = slideIndex === activeSlide;
                slide.classList.toggle('is-active', isActive);
                slide.setAttribute('aria-hidden', String(!isActive));
                if (isActive) {
                    const image = slide.querySelector('img[loading="lazy"]');
                    if (image) image.loading = 'eager';
                }
            });
            indicators.forEach(function (indicator, indicatorIndex) {
                const isActive = indicatorIndex === activeSlide;
                indicator.classList.toggle('is-active', isActive);
                indicator.setAttribute('aria-current', String(isActive));
            });
        };

        const stopAutoPlay = function () {
            window.clearInterval(slideTimer);
        };

        const startAutoPlay = function () {
            stopAutoPlay();
            if (!reducedMotion && slides.length > 1) {
                slideTimer = window.setInterval(function () {
                    showSlide(activeSlide + 1);
                }, 6500);
            }
        };

        hero.querySelector('.hero-control-prev').addEventListener('click', function () {
            showSlide(activeSlide - 1);
            startAutoPlay();
        });
        hero.querySelector('.hero-control-next').addEventListener('click', function () {
            showSlide(activeSlide + 1);
            startAutoPlay();
        });
        indicators.forEach(function (indicator, index) {
            indicator.addEventListener('click', function () {
                showSlide(index);
                startAutoPlay();
            });
        });
        hero.addEventListener('mouseenter', stopAutoPlay);
        hero.addEventListener('mouseleave', startAutoPlay);
        hero.addEventListener('focusin', stopAutoPlay);
        hero.addEventListener('focusout', startAutoPlay);
        startAutoPlay();
    }

    // Reveal page content as it enters the viewport
    const revealItems = document.querySelectorAll(
        'section:not(#hero) .container > *, footer .container > *'
    );
    if ('IntersectionObserver' in window && !reducedMotion) {
        const revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(function (item) {
            item.classList.add('reveal');
            revealObserver.observe(item);
        });
    }

    // 1. WhatsApp Contact Form Handler
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Target phone number for Madar Tech WhatsApp
            const madarPhone = "970590000000"; // يمكن استبداله برقم المؤسسة الصحيح

            const fullText = `مرحباً مدار تك، أود التواصل معكم.%0A%0A` +
                             `*الاسم:* ${encodeURIComponent(name)}%0A` +
                             `*البريد الإلكتروني:* ${encodeURIComponent(email)}%0A` +
                             `*رقم الهاتف:* ${encodeURIComponent(phone)}%0A` +
                             `*الرسالة:* ${encodeURIComponent(message)}`;

            const whatsappUrl = `https://wa.me/${madarPhone}?text=${fullText}`;
            
            window.open(whatsappUrl, '_blank');
        });
    }

    // 2. Smooth Scrolling & Active State
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Auto collapse mobile navbar on click
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });
});