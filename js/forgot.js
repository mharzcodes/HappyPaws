
        document.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            

            alert('Password reset link sent to your email!');
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

                    logoImg.style.display = 'none';
                    const logoPlaceholder = document.querySelector('.logo-placeholder');
                    logoPlaceholder.innerHTML = '<span style="color: #333; font-weight: bold; font-size: 1.2rem;">🐾</span>';
                });
                

                if (logoImg.complete) {
                    logoImg.style.opacity = '1';
                }
            }
        });