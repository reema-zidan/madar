(function () {
    var storageKey = 'madar-site-content';
    var form = document.getElementById('contentEditor');
    if (!form) return;

    var defaults = {
        heroEyebrow: 'مدار تك | خانيونس',
        heroTitle: 'مساحتك للتعلم، التطور، وصناعة الفرص',
        heroDescription: 'بيئة تعليمية وتدريبية تساعدك على تطوير مهاراتك، واكتساب الخبرات العملية، والانطلاق نحو فرص جديدة.',
        aboutTitle: 'من نحن',
        aboutDescription: 'مدار تك مؤسسة تعليمية وتدريبية تسعى إلى ربط المعرفة الأكاديمية بالتطبيق العملي من خلال تقديم برامج تدريبية وأنشطة تعليمية تساعد الشباب على تطوير قدراتهم ومواكبة متطلبات سوق العمل.',
        vision: 'أن نكون بيئة تعليمية وتدريبية تساهم في بناء جيل يمتلك المعرفة والمهارة والقدرة على صناعة الفرص.',
        mission: 'توفير فرص تعليم وتدريب نوعية تساعد الأفراد على اكتشاف إمكاناتهم وتطوير مهاراتهم وتحويل المعرفة إلى تطبيق عملي.',
        servicesTitle: 'خدماتنا',
        programsTitle: 'البرامج التدريبية',
        workTitle: 'طريقة عملنا',
        whyTitle: 'لماذا مدار تك؟',
        program1Title: 'Front-End Development',
        program1Description: 'تعلم أساسيات تطوير واجهات المواقع الإلكترونية.',
        program2Title: 'Artificial Intelligence',
        program2Description: 'التعرف على أدوات الذكاء الاصطناعي وتطبيقاتها العملية.',
        program3Title: 'Digital Skills',
        program3Description: 'تطوير المهارات الرقمية واستخدام الأدوات التقنية.',
        footerAddress: 'خانيونس - بجانب المحكمة الشرعية',
        footerEmail: 'madartech1@gmail.com'
    };

    var saved = {};
    try {
        saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (error) {
        saved = {};
    }

    var values = Object.assign({}, defaults, saved);
    Array.from(form.elements).forEach(function (element) {
        if (element.name && Object.prototype.hasOwnProperty.call(values, element.name)) {
            element.value = values[element.name];
        }
    });

    var status = document.getElementById('editorStatus');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var content = {};
        Array.from(form.elements).forEach(function (element) {
            if (element.name) content[element.name] = element.value.trim();
        });
        localStorage.setItem(storageKey, JSON.stringify(content));
        status.textContent = 'تم حفظ التغييرات بنجاح. افتح معاينة الموقع لرؤية النتيجة.';
    });

    document.getElementById('resetContent').addEventListener('click', function () {
        localStorage.removeItem(storageKey);
        Array.from(form.elements).forEach(function (element) {
            if (element.name && Object.prototype.hasOwnProperty.call(defaults, element.name)) {
                element.value = defaults[element.name];
            }
        });
        status.textContent = 'تمت استعادة النصوص الأصلية. احفظ للنشر من جديد.';
    });
})();
