// Smooth scrolling and interactive features
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  function setBodyScrollLock(lock) {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    setBodyScrollLock(hamburger.classList.contains("active"));
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      setBodyScrollLock(false);
    });
  });

  // Ensure nav closes and scroll unlocks on resize (e.g., rotate phone)
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      setBodyScrollLock(false);
    }
  });

  // Typing animation for terminal
  const commands = [
    "who am i",
    "Software Developer Student",
    "ls skills/",
    "C++  HTML  CSS  DSA  DBMS  OOPs",
    "Published Research Paper ✓",
    'echo "Ready for SDE opportunities"',
    "Ready for SDE opportunities",
  ];

  let commandIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing-animation");
  const typingSpeed = 50;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  function typeEffect() {
    const currentCommand = commands[commandIndex];

    if (isDeleting) {
      typingElement.textContent = currentCommand.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
        setTimeout(typeEffect, 500);
        return;
      }
    } else {
      typingElement.textContent = currentCommand.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentCommand.length) {
        setTimeout(() => {
          isDeleting = true;
          typeEffect();
        }, pauseTime);
        return;
      }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  // Start typing animation
  setTimeout(typeEffect, 1000);

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar background on scroll
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(0, 0, 0, 0.9)";
      navbar.style.backdropFilter = "blur(20px)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.05)";
      navbar.style.backdropFilter = "blur(20px)";
    }
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe all sections for animations
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });

  // Observe skill items for staggered animation
  document.querySelectorAll(".skill-item").forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
    observer.observe(item);
  });

  // Observe project cards for staggered animation
  document.querySelectorAll(".project-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
    observer.observe(card);
  });

  // Observe certification cards for staggered animation
  document.querySelectorAll(".cert-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease-out ${index * 0.15}s`;
    observer.observe(card);
  });

  // Note: Form handling has been moved to form-handler.js
  // This section was removed to prevent conflicts with FormSubmit.co implementation

  // Cursor effect
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  // Create custom cursor
  const cursor = document.createElement("div");
  cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.8), rgba(255, 0, 255, 0.4));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
  document.body.appendChild(cursor);

  // Update cursor position
  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth cursor animation
  function updateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;

    cursor.style.left = cursorX - 10 + "px";
    cursor.style.top = cursorY - 10 + "px";

    requestAnimationFrame(updateCursor);
  }
  updateCursor();

  // Cursor hover effects
  document
    .querySelectorAll("a, button, .skill-item, .project-card, .cert-card")
    .forEach((element) => {
      element.addEventListener("mouseenter", function () {
        cursor.style.transform = "scale(2)";
        cursor.style.background =
          "radial-gradient(circle, rgba(255, 0, 255, 0.8), rgba(0, 255, 255, 0.4))";
      });

      element.addEventListener("mouseleave", function () {
        cursor.style.transform = "scale(1)";
        cursor.style.background =
          "radial-gradient(circle, rgba(0, 255, 255, 0.8), rgba(255, 0, 255, 0.4))";
      });
    });

  // Parallax effect for background elements
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    const particles = document.querySelector(".particles");
    if (particles) {
      particles.style.transform = `translateY(${rate}px)`;
    }
  });

  // Add floating animation to skill items
  document.querySelectorAll(".skill-item").forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`;
    item.classList.add("floating");
  });

  // Add floating animation via CSS
  const style = document.createElement("style");
  style.textContent = `
        .floating {
            animation: float-gentle 3s ease-in-out infinite;
        }
        
        @keyframes float-gentle {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
        }
    `;
  document.head.appendChild(style);

  // Performance optimization: Reduce animations on low-end devices
  if (navigator.hardwareConcurrency <= 2) {
    document.querySelectorAll(".particles, .stars").forEach((element) => {
      element.style.display = "none";
    });
  }

  // Add click effect to buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add ripple animation
  const rippleStyle = document.createElement("style");
  rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(rippleStyle);
});

// Additional utility functions
function getRandomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle() {
  const particle = document.createElement("div");
  particle.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(0, 255, 255, 0.6);
        border-radius: 50%;
        animation: particle-float ${getRandomFloat(3, 6)}s linear infinite;
        left: ${getRandomFloat(0, 100)}%;
        top: 100%;
    `;

  document.querySelector(".particles").appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 6000);
}

// Create particles periodically
setInterval(createParticle, 500);

// Add particle animation
const particleStyle = document.createElement("style");
particleStyle.textContent = `
    @keyframes particle-float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${getRandomFloat(
              -50,
              50
            )}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);
// Debug redeploy check
