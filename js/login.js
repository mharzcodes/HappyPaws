        // Form submission
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Here you would typically send the form data to your backend
            alert('Login successful!');
        });

        // Add scroll effect to navbar
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

        // Logo image loading handler
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
                
                // Check if image is already loaded
                if (logoImg.complete) {
                    logoImg.style.opacity = '1';
                }
            }
        });