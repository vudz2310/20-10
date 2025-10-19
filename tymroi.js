// ===== SCRIPT TRÁI TIM RƠI =====

// Tạo trái tim rơi khi click vào màn hình
document.addEventListener('click', function(e) {
    createFallingHeart(e.clientX, e.clientY);
});

// Tạo trái tim rơi đơn lẻ
function createFallingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💕';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '24px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartFall 3s ease-out forwards';
    
    // Xoay ngẫu nhiên
    const rotation = Math.random() * 360;
    heart.style.transform = `rotate(${rotation}deg)`;
    
    // Chuyển động ngẫu nhiên theo chiều ngang
    const randomX = (Math.random() - 0.5) * 200;
    heart.style.setProperty('--randomX', randomX + 'px');
    
    document.body.appendChild(heart);
    
    // Xóa trái tim sau animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 3000);
}

// Tạo nhiều trái tim rơi cùng lúc
function createMultipleHearts(x, y, count = 5) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            createFallingHeart(x + (Math.random() - 0.5) * 100, y + (Math.random() - 0.5) * 100);
        }, i * 100);
    }
}

// Tạo trái tim rơi liên tục từ trên xuống
function createContinuousHeartRain() {
    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = -50;
        createFallingHeart(x, y);
    }, 500);
}

// Tạo trái tim rơi theo pattern
function createHeartPattern(x, y) {
    const patterns = [
        { offsetX: 0, offsetY: 0 },
        { offsetX: -50, offsetY: -20 },
        { offsetX: 50, offsetY: -20 },
        { offsetX: -25, offsetY: -40 },
        { offsetX: 25, offsetY: -40 }
    ];
    
    patterns.forEach((pattern, index) => {
        setTimeout(() => {
            createFallingHeart(x + pattern.offsetX, y + pattern.offsetY);
        }, index * 150);
    });
}

// Tạo trái tim bay lên
function createRisingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💖';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '20px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartRise 2s ease-out forwards';
    
    const randomX = (Math.random() - 0.5) * 100;
    heart.style.setProperty('--randomX', randomX + 'px');
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 2000);
}

// Tạo trái tim xoay tròn
function createSpinningHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💝';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '22px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartSpin 2.5s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 2500);
}

// Tạo trái tim nhấp nháy
function createBlinkingHeart(x, y) {
    const heart = document.createElement('div');
    heart.innerHTML = '💓';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '26px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'heartBlink 1.5s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, 1500);
}

// Thêm CSS animations
const heartStyles = document.createElement('style');
heartStyles.textContent = `
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
    
    @keyframes heartRise {
        0% {
            transform: translateY(0) translateX(var(--randomX, 0px)) scale(0.5);
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) translateX(var(--randomX, 0px)) scale(1.2);
            opacity: 0;
        }
    }
    
    @keyframes heartSpin {
        0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
        }
        50% {
            transform: translateY(50vh) rotate(180deg) scale(1.3);
            opacity: 0.8;
        }
        100% {
            transform: translateY(100vh) rotate(360deg) scale(0.3);
            opacity: 0;
        }
    }
    
    @keyframes heartBlink {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        25% {
            transform: translateY(25vh) scale(1.5);
            opacity: 0.7;
        }
        50% {
            transform: translateY(50vh) scale(1);
            opacity: 1;
        }
        75% {
            transform: translateY(75vh) scale(1.5);
            opacity: 0.7;
        }
        100% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
        }
    }
`;
document.head.appendChild(heartStyles);

// Double click để tạo nhiều trái tim
document.addEventListener('dblclick', function(e) {
    createMultipleHearts(e.clientX, e.clientY, 8);
});

// Right click để tạo trái tim bay lên
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    createRisingHeart(e.clientX, e.clientY);
});

// Middle click để tạo trái tim xoay tròn
document.addEventListener('auxclick', function(e) {
    if (e.button === 1) { // Middle mouse button
        createSpinningHeart(e.clientX, e.clientY);
    }
});

// Ctrl + click để tạo pattern trái tim
document.addEventListener('click', function(e) {
    if (e.ctrlKey) {
        e.preventDefault();
        createHeartPattern(e.clientX, e.clientY);
    }
});

// Shift + click để tạo trái tim nhấp nháy
document.addEventListener('click', function(e) {
    if (e.shiftKey) {
        e.preventDefault();
        createBlinkingHeart(e.clientX, e.clientY);
    }
});

// Tự động tạo trái tim rơi liên tục (có thể bật/tắt)
let heartRainInterval = null;
let autoHeartRain = null;

// Bật tự động rơi trái tim khi trang load
function startAutoHeartRain() {
    if (autoHeartRain) return;
    autoHeartRain = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = -50;
        createFallingHeart(x, y);
    }, 1200);
}

function stopAutoHeartRain() {
    if (autoHeartRain) {
        clearInterval(autoHeartRain);
        autoHeartRain = null;
    }
}

function startHeartRain() {
    if (heartRainInterval) return;
    heartRainInterval = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = -50;
        createFallingHeart(x, y);
    }, 600);
}

function stopHeartRain() {
    if (heartRainInterval) {
        clearInterval(heartRainInterval);
        heartRainInterval = null;
    }
}

