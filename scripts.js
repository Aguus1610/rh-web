document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
    });

    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    
    const controls = document.createElement('div');
    controls.className = 'carousel-controls';
    
    items.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        controls.appendChild(dot);
    });
    
    carousel.appendChild(controls);
    
    function goToSlide(index) {
        items[currentIndex].classList.remove('active');
        document.querySelectorAll('.carousel-dot')[currentIndex].classList.remove('active');
        
        currentIndex = index;
        
        items[currentIndex].classList.add('active');
        document.querySelectorAll('.carousel-dot')[currentIndex].classList.add('active');
    }
    
    function nextSlide() {
        goToSlide((currentIndex + 1) % items.length);
    }
    
    let intervalId = setInterval(nextSlide, 5000);
    
    carousel.addEventListener('mouseenter', () => {
        clearInterval(intervalId);
    });
    
    carousel.addEventListener('mouseleave', () => {
        intervalId = setInterval(nextSlide, 5000);
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', 
            menu.classList.contains('active'));
    });

    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            const formData = new FormData(contactForm);
            const formDataObj = Object.fromEntries(formData.entries());
            
            try {
                // Simular envío de formulario
                await new Promise(resolve => setTimeout(resolve, 1000));
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            } catch (error) {
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
            }
        });
    }

    // Animaciones al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.servicio, .producto, .stat-item').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}); 