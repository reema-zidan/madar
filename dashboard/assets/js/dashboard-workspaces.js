(function () {
    var contentKey = 'madar-site-content';
    var sectionsKey = 'madar-section-settings';
    var mediaKey = 'madar-media-settings';

    function read(key) {
        try {
            return JSON.parse(localStorage.getItem(key) || '{}');
        } catch (error) {
            return {};
        }
    }

    function save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    var contentForm = document.getElementById('contentWorkspace');
    if (contentForm) {
        var content = read(contentKey);
        Array.from(contentForm.elements).forEach(function (element) {
            if (element.name && content[element.name] !== undefined) element.value = content[element.name];
        });
        contentForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var next = Object.assign({}, content);
            Array.from(contentForm.elements).forEach(function (element) {
                if (element.name) next[element.name] = element.value.trim();
            });
            save(contentKey, next);
            document.getElementById('workspaceStatus').textContent = 'تم حفظ محتوى الصفحة بنجاح.';
        });
    }

    var sectionsForm = document.getElementById('sectionsWorkspace');
    if (sectionsForm) {
        var sections = read(sectionsKey);
        Array.from(sectionsForm.elements).forEach(function (element) {
            if (element.name) {
                element.checked = sections[element.name] === undefined ? true : sections[element.name] !== false;
            }
        });
        sectionsForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var next = {};
            Array.from(sectionsForm.elements).forEach(function (element) {
                if (element.name) next[element.name] = element.checked;
            });
            save(sectionsKey, next);
            document.getElementById('workspaceStatus').textContent = 'تم حفظ إعدادات الأقسام والعناصر بنجاح.';
        });
    }

    var appearanceForm = document.getElementById('appearanceWorkspace');
    if (appearanceForm) {
        var appearance = read(contentKey);
        Array.from(appearanceForm.elements).forEach(function (element) {
            if (element.name && appearance[element.name] !== undefined) element.value = appearance[element.name];
        });
        appearanceForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var next = Object.assign({}, appearance);
            Array.from(appearanceForm.elements).forEach(function (element) {
                if (element.name) next[element.name] = element.value;
            });
            save(contentKey, next);
            document.getElementById('workspaceStatus').textContent = 'تم حفظ الألوان ونمط الخط بنجاح.';
        });
    }

    var mediaForm = document.getElementById('mediaWorkspace');
    if (mediaForm) {
        var media = read(mediaKey);
        Array.from(mediaForm.elements).forEach(function (element) {
            if (element.name && media[element.name] !== undefined) element.value = media[element.name];
        });
        mediaForm.addEventListener('submit', function (event) {
            event.preventDefault();
            var next = {};
            Array.from(mediaForm.elements).forEach(function (element) {
                if (element.name) next[element.name] = element.value.trim();
            });
            save(mediaKey, next);
            document.getElementById('workspaceStatus').textContent = 'تم حفظ روابط الصور والوسائط بنجاح.';
        });
    }
})();
