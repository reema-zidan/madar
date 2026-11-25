(function () {
    var storageKey = 'madar-site-content';

    try {
        var saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
        document.querySelectorAll('[data-cms]').forEach(function (element) {
            var key = element.getAttribute('data-cms');
            if (saved[key]) element.textContent = saved[key];
        });

        if (saved.primaryColor) {
            document.documentElement.style.setProperty('--oxford-blue', saved.primaryColor);
        }
        if (saved.accentColor) {
            document.documentElement.style.setProperty('--fresh-lime', saved.accentColor);
        }
        if (saved.backgroundColor) {
            document.documentElement.style.setProperty('--pale-silver', saved.backgroundColor);
        }
        if (saved.fontFamily) {
            document.body.style.fontFamily = saved.fontFamily;
        }
    } catch (error) {
        console.warn('تعذر تحميل محتوى الموقع المحفوظ.', error);
    }

    try {
        var sections = JSON.parse(localStorage.getItem('madar-section-settings') || '{}');
        var sectionSelectors = {
            navbar: '.navbar',
            hero: '#hero',
            about: '#about',
            services: '#services',
            programs: '#programs',
            howWeWork: '#how-we-work',
            whyMadar: '#why-madar',
            footer: 'footer'
        };
        Object.keys(sectionSelectors).forEach(function (key) {
            if (sections[key] === false) {
                document.querySelectorAll(sectionSelectors[key]).forEach(function (element) {
                    element.style.display = 'none';
                });
            }
        });
    } catch (error) {
        console.warn('تعذر تحميل إعدادات أقسام الموقع.', error);
    }

    try {
        var media = JSON.parse(localStorage.getItem('madar-media-settings') || '{}');
        if (media.logo) {
            document.querySelectorAll('.brand-logo, .footer-brand-logo, .dashboard-brand-logo').forEach(function (element) {
                element.src = media.logo;
            });
        }
        var heroImages = document.querySelectorAll('.hero-slide-image');
        if (heroImages[0] && media.hero1) heroImages[0].src = media.hero1;
        if (heroImages[1] && media.hero2) heroImages[1].src = media.hero2;
        if (heroImages[2] && media.hero3) heroImages[2].src = media.hero3;
    } catch (error) {
        console.warn('تعذر تحميل إعدادات الصور والوسائط.', error);
    }
})();
