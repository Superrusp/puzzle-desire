document.addEventListener('DOMContentLoaded', () => {
    const anchor = location.href.split('#')[1];
    if (anchor) localStorage.setItem('anchor', anchor);
    const path = window.location.pathname;
    const lang = path.substring(path.length - 3).replaceAll('/', '');
    localStorage.setItem('lang', lang);
    const url = path.split(lang)[0];
    window.location.href = url;
});
