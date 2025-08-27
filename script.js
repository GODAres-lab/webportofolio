document.addEventListener('DOMContentLoaded', () => {

    // Inisialisasi AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        offset: 100,
        once: true,
        easing: 'ease-in-out',
    });

    // 1. Logika untuk Hamburger Menu di Mobile
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.innerHTML = navbar.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });

    // 2. Efek Shadow pada Header saat Scroll (sudah diganti dengan border di CSS)
    // fungsi: untuk tambahkan class 'scrolled'
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. Animasi Progress Bar di layar
    const skillSection = document.getElementById('myskills');
    const progressBars = document.querySelectorAll('.progress');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    bar.style.width = bar.getAttribute('data-progress');
                });
                observer.unobserve(skillSection);
            }
        });
    }, observerOptions);

    if (skillSection) {
        observer.observe(skillSection);
    }

    // 4. (BARU) Inisialisasi Efek 3D Tilt pada Kartu Skill
    // Cek Lib vanilla-tilt.js
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".skill-box"), {
            max: 15,     // Maksimal kemiringan
            speed: 400,  // Kecepatan transisi
            glare: true, // Efek kilau saat miring
            "max-glare": 0.2 // Intensitas kilau
        });
    }
});