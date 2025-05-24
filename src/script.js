
// Matrix Rain Effect
function initMatrixRain() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const matrixContainer = document.getElementById('matrix');
  
  matrixContainer.appendChild(canvas);
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
  const matrixArray = matrix.split("");
  
  const fontSize = 10;
  const columns = canvas.width / fontSize;
  
  const drops = [];
  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }
  
  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = '#00f3ff';
    ctx.font = fontSize + 'px monospace';
    
    for (let i = 0; i < drops.length; i++) {
      const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  
  setInterval(draw, 50);
  
  // Resize canvas on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// Smooth Scrolling
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Scroll Animations (Simple AOS replacement)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });
}

// Navigation Background on Scroll
function initNavScroll() {
  const nav = document.querySelector('.nav-container');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      nav.style.background = 'rgba(0, 0, 0, 0.95)';
      nav.style.borderBottomColor = 'rgba(0, 243, 255, 0.3)';
    } else {
      nav.style.background = 'rgba(0, 0, 0, 0.8)';
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    }
  });
}

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      navToggle.classList.remove('active');
    });
  });
}

// Explore Button Click Effect
function initExploreButton() {
  const exploreBtn = document.getElementById('explore-btn');
  
  exploreBtn.addEventListener('click', () => {
    // Add click animation
    exploreBtn.style.transform = 'scale(0.95)';
    exploreBtn.style.transition = 'transform 0.1s ease';
    
    setTimeout(() => {
      exploreBtn.style.transform = 'scale(1)';
      exploreBtn.style.transition = 'all 0.3s ease';
    }, 100);
    
    // Scroll to about section
    document.getElementById('about').scrollIntoView({
      behavior: 'smooth'
    });
  });
}

// Parallax Effect for Floating Elements
function initParallax() {
  const floatingElements = document.querySelectorAll('.floating-element');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = scrolled * 0.5;
    
    floatingElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      element.style.transform = `translateY(${parallax * speed}px)`;
    });
  });
}

// Glitch Effect Trigger
function initGlitchEffect() {
  const glitchElement = document.querySelector('.glitch');
  
  setInterval(() => {
    if (Math.random() > 0.95) {
      glitchElement.style.animation = 'none';
      glitchElement.offsetHeight; // Trigger reflow
      glitchElement.style.animation = 'glitch-anim-1 0.3s linear';
    }
  }, 2000);
}

// Cursor Trail Effect
function initCursorTrail() {
  const trail = [];
  const trailLength = 20;
  
  for (let i = 0; i < trailLength; i++) {
    const dot = document.createElement('div');
    dot.className = 'cursor-trail';
    dot.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: #00f3ff;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: all 0.1s ease;
      opacity: ${1 - (i / trailLength)};
    `;
    document.body.appendChild(dot);
    trail.push(dot);
  }
  
  document.addEventListener('mousemove', (e) => {
    trail.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }, index * 10);
    });
  });
}

// Typewriter Effect for Hero Subtitle
function initTypewriter() {
  const subtitle = document.querySelector('.hero-subtitle');
  const text = subtitle.textContent;
  subtitle.textContent = '';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  };
  
  // Start typewriter effect after a delay
  setTimeout(typeWriter, 1000);
}

// Event Card Hover Effects
function initEventCardEffects() {
  const eventCards = document.querySelectorAll('.event-card');
  
  eventCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.background = 'rgba(0, 243, 255, 0.05)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.background = 'var(--glass-bg)';
    });
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initMatrixRain();
  initSmoothScrolling();
  initScrollAnimations();
  initNavScroll();
  initMobileNav();
  initExploreButton();
  initParallax();
  initGlitchEffect();
  initCursorTrail();
  initTypewriter();
  initEventCardEffects();
  
  // Add loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 1s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// Performance optimization
let ticking = false;

function updateOnScroll() {
  // Throttle scroll events for better performance
  if (!ticking) {
    requestAnimationFrame(() => {
      // Scroll-based animations would go here
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', updateOnScroll);

// Add some interactive sound effects (optional)
function playClickSound() {
  // This would play a futuristic click sound if audio files were available
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.1);
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
}

// Add click sound to buttons
document.querySelectorAll('button, .nav-link, .social-link').forEach(element => {
  element.addEventListener('click', playClickSound);
});
