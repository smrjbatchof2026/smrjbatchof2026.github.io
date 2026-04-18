/**
 * BATCH OF 2026 PREMIERE - STAGE MANAGER SCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Scroll Animations (AOS)
    // Using a longer duration for that 'slow-motion' cinematic reveal
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-in-out-cubic'
    });

    // 2. Cinematic Navbar Transition
    const nav = document.querySelector('nav');
    const heroSection = document.querySelector('#hero');

    window.addEventListener('scroll', () => {
        // Change navbar style once you leave the hero section
        if (window.scrollY > 50) {
            nav.classList.add('bg-black/95', 'border-b', 'border-white/10', 'py-2');
            nav.classList.remove('py-4', 'bg-gradient-to-b');
        } else {
            nav.classList.remove('bg-black/95', 'border-b', 'border-white/10', 'py-2');
            nav.classList.add('py-4', 'bg-gradient-to-b');
        }
    });

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for fixed navbar
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Parallax Effect for Hero Backdrop
    // Adds a subtle 'panning' effect as the user moves their mouse
    const heroImage = document.querySelector('#hero img');
    if (heroImage) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth - e.pageX * 2) / 100;
            const y = (window.innerHeight - e.pageY * 2) / 100;
            heroImage.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
        });
    }

    // 5. Video Player "Director's Cut" Logic
    // Mute/Unmute handling or pausing when out of view can be added here
    const iframe = document.querySelector('iframe');
    const videoSection = document.querySelector('#video');

    // Intersection Observer to stop video when user scrolls away
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && iframe.src.includes('autoplay=1')) {
                // Logic to pause or stop can go here if using JS API
            }
        });
    }, { threshold: 0.1 });

    observer.observe(videoSection);
});