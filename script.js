// Click to create falling hearts effect
document.addEventListener('click', function(e) {
    createFallingHeart(e.clientX, e.clientY);
});

// Create a single falling heart
function createFallingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartFall 3s ease-out forwards';
    
    // Add random rotation
    const rotation = Math.random() * 360;
    heart.style.transform = `rotate(${rotation}deg)`;
    
    // Add random horizontal movement
    const randomX = (Math.random() - 0.5) * 200;
    heart.style.setProperty('--randomX', randomX + 'px');
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 3000);
}

// Add CSS animation for falling hearts
const style = document.createElement('style');
style.textContent = `
    @keyframes heartFall {
        0% {
            transform: translateY(0) rotate(var(--rotation, 0deg)) scale(1);
            opacity: 1;
        }
        50% {
            transform: translateY(50vh) translateX(var(--randomX, 0px)) rotate(var(--rotation, 180deg)) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translateY(100vh) translateX(var(--randomX, 0px)) rotate(var(--rotation, 360deg)) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add ripple effect on click
document.addEventListener('click', function(e) {
    createRipple(e.clientX, e.clientY);
});

function createRipple(x, y) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.width = '0px';
    ripple.style.height = '0px';
    ripple.style.borderRadius = '50%';
    ripple.style.background = 'rgba(255, 105, 180, 0.3)';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '999';
    ripple.style.animation = 'ripple 0.6s ease-out forwards';
    
    document.body.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
}

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        0% {
            width: 0px;
            height: 0px;
            opacity: 1;
        }
        100% {
            width: 100px;
            height: 100px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add sparkle effect on click
document.addEventListener('click', function(e) {
    createSparkles(e.clientX, e.clientY);
});

function createSparkles(x, y) {
    const sparkleCount = 8;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '16px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '1001';
        
        // Random direction for sparkles
        const angle = (360 / sparkleCount) * i;
        const distance = 50 + Math.random() * 50;
        const endX = x + Math.cos(angle * Math.PI / 180) * distance;
        const endY = y + Math.sin(angle * Math.PI / 180) * distance;
        
        sparkle.style.animation = `sparkleMove 1s ease-out forwards`;
        sparkle.style.setProperty('--endX', endX + 'px');
        sparkle.style.setProperty('--endY', endY + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            if (sparkle.parentNode) {
                sparkle.parentNode.removeChild(sparkle);
            }
        }, 1000);
    }
}

// Add sparkle animation CSS
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkleMove {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(1) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Add floating hearts on double click
document.addEventListener('dblclick', function(e) {
    createFloatingHearts(e.clientX, e.clientY);
});

function createFloatingHearts(x, y) {
    const heartCount = 5;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '24px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        // Random delay and direction
        const delay = i * 200;
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = -Math.random() * 200 - 100;
        
        heart.style.animation = `floatUp 2s ease-out forwards`;
        heart.style.animationDelay = delay + 'ms';
        heart.style.setProperty('--randomX', randomX + 'px');
        heart.style.setProperty('--randomY', randomY + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 2000 + delay);
    }
}

// Add floating animation CSS
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes floatUp {
        0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(calc(-50% + var(--randomX)), calc(-50% + var(--randomY))) scale(1.2) rotate(180deg);
            opacity: 0.8;
        }
        100% {
            transform: translate(calc(-50% + var(--randomX)), calc(-50% + var(--randomY) - 200px)) scale(0.5) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(floatStyle);

// Add confetti effect on triple click
let clickCount = 0;
let clickTimer;

document.addEventListener('click', function(e) {
    clickCount++;
    
    if (clickCount === 1) {
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 300);
    } else if (clickCount === 3) {
        clearTimeout(clickTimer);
        clickCount = 0;
        createConfetti(e.clientX, e.clientY);
    }
});

function createConfetti(x, y) {
    const confettiCount = 20;
    const colors = ['#ff69b4', '#ff1493', '#ffc0cb', '#ffb6c1', '#ffa0b4'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.width = '8px';
        confetti.style.height = '8px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '1000';
        
        // Random direction and rotation
        const angle = Math.random() * 360;
        const distance = 100 + Math.random() * 200;
        const endX = x + Math.cos(angle * Math.PI / 180) * distance;
        const endY = y + Math.sin(angle * Math.PI / 180) * distance;
        
        confetti.style.animation = `confettiFall 2s ease-out forwards`;
        confetti.style.setProperty('--endX', endX + 'px');
        confetti.style.setProperty('--endY', endY + 'px');
        confetti.style.setProperty('--rotation', (Math.random() * 720 - 360) + 'deg');
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 2000);
    }
}

// Add confetti animation CSS
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(calc(var(--endX) - 50%), calc(var(--endY) - 50%)) scale(0) rotate(var(--rotation));
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

console.log('💕 Click effects loaded! Try clicking, double-clicking, and triple-clicking! 💕');
