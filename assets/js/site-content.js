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
    } catch (error) {
        console.warn('تعذر تحميل محتوى الموقع المحفوظ.', error);
    }
})();