// Tự động tạo trái tim rơi với nhiều loại khác nhau
function startVariedHeartRain() {
    if (autoHeartRain) return;
    autoHeartRain = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = -50;
        const heartTypes = ['💕', '💖', '💝', '💓', '💗', '💘', '💞', '💟'];
        const randomHeart = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        
        const heart = document.createElement('div');
        heart.innerHTML = randomHeart;
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = (20 + Math.random() * 15) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        heart.style.animation = 'heartFall 4s ease-out forwards';
        
        const rotation = Math.random() * 360;
        const randomX = (Math.random() - 0.5) * 300;
        heart.style.transform = `rotate(${rotation}deg)`;
        heart.style.setProperty('--randomX', randomX + 'px');
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            if (heart.parentNode) {
                heart.parentNode.removeChild(heart);
            }
        }, 4000);
    }, 800);
}

// Tạo trái tim rơi theo sóng
function createHeartWave() {
    const waveCount = 10;
    for (let i = 0; i < waveCount; i++) {
        setTimeout(() => {
            const x = (window.innerWidth / waveCount) * i + Math.random() * 50;
            const y = -50;
            createFallingHeart(x, y);
        }, i * 100);
    }
}

// Tạo trái tim rơi theo vòng tròn
function createHeartCircle(centerX, centerY, radius = 100) {
    const heartCount = 12;
    for (let i = 0; i < heartCount; i++) {
        const angle = (360 / heartCount) * i;
        const x = centerX + Math.cos(angle * Math.PI / 180) * radius;
        const y = centerY + Math.sin(angle * Math.PI / 180) * radius;
        
        setTimeout(() => {
            createFallingHeart(x, y);
        }, i * 50);
    }
}

// Tạo trái tim rơi theo hình trái tim
function createHeartShape(centerX, centerY) {
    const heartPoints = [
        {x: 0, y: 0},
        {x: -20, y: -10},
        {x: -40, y: 0},
        {x: -30, y: 20},
        {x: 0, y: 40},
        {x: 30, y: 20},
        {x: 40, y: 0},
        {x: 20, y: -10}
    ];
    
    heartPoints.forEach((point, index) => {
        setTimeout(() => {
            createFallingHeart(centerX + point.x, centerY + point.y);
        }, index * 100);
    });
}

// Space bar để bật/tắt mưa trái tim
document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
        e.preventDefault();
        if (heartRainInterval) {
            stopHeartRain();
            console.log('💕 Mưa trái tim đã tắt');
        } else {
            startHeartRain();
            console.log('💕 Mưa trái tim đã bật');
        }
    }
});

// 'A' để bật/tắt tự động rơi trái tim
document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyA') {
        e.preventDefault();
        if (autoHeartRain) {
            stopAutoHeartRain();
            console.log('💕 Tự động rơi trái tim đã tắt');
        } else {
            startAutoHeartRain();
            console.log('💕 Tự động rơi trái tim đã bật');
        }
    }
});

// 'V' để bật mưa trái tim đa dạng
document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyV') {
        e.preventDefault();
        if (autoHeartRain) {
            stopAutoHeartRain();
        }
        startVariedHeartRain();
        console.log('💕 Mưa trái tim đa dạng đã bật');
    }
});

// 'W' để tạo sóng trái tim
document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyW') {
        e.preventDefault();
        createHeartWave();
        console.log('💕 Sóng trái tim!');
    }
});

// 'C' để tạo vòng tròn trái tim
document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyC') {
        e.preventDefault();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        createHeartCircle(centerX, centerY);
        console.log('💕 Vòng tròn trái tim!');
    }
});

// 'H' để tạo hình trái tim
document.addEventListener('keydown', function(e) {
    if (e.code === 'KeyH') {
        e.preventDefault();
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        createHeartShape(centerX, centerY);
        console.log('💕 Hình trái tim!');
    }
});

// Enter để tạo bão trái tim
document.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') {
        e.preventDefault();
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const x = Math.random() * window.innerWidth;
                const y = Math.random() * window.innerHeight;
                createFallingHeart(x, y);
            }, i * 50);
        }
        console.log('💕 Bão trái tim!');
    }
});

// Tạo trái tim theo con trỏ chuột
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Alt + click để tạo trái tim theo con trỏ
document.addEventListener('click', function(e) {
    if (e.altKey) {
        e.preventDefault();
        createFallingHeart(mouseX, mouseY);
    }
});

// Tự động khởi động mưa trái tim khi trang load
window.addEventListener('load', function() {
    setTimeout(() => {
        startAutoHeartRain();
        console.log('💕 Tự động rơi trái tim đã bật!');
    }, 2000); // Chờ 2 giây sau khi trang load
});

// Hướng dẫn sử dụng
console.log(`
💕 SCRIPT TRÁI TIM RƠI TỰ ĐỘNG 💕
================================
🎮 ĐIỀU KHIỂN CHUỘT:
• Click: Tạo 1 trái tim rơi
• Double click: Tạo 8 trái tim rơi
• Right click: Tạo trái tim bay lên
• Middle click: Tạo trái tim xoay tròn
• Ctrl + click: Tạo pattern trái tim
• Shift + click: Tạo trái tim nhấp nháy
• Alt + click: Tạo trái tim theo con trỏ chuột

⌨️ ĐIỀU KHIỂN BÀN PHÍM:
• Space: Bật/tắt mưa trái tim nhanh
• A: Bật/tắt tự động rơi trái tim
• V: Mưa trái tim đa dạng (8 loại khác nhau)
• W: Tạo sóng trái tim
• C: Tạo vòng tròn trái tim
• H: Tạo hình trái tim
• Enter: Tạo bão trái tim (20 trái tim)

🚀 TỰ ĐỘNG: Mưa trái tim sẽ tự động bật sau 2 giây!
`);

// Khởi tạo
console.log('💕 Script trái tim rơi tự động đã sẵn sàng!');
