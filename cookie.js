document.addEventListener('DOMContentLoaded', () => {
    const cookieNotice = document.getElementById('cookieNotice');
    const acceptButton = document.querySelector('.cookie-accept');
    const declineButton = document.querySelector('.cookie-decline');

    const cookieConsent = localStorage.getItem('cookieConsent');

    if (cookieConsent === 'accepted' || cookieConsent === 'declined') {
        cookieNotice.style.display = 'none';
    } else {
        cookieNotice.style.display = 'block';
    }

    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieNotice.style.display = 'none';
    });

    declineButton.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieNotice.style.display = 'none';
    });
});
