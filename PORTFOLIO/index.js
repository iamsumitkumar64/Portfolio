// Theme Management
const body = document.body;
const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
const header = document.querySelector('header');

// Check for saved theme preference
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    body.classList.add('light-theme');
    if (modeIcon) {
        modeIcon.src = 'PORTO CONTENT/night.png';
        modeIcon.alt = 'Dark Mode';
    }
} else {
    body.classList.remove('light-theme');
    if (modeIcon) {
        modeIcon.src = 'PORTO CONTENT/light.png';
        modeIcon.alt = 'Light Mode';
    }
}

// Toggle Theme function
if (modeToggle) {
    modeToggle.addEventListener('click', () => {
        body.classList.toggle('light-theme');
        const isLight = body.classList.contains('light-theme');
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        
        if (modeIcon) {
            modeIcon.src = isLight ? 'PORTO CONTENT/night.png' : 'PORTO CONTENT/light.png';
            modeIcon.alt = isLight ? 'Dark Mode' : 'Light Mode';
        }
        
        // Notify particle network of theme change
        if (window.particleNetwork) {
            window.particleNetwork.updateColors(isLight);
        }
    });
}

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking links
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

// Canvas Particle Network
class ParticleNetwork {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = window.innerWidth < 768 ? 30 : 65;
        this.connectionDistance = 110;
        this.mouse = { x: null, y: null, radius: 150 };
        this.animationFrameId = null;
        this.isLight = document.body.classList.contains('light-theme');
        this.isVisible = true;

        this.init();
        this.bindEvents();
        this.setupVisibilityObserver();
    }

    init() {
        this.resize();
        this.updateColors(this.isLight);
        this.particles = [];
        for (let i = 0; i < this.maxParticles; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            radius: Math.random() * 2.5 + 1.5,
            color: this.getRandomColor()
        };
    }

    getRandomColor() {
        // Cyan/Indigo tones depending on current theme
        const colors = this.isLight 
            ? ['rgba(79, 70, 229, 0.45)', 'rgba(8, 145, 178, 0.45)']
            : ['rgba(99, 102, 241, 0.5)', 'rgba(6, 182, 212, 0.5)'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    updateColors(isLight) {
        this.isLight = isLight;
        this.particles.forEach(p => {
            p.color = this.getRandomColor();
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    bindEvents() {
        window.addEventListener('resize', () => {
            this.resize();
            this.init();
        });

        // Track mouse position over section
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    setupVisibilityObserver() {
        // Pause canvas updates if page is scrolled away from hero
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.isVisible = entry.isIntersecting;
                if (this.isVisible) {
                    this.animate();
                } else {
                    cancelAnimationFrame(this.animationFrameId);
                }
            });
        }, { threshold: 0.1 });

        const hero = document.getElementById('home-section');
        if (hero) observer.observe(hero);
    }

    animate() {
        if (!this.isVisible) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update and draw particles
        this.particles.forEach(p => {
            // Move
            p.x += p.vx;
            p.y += p.vy;

            // Boundary check
            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            // Mouse interaction (push away)
            if (this.mouse.x !== null && this.mouse.y !== null) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.hypot(dx, dy);
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    p.x += (dx / dist) * force * 1.5;
                    p.y += (dy / dist) * force * 1.5;
                }
            }

            // Draw
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fillStyle = p.color;
            this.ctx.fill();
        });

        // Draw connections (lines)
        const lineColor = this.isLight ? 'rgba(79, 70, 229, 0.07)' : 'rgba(99, 102, 241, 0.08)';
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

                if (dist < this.connectionDistance) {
                    const alpha = (this.connectionDistance - dist) / this.connectionDistance * 0.6;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = this.isLight 
                        ? `rgba(79, 70, 229, ${alpha * 0.12})`
                        : `rgba(99, 102, 241, ${alpha * 0.15})`;
                    this.ctx.lineWidth = 0.8;
                    this.ctx.stroke();
                }
            }
        }

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
}

// Instantiate canvas background and hero visual interactive states after load
document.addEventListener('DOMContentLoaded', () => {
    window.particleNetwork = new ParticleNetwork('particle-canvas');
    
    const codeWindow = document.querySelector('.hero-code-window');
    if (codeWindow) {
        codeWindow.addEventListener('click', (e) => {
            e.stopPropagation();
            codeWindow.classList.toggle('forward');
        });
        
        document.addEventListener('click', () => {
            codeWindow.classList.remove('forward');
        });
    }
});

// Timeline & Experience Scroll & Glow Observer
const timelineItems = document.querySelectorAll('.timeline-item');
const experienceItems = document.querySelectorAll('.experience-item');

const glowObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.add('glowing');
        } else {
            entry.target.classList.remove('glowing');
        }
    });
}, { 
    threshold: 0.1, 
    rootMargin: '-25% 0px -25% 0px' /* active zone in the center of the viewport */
});

if (timelineItems.length > 0) {
    timelineItems.forEach(item => glowObserver.observe(item));
}
if (experienceItems.length > 0) {
    experienceItems.forEach(item => glowObserver.observe(item));
}

// Resume PDF Download action
const resumeBtn = document.getElementById('resume-btn');
if (resumeBtn) {
    resumeBtn.addEventListener('click', () => {
        const link = document.createElement('a');
        link.href = 'PORTO CONTENT/My Resume.pdf';
        link.download = 'Sumit Kumar Resume.pdf';
        link.click();
    });
}

// Custom Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    // Icon selection
    let icon = '✓';
    if (type === 'error') icon = '✕';
    
    toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-message">${message}</span>`;
    container.appendChild(toast);

    // Trigger transition
    setTimeout(() => {
        toast.classList.add('show');
    }, 50);

    // Auto remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 450);
    }, 4000);
}

// Contact Form submission using EmailJS
function SendMail(event) {
    if (event) event.preventDefault();

    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    const mobileInput = document.getElementById('user-mobile');
    const messageInput = document.getElementById('user-message');
    const submitBtn = document.querySelector('#contact-form button[type="submit"]');

    if (!nameInput || !emailInput || !messageInput) {
        showToast('Form structure is invalid.', 'error');
        return false;
    }

    const params = {
        from_name: nameInput.value.trim(),
        email_id: emailInput.value.trim(),
        mobile: mobileInput ? mobileInput.value.trim() : '',
        message: messageInput.value.trim()
    };

    if (!params.from_name || !params.email_id || !params.message) {
        showToast('Please fill in all required fields.', 'error');
        return false;
    }

    // Set loading state
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = 'SENDING...';
    }

    emailjs.send("service_nvpczn8", "template_fjbjz6e", params)
        .then((res) => {
            showToast('Message sent successfully! Sumit will get back to you soon.', 'success');
            // Reset fields
            nameInput.value = '';
            emailInput.value = '';
            if (mobileInput) mobileInput.value = '';
            messageInput.value = '';
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
            showToast('Failed to send message. Please try again or email directly.', 'error');
        })
        .finally(() => {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerText = 'SUBMIT FORM';
            }
        });

    return false;
}

// Bind contact form submit explicitly if available
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', SendMail);
    }
});

// Quotes rotation & controls
const quotes = [
    {
        text: "You have the right to perform your actions, but not to claim the results.",
        author: "— Bhagavad Gita 2.47"
    },
    {
        text: "An equation means nothing to me unless it expresses a thought of God.",
        author: "— Srinivasa Ramanujan"
    },
    {
        text: "A person should never do that to others which he does not like to be done to him.",
        author: "— Bhishma, Mahabharata"
    }
];

let currentQuoteIndex = 0;
const quoteTextEl = document.getElementById('quote-text');
const quoteAuthorEl = document.getElementById('quote-author');
const prevQuoteBtn = document.getElementById('prev-quote-btn');
const nextQuoteBtn = document.getElementById('next-quote-btn');
let quoteInterval;

if (quoteTextEl && quoteAuthorEl) {
    function displayQuote(index) {
        quoteTextEl.style.opacity = '0';
        quoteAuthorEl.style.opacity = '0';
        
        setTimeout(() => {
            quoteTextEl.innerText = quotes[index].text;
            quoteAuthorEl.innerText = quotes[index].author;
            
            quoteTextEl.style.opacity = '1';
            quoteAuthorEl.style.opacity = '1';
        }, 300);
    }
    
    function startQuoteRotation() {
        if (quoteInterval) clearInterval(quoteInterval);
        quoteInterval = setInterval(() => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            displayQuote(currentQuoteIndex);
        }, 8000);
    }
    
    if (prevQuoteBtn) {
        prevQuoteBtn.addEventListener('click', () => {
            currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
            displayQuote(currentQuoteIndex);
            startQuoteRotation();
        });
    }
    
    if (nextQuoteBtn) {
        nextQuoteBtn.addEventListener('click', () => {
            currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
            displayQuote(currentQuoteIndex);
            startQuoteRotation();
        });
    }
    
    startQuoteRotation();
}

// Experience section migrated to modern vertical layout. Tab switching logic no longer required.