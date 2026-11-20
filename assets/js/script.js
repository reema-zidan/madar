document.addEventListener('DOMContentLoaded', function () {
    // Arabic / English language support
    const translations = {
        en: {
            'الرئيسية': 'Home',
            'من نحن': 'About Us',
            'خدماتنا': 'Services',
            'البرامج التدريبية': 'Training Programs',
            'طريقة عملنا': 'How We Work',
            'لماذا مدار؟': 'Why Madar?',
            'تواصل معنا': 'Contact Us',
            'احجز الآن': 'Book Now',
            'أرسل رسالة': 'Send a Message',
            'مدار تك | خانيونس': 'Madar Tech | Khan Younis',
            'مساحتك للتعلم، التطور، وصناعة الفرص': 'Your space for learning, growth, and opportunity',
            'بيئة تعليمية وتدريبية تساعدك على تطوير مهاراتك، واكتساب الخبرات العملية، والانطلاق نحو فرص جديدة.': 'A learning and training environment that helps you develop your skills, gain practical experience, and move toward new opportunities.',
            'اكتشف خدماتنا': 'Explore Services',
            'تعلّم وطبّق': 'Learn and Apply',
            'مهارات تصنع مستقبلك': 'Skills that shape your future',
            'طوّر مهاراتك الرقمية والتقنية من خلال برامج تدريبية تجمع بين المعرفة والتطبيق العملي.': 'Develop your digital and technical skills through training programs that combine knowledge with practical application.',
            'تصفّح البرامج': 'Browse Programs',
            'تعرّف علينا': 'About Us',
            'نتعلّم معاً': 'Learn Together',
            'مجتمع يفتح لك آفاقاً جديدة': 'A community that opens new horizons',
            'شارك الأفكار، وسّع علاقاتك، واعمل في مساحة تدعم طموحك وتطورك.': 'Share ideas, expand your network, and work in a space that supports your ambition and growth.',
            'لماذا مدار تك؟': 'Why Madar Tech?',
            'ابدأ رحلتك': 'Start Your Journey',
            'الشريحة السابقة': 'Previous slide',
            'الشريحة التالية': 'Next slide',
            'اختيار الشريحة': 'Choose slide',
            'نتعلم اليوم': 'Learn Today',
            'نتعلم اليوم ': 'Learn Today ',
            'مدار تك مؤسسة تعليمية وتدريبية تسعى إلى ربط ': 'Madar Tech is an educational and training institution that aims to connect ',
            'لنصنع فرص الغد': 'to Create Tomorrow’s Opportunities',
            'مدار تك مؤسسة تعليمية وتدريبية تسعى إلى ربط': 'Madar Tech is an educational and training institution that aims to connect',
            'المعرفة الأكاديمية بالتطبيق العملي': 'academic knowledge with practical application',
            'من خلال تقديم برامج تدريبية وأنشطة تعليمية تساعد الشباب على تطوير قدراتهم ومواكبة متطلبات سوق العمل.': 'through training programs and educational activities that help young people develop their abilities and keep pace with labor market needs.',
            'من خلال تقديم برامج تدريبية وأنشطة تعليمية تساعد الشباب على تطوير قدراتهم ومواكبة متطلبات سوق العمل.': 'through training programs and educational activities that help young people develop their abilities and keep pace with labor market needs.',
            'الرؤية': 'Vision',
            'أن نكون بيئة تعليمية وتدريبية تساهم في بناء جيل يمتلك المعرفة والمهارة والقدرة على صناعة الفرص.': 'To be a learning and training environment that helps build a generation with knowledge, skills, and the ability to create opportunities.',
            'الرسالة': 'Mission',
            'توفير فرص تعليم وتدريب نوعية تساعد الأفراد على اكتشاف إمكاناتهم وتطوير مهاراتهم وتحويل المعرفة إلى تطبيق عملي.': 'Providing quality learning and training opportunities that help individuals discover their potential, develop their skills, and turn knowledge into practical application.',
            'التدريب والتطوير': 'Training and Development',
            'برامج تدريبية متخصصة تهدف إلى تطوير المهارات التقنية والمهنية من خلال التعلم والتطبيق.': 'Specialized training programs designed to develop technical and professional skills through learning and application.',
            'مساحات العمل المشتركة': 'Coworking Spaces',
            'بيئة مناسبة للطلاب والمستقلين وأصحاب المشاريع لإنجاز أعمالهم وتبادل الأفكار.': 'A suitable environment for students, freelancers, and entrepreneurs to complete their work and exchange ideas.',
            'القاعات التدريبية': 'Training Rooms',
            'قاعات مجهزة لاستضافة الدورات التدريبية والاجتماعات والفعاليات والأنشطة.': 'Fully equipped rooms for hosting training courses, meetings, events, and activities.',
            'الأنشطة التعليمية': 'Educational Activities',
            'لقاءات ومبادرات تعليمية تساهم في نشر المعرفة وتبادل الخبرات.': 'Learning gatherings and initiatives that contribute to spreading knowledge and exchanging experience.',
            'طور مهاراتك وابدأ': 'Develop your skills and take',
            'خطوتك القادمة': 'your next step',
            'تعلم أساسيات تطوير واجهات المواقع الإلكترونية.': 'Learn the fundamentals of developing website interfaces.',
            'اعرف المزيد': 'Learn More',
            'التعرف على أدوات الذكاء الاصطناعي وتطبيقاتها العملية.': 'Explore artificial intelligence tools and their practical applications.',
            'تطوير المهارات الرقمية واستخدام الأدوات التقنية.': 'Develop digital skills and learn to use modern technology tools.',
            'خطوات بسيطة': 'Simple steps',
            'تقرّبك من هدفك': 'that bring you closer to your goal',
            'مراحل رحلتك التعليمية في مدار تك': 'Stages of your learning journey at Madar Tech',
            'الخطوة الأولى': 'Step One',
            'نكتشف هدفك': 'We Discover Your Goal',
            'نساعدك على تحديد اهتماماتك واختيار البرنامج أو الخدمة المناسبة لاحتياجك.': 'We help you identify your interests and choose the program or service that fits your needs.',
            'الخطوة الثانية': 'Step Two',
            'نتعلم الأساسيات': 'We Learn the Fundamentals',
            'نبني معرفة واضحة ومنظمة في بيئة تعليمية تشجع على السؤال والتجربة.': 'We build clear, structured knowledge in a learning environment that encourages questions and experimentation.',
            'الخطوة الثالثة': 'Step Three',
            'نطبّق ما نتعلمه': 'We Apply What We Learn',
            'نحوّل المعرفة إلى ممارسة عبر أنشطة وتمارين ومشاريع عملية.': 'We turn knowledge into practice through activities, exercises, and practical projects.',
            'الخطوة الرابعة': 'Step Four',
            'نتطور معاً': 'We Grow Together',
            'نشارك الخبرات ونستفيد من التوجيه والدعم خلال رحلة التعلم والتطوير.': 'We share experience and benefit from guidance and support throughout the learning and development journey.',
            'الخطوة الخامسة': 'Step Five',
            'ننطلق نحو فرص جديدة': 'We Move Toward New Opportunities',
            'نواصل التعلّم ونستخدم مهاراتنا لصناعة فرص جديدة في الدراسة والعمل.': 'We continue learning and use our skills to create new opportunities in education and work.',
            'لأن': 'Because',
            'بيئة التعلم تصنع فرقاً': 'a learning environment makes a difference',
            'بيئة تعليمية محفزة.': 'A motivating learning environment.',
            'إنترنت مستقر.': 'Reliable internet.',
            'كهرباء متوفرة.': 'Available electricity.',
            'تدريب يجمع بين المعرفة والتطبيق.': 'Training that combines knowledge and application.',
            'فرصة للتواصل وتبادل الخبرات.': 'An opportunity to connect and exchange experience.',
            'دعم وتوجيه خلال رحلة التعلم والتطوير.': 'Guidance and support throughout the learning and development journey.',
            'مؤسسة تعليمية وتدريبية في خانيونس تسعى لربط المعرفة بالتطبيق وتوفير بيئة متكاملة لتطوير المهارات.': 'An educational and training institution in Khan Younis that connects knowledge with application and provides an integrated environment for developing skills.',
            'روابط التنقل': 'Navigation',
            'بيانات التواصل الرسمية': 'Official Contact Information',
            'خانيونس - بجانب المحكمة الشرعية': 'Khan Younis - next to the Sharia Court',
            'جميع الحقوق محفوظة.': 'All rights reserved.',
            '© 2026 جميع الحقوق محفوظة. | تصميم الطالبة: ريما': '© 2026 All rights reserved. | Designed by: Rima',
            'تصميم الطالبة: ريما': 'Designed by: Rima',
            'نحن هنا لمساعدتك': 'We are here to help',
            'يسعدنا الإجابة عن استفساراتك ومساعدتك في اختيار البرنامج أو الخدمة المناسبة.': 'We are happy to answer your questions and help you choose the right program or service.',
            'خلينا نبدأ رحلتك مع بعض': 'Let’s start your journey together',
            'أرسل لنا رسالتك أو تواصل معنا مباشرة عبر بياناتنا الرسمية.': 'Send us a message or contact us directly through our official details.',
            'العنوان': 'Address',
            'البريد الإلكتروني': 'Email',
            'نحن جاهزون لمساعدتك': 'We are ready to help',
            'املأ النموذج وسنتابع رسالتك عبر واتساب.': 'Fill out the form and we will follow up with you through WhatsApp.',
            'أرسل لنا رسالة': 'Send us a message',
            'املأ البيانات التالية، وسيتم تجهيز رسالتك للإرسال عبر واتساب.': 'Fill in the following details, and your message will be prepared for WhatsApp.',
            'الاسم': 'Name',
            'أدخل اسمك الكامل': 'Enter your full name',
            'رقم الهاتف': 'Phone Number',
            'الرسالة': 'Message',
            'اكتب رسالتك هنا...': 'Write your message here...',
            'إرسال عبر الواتساب': 'Send via WhatsApp',
            'العودة إلى الرئيسية': 'Back to Home',
            'تواصل معنا | مدار تك': 'Contact Us | Madar Tech',
            'محرر الموقع': 'Website Editor',
            'إعدادات الموقع': 'Website Settings',
            'نظرة عامة': 'Overview',
            'محتوى الصفحة': 'Page Content',
            'الأقسام والعناصر': 'Sections and Elements',
            'الألوان والخطوط': 'Colors and Fonts',
            'الصور والوسائط': 'Images and Media',
            'موقع مدار تك': 'Madar Tech Website',
            'هيكل لوحة التخصيص': 'Customization Dashboard Structure',
            'إدارة الموقع الرئيسي': 'Main Website Management',
            'تخصيص الموقع': 'Customize Website',
            'واجهة مبدئية': 'Prototype Interface',
            'لوحة تخصيص مدار تك': 'Madar Tech Customization Dashboard',
            'إدارة محتوى ومظهر موقعك من مكان واحد': 'Manage your website content and appearance from one place',
            'هيكل أولي لتنظيم محتوى الصفحة الرئيسية، أقسامها، وألوان الهوية البصرية.': 'A basic structure for organizing the homepage content, sections, and visual identity colors.',
            'معاينة توضيحية للموقع': 'Website preview',
            'عناصر الموقع': 'Website Elements',
            'مساحة التخصيص': 'Customization Area',
            'عرض هيكلي فقط': 'Structural preview only',
            'النصوص والعناوين': 'Text and Headings',
            'محتوى الصفحة الرئيسية': 'Homepage Content',
            '٦ أقسام': '6 Sections',
            'مقدمة الصفحة — الشرائح': 'Page Introduction — Slides',
            'عنوان، وصف، وأزرار لكل شريحة': 'Title, description, and buttons for each slide',
            '٣ شرائح': '3 Slides',
            'العنوان، النبذة، الرؤية، والرسالة': 'Title, overview, vision, and mission',
            '٤ عناصر': '4 Elements',
            'عنوان القسم وبطاقات الخدمات': 'Section title and service cards',
            '٤ بطاقات': '4 Cards',
            'العنوان والوصف وبطاقات البرامج': 'Title, description, and program cards',
            '٣ بطاقات': '3 Cards',
            'لماذا مدار تك؟': 'Why Madar Tech?',
            'العنوان ونقاط تميّز المؤسسة': 'Title and institutional strengths',
            '٦ نقاط': '6 Points',
            'التذييل وبيانات التواصل': 'Footer and Contact Information',
            'الروابط والعنوان والبريد الإلكتروني': 'Links, address, and email',
            'تذييل': 'Footer',
            'الهوية البصرية': 'Visual Identity',
            'ألوان الموقع': 'Website Colors',
            'أزرق أكسفورد': 'Oxford Blue',
            'اللون الأساسي': 'Primary color',
            'ليموني منعش': 'Fresh Lime',
            'لون التمييز': 'Accent color',
            'رمادي فحمي': 'Graphite Gray',
            'لون النصوص': 'Text color',
            'فضي فاتح': 'Light Silver',
            'لون الخلفيات': 'Background color',
            'نمط الخط الحالي': 'Current Font Style',
            'خط واجهة افتراضي مع دعم النص العربي والإنجليزي.': 'A default interface font with support for Arabic and English.',
            'توزيع الصفحة': 'Page Layout',
            'أقسام الموقع وعناصره': 'Website Sections and Elements',
            'شريط التنقل': 'Navigation Bar',
            'شعار · روابط · زر': 'Logo · links · button',
            'مقدمة الصفحة': 'Page Introduction',
            'شرائح · عناوين · أزرار': 'Slides · headings · buttons',
            'نبذة · رؤية · رسالة': 'Overview · vision · mission',
            'بطاقات الخدمات': 'Service cards',
            'بطاقات البرامج': 'Program cards',
            'نقاط التميّز': 'Key strengths',
            'روابط · بيانات التواصل': 'Links · contact information',
            'إعدادات عامة': 'General Settings',
            'عناصر الهوية': 'Identity Elements',
            'اسم الموقع': 'Website Name',
            'الاسم الظاهر في الشعار': 'Name displayed in the logo',
            'لغة الموقع': 'Website Language',
            'لغة المحتوى واتجاه التخطيط': 'Content language and layout direction',
            'العربية · RTL': 'Arabic · RTL',
            'صورة المقدمة': 'Introduction Image',
            'صورة خلفية الشرائح': 'Slide background image',
            '٣ صور': '3 Images',
            'الهيكل الأساسي للوحة تخصيص الموقع': 'Basic website customization dashboard structure'
        }
    };

    const languageSelect = document.createElement('div');
    languageSelect.className = 'language-switcher';
    languageSelect.setAttribute('aria-label', 'Language');
    languageSelect.innerHTML = '<button type="button" data-lang="ar" aria-label="العربية">AR</button><button type="button" data-lang="en" aria-label="English">EN</button>';

    const publicNavbar = document.querySelector('.navbar-collapse');
    if (publicNavbar) {
        publicNavbar.appendChild(languageSelect);
    }

    const dashboardTopbar = document.querySelector('.dashboard-topbar');
    if (dashboardTopbar) {
        dashboardTopbar.appendChild(languageSelect.cloneNode(true));
    }

    const themeToggle = document.createElement('button');
    themeToggle.type = 'button';
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i><span></span>';
    themeToggle.addEventListener('click', function () {
        applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    });

    if (publicNavbar) {
        publicNavbar.appendChild(themeToggle);
    }
    if (dashboardTopbar) {
        dashboardTopbar.appendChild(themeToggle.cloneNode(true));
        dashboardTopbar.lastElementChild.addEventListener('click', function () {
            applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
        });
    }

    const applyTheme = function (theme) {
        const isDark = theme === 'dark';
        document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
        localStorage.setItem('madar-theme', isDark ? 'dark' : 'light');

        document.querySelectorAll('.theme-toggle').forEach(function (button) {
            const label = isDark
                ? (document.documentElement.lang === 'en' ? 'Switch to light mode' : 'التبديل للوضع الفاتح')
                : (document.documentElement.lang === 'en' ? 'Switch to dark mode' : 'التبديل للوضع الداكن');
            button.setAttribute('aria-label', label);
            button.setAttribute('title', label);
            button.querySelector('i').className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            button.querySelector('span').textContent = isDark
                ? (document.documentElement.lang === 'en' ? 'Light' : 'فاتح')
                : (document.documentElement.lang === 'en' ? 'Dark' : 'داكن');
            button.setAttribute('aria-pressed', String(isDark));
        });
    };

    const applyLanguage = function (lang) {
        const isEnglish = lang === 'en';
        document.documentElement.lang = lang;
        document.documentElement.dir = isEnglish ? 'ltr' : 'rtl';
        localStorage.setItem('madar-language', lang);
        if (document.documentElement.dataset.theme) {
            applyTheme(document.documentElement.dataset.theme);
        }

        document.querySelectorAll('.language-switcher button').forEach(function (button) {
            const active = button.dataset.lang === lang;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });

        if (!isEnglish) {
            document.querySelectorAll('[data-original-text]').forEach(function (element) {
                element.textContent = element.dataset.originalText;
            });
            document.querySelectorAll('[data-original-placeholder]').forEach(function (element) {
                element.setAttribute('placeholder', element.dataset.originalPlaceholder);
            });
            document.title = document.title.includes('تخصيص') ? 'تخصيص الموقع | مدار تك' : (document.title.includes('تواصل') ? 'تواصل معنا | مدار تك' : 'مدار تك');
            return;
        }

        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);

        textNodes.forEach(function (node) {
            const text = node.textContent.trim();
            if (!translations.en[text]) return;
            if (!node.parentElement.dataset.originalText) {
                node.parentElement.dataset.originalText = node.textContent;
            }
            node.textContent = node.textContent.replace(text, translations.en[text]);
        });

        document.querySelectorAll('input[placeholder], textarea[placeholder]').forEach(function (element) {
            if (!translations.en[element.placeholder]) return;
            if (!element.dataset.originalPlaceholder) {
                element.dataset.originalPlaceholder = element.placeholder;
            }
            element.placeholder = translations.en[element.placeholder];
        });

        if (document.title.includes('تواصل')) document.title = 'Contact Us | Madar Tech';
        else if (document.title.includes('تخصيص')) document.title = 'Customize Website | Madar Tech';
        else document.title = 'Madar Tech';
    };

    document.querySelectorAll('.language-switcher button').forEach(function (button) {
        button.addEventListener('click', function () {
            applyLanguage(button.dataset.lang);
        });
    });

    applyLanguage(localStorage.getItem('madar-language') || 'ar');
    applyTheme(localStorage.getItem('madar-theme') || 'light');

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

    // Scroll-fill timeline for the how-we-work section
    const workTimeline = document.querySelector('.work-timeline');
    if (workTimeline) {
        const workSteps = Array.from(workTimeline.querySelectorAll('.work-step'));

        if (reducedMotion) {
            workTimeline.classList.add('is-static');
            workSteps.forEach(function (step) {
                step.classList.add('is-in');
            });
        } else {
            workTimeline.classList.add('has-scroll-animation');
            let timelineFrame = 0;

            const updateWorkTimeline = function () {
                timelineFrame = 0;
                const timelineRect = workTimeline.getBoundingClientRect();
                const activationLine = window.innerHeight * 0.68;
                const progress = Math.max(0, Math.min(timelineRect.height, activationLine - timelineRect.top));
                workTimeline.querySelector('.work-timeline-progress').style.height = progress + 'px';

                workSteps.forEach(function (step) {
                    step.classList.toggle('is-in', step.getBoundingClientRect().top < activationLine);
                });
            };

            const queueTimelineUpdate = function () {
                if (!timelineFrame) {
                    timelineFrame = window.requestAnimationFrame(updateWorkTimeline);
                }
            };

            window.addEventListener('scroll', queueTimelineUpdate, { passive: true });
            window.addEventListener('resize', queueTimelineUpdate);
            updateWorkTimeline();
        }
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

            const isEnglish = document.documentElement.lang === 'en';
            const greeting = isEnglish ? 'Hello Madar Tech, I would like to contact you.' : 'مرحباً مدار تك، أود التواصل معكم.';
            const labels = isEnglish
                ? ['Name', 'Email', 'Phone Number', 'Message']
                : ['الاسم', 'البريد الإلكتروني', 'رقم الهاتف', 'الرسالة'];
            const fullText = `${encodeURIComponent(greeting)}%0A%0A` +
                             `*${labels[0]}:* ${encodeURIComponent(name)}%0A` +
                             `*${labels[1]}:* ${encodeURIComponent(email)}%0A` +
                             `*${labels[2]}:* ${encodeURIComponent(phone)}%0A` +
                             `*${labels[3]}:* ${encodeURIComponent(message)}`;

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