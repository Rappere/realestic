// JavaScript for handling the navbar toggle on mobile view
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');

    // Toggling the navbar visibility on mobile
    toggleButton.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
    });

    // Make sure the navbar closes when clicking outside of it
    document.addEventListener('click', function(e) {
        if (!navbarNav.contains(e.target) && !toggleButton.contains(e.target)) {
            navbarNav.classList.remove('show');
        }
    });
});
