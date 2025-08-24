
document.querySelector('.cta-button').addEventListener('click', (e) => {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0.8';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
});


window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const logoImg = document.querySelector('.logo-placeholder img');
    if (logoImg) {
        logoImg.addEventListener('load', () => {
            console.log('Logo image loaded successfully');
            logoImg.style.opacity = '1';
        });
        
        logoImg.addEventListener('error', () => {
            console.error('Failed to load logo image:', logoImg.src);
            // Fallback to text if image fails
            logoImg.style.display = 'none';
            const logoPlaceholder = document.querySelector('.logo-placeholder');
            logoPlaceholder.innerHTML = '<span style="color: #333; font-weight: bold; font-size: 1.2rem;">🐾</span>';
        });
        

        if (logoImg.complete) {
            logoImg.style.opacity = '1';
        }
    }
});


const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card, index) => {
        card.style.transform = 'translateY(50px)';
        card.style.opacity = '0';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});