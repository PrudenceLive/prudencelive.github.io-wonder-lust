document.addEventListener('DOMContentLoaded', (event) => {
    // Default open tab
    document.getElementById("loginBtn").click();

    // Toggle password visibility
    const togglePassword = document.querySelectorAll('.toggle-password');
    togglePassword.forEach(item => {
        item.addEventListener('click', function () {
            const input = this.previousElementSibling;
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash');
        });
    });

    // Show login form and hide signup form
    function showLogin() {
        document.getElementById("loginForm").classList.remove("hidden");
        document.getElementById("signupForm").classList.add("hidden");
        document.getElementById("loginBtn").classList.add('active');
        document.getElementById("signupBtn").classList.remove('active');
    }

    // Show signup form and hide login form
    function showSignup() {
        document.getElementById("signupForm").classList.remove("hidden");
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("signupBtn").classList.add('active');
        document.getElementById("loginBtn").classList.remove('active');
    }

    // Event listeners for login and signup buttons
    document.getElementById('loginBtn').addEventListener('click', showLogin);
    document.getElementById('signupBtn').addEventListener('click', showSignup);

    // Smooth scroll for navigation links
    const links = document.querySelectorAll('.menu-hover');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize carousel
    $(".owl-carousel").owlCarousel({
        items: 3,
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});
