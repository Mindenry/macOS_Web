
function startBootSequence() {
    const bootScreen = document.querySelector('.boot-screen');
    const progressBar = document.querySelector('.progress-bar');
    const loginScreen = document.querySelector('.login-screen');
    
    // Disable scrolling/interaction during boot
    document.body.style.overflow = 'hidden';

    let width = 0;
    const interval = setInterval(() => {
        // Randomize speed for realism
        const increment = Math.random() * 2 + 0.5; 
        width += increment;
        
        if (width >= 100) {
            width = 100;
            clearInterval(interval);
            
            // Finish boot -> Show Login
            setTimeout(() => {
                bootScreen.classList.add('fade-out');
                
                // Show Login Screen
                loginScreen.style.display = 'flex';
                
                setTimeout(() => {
                     bootScreen.style.display = 'none';
                     
                     // Focus password input
                     const passInput = document.querySelector('.password-input');
                     if(passInput) passInput.focus();
                }, 500); 
            }, 500);
        }
        
        progressBar.style.width = width + '%';
    }, 30);
}

// Start boot on DOMContentLoaded for faster response
document.addEventListener('DOMContentLoaded', () => {
    startBootSequence();
    
    // Legacy onload functions
    if (typeof digi === 'function') digi();
    if (typeof calculateBattery === 'function') calculateBattery();
});

// Login Logic
document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.querySelector('.login-screen');
    const passwordInput = document.querySelector('.password-input');
    const enterArrow = document.querySelector('.enter-arrow');
    const loginContent = document.querySelector('.login-content');

    function attemptLogin() {
        // Simulate password check (Accept anything for demo or specific "admin")
        // Add a small delay for "verifying"
        
        if (passwordInput.value.length > 0) {
            // Success
            loginScreen.classList.add('login-fade-out');
            setTimeout(() => {
                loginScreen.style.display = 'none';
            }, 800);
        } else {
            // Shake on empty
            loginContent.classList.add('shake');
            setTimeout(() => {
                loginContent.classList.remove('shake');
                passwordInput.focus();
            }, 500);
        }
    }

    if(enterArrow) {
        enterArrow.addEventListener('click', attemptLogin);
    }

    if(passwordInput) {
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                attemptLogin();
            }
        });
    }
});
