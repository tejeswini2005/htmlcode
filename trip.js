// JavaScript to enhance functionality
document.addEventListener("DOMContentLoaded", () => {
    // Carousel auto-slide interval
    const carousel = document.querySelector('#carouselExample');
    if (carousel) {
        new bootstrap.Carousel(carousel, {
            interval: 3000, // 3 seconds interval
            wrap: true,    // Continuously cycle
        });
    }

    // Service carousel control (if dynamic functionality is needed)
    const serviceCarousel = document.querySelector('#serviceCarousel');
    if (serviceCarousel) {
        new bootstrap.Carousel(serviceCarousel, {
            interval: 4000, // 4 seconds interval
            wrap: true,
        });
    }

    // Scroll to section on navbar link click
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // Get target section ID
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Book Now button click functionality
    const bookNowButton = document.querySelector('.btn-primary');
    if (bookNowButton) {
        bookNowButton.addEventListener('click', () => {
            alert('Redirecting to the booking page!');
            // Redirect to booking page if applicable
            window.location.href = '/booking-page.html'; // Replace with actual booking page
        });
    }

    // Inquiry now buttons click functionality
    const inquiryButtons = document.querySelectorAll('.btn-primary');
    inquiryButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Inquiry initiated for this service!');
        });
    });
});