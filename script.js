// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const overlay = document.getElementById("menu-overlay");
  const body = document.body;

  if (menu && icon && overlay) {
    const isOpen = menu.classList.toggle("open");
    icon.classList.toggle("open");
    overlay.classList.toggle("open");
    body.classList.toggle("menu-open");
  }
}

document.addEventListener('DOMContentLoaded', () => {

  // --- Download CV Dropdown ---
  (function() {
    const btn = document.getElementById('download-cv-btn');
    const menu = document.getElementById('cv-dropdown');
    if (!btn || !menu) return;
    const openMenu = () => { menu.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); };
    const closeMenu = () => { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); };
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (menu.classList.contains('open')) closeMenu(); else openMenu();
    });
    document.addEventListener('click', (e) => { if (!menu.contains(e.target) && e.target !== btn) closeMenu(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  })();

  

  // --- Theme Toggle Functionality ---
  const desktopToggle = document.getElementById('theme-toggle-desktop');
  const mobileToggle = document.getElementById('theme-toggle-mobile');
  const desktopIconContainer = document.getElementById('theme-icon-desktop');
  const mobileIconContainer = document.getElementById('theme-icon-mobile');

  const sunIconSVG = `
    <svg class="theme-icon light-mode-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>`;

  const moonIconSVG = `
    <svg class="theme-icon dark-mode-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>`;

  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const isDark = theme === 'dark';
    if (desktopToggle) desktopToggle.checked = isDark;
    if (mobileToggle) mobileToggle.checked = isDark;
    const icon = isDark ? moonIconSVG : sunIconSVG;
    if (desktopIconContainer) desktopIconContainer.innerHTML = icon;
    if (mobileIconContainer) mobileIconContainer.innerHTML = icon;
  }

  applyTheme(currentTheme);

  function handleToggleChange(event) {
    const newTheme = event.target.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme-manual-override', 'true');
  }

  if (desktopToggle) desktopToggle.addEventListener('change', handleToggleChange);
  if (mobileToggle) mobileToggle.addEventListener('change', handleToggleChange);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme-manual-override')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  // --- Typing Animation (Profile Section) ---
  const typingAnimationElement = document.getElementById('typing-animation');
  if (typingAnimationElement) {
    const typingTexts = [
      'AI Engineer',
      'Computer Vision Engineer',
      'Machine Learning Engineer',
      'Deep Learning Engineer'
    ];
    let textIndex = 0;
    let charIndex = 0;
    function type() {
      if (charIndex < typingTexts[textIndex].length) {
        typingAnimationElement.textContent += typingTexts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 150);
      } else {
        setTimeout(erase, 1500);
      }
    }
    function erase() {
      if (charIndex > 0) {
        typingAnimationElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
      } else {
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(type, 500);
      }
    }
    setTimeout(type, 500);
  }

  
  // --- "More Details" Button in Projects ---
  document.querySelectorAll('.more-details-btn').forEach(button => {
    button.addEventListener('click', () => {
      const detailsId = button.getAttribute('aria-controls');
      const detailsElement = document.getElementById(detailsId);
      const projectCard = button.closest('.project-card');
      const projectInfo = projectCard.querySelector('.project-info');

      if (detailsElement) {
        const isHidden = detailsElement.classList.contains('hidden');

        if (isHidden) {
          detailsElement.classList.remove('hidden');
          detailsElement.classList.add('details-visible');
          if (projectInfo) {
            projectInfo.classList.add('project-info-hidden');
          }
          button.textContent = 'Show Less';
        } else {
          detailsElement.classList.add('hidden');
          detailsElement.classList.remove('details-visible');
          if (projectInfo) {
            projectInfo.classList.remove('project-info-hidden');
          }
          button.textContent = 'More Details';
        }
      }
    });
  });

  // --- "View More Projects" Toggle ---
  const viewMoreProjectsBtn = document.querySelector(".view-more-btn");
  const additionalProjectsContainer = document.getElementById('additional-projects');
  if (viewMoreProjectsBtn && additionalProjectsContainer) {
    const isHidden = additionalProjectsContainer.classList.contains('hidden');
    viewMoreProjectsBtn.textContent = isHidden ? 'View More Projects' : 'Show Less';

    viewMoreProjectsBtn.addEventListener("click", () => {
      additionalProjectsContainer.classList.toggle('hidden');
      viewMoreProjectsBtn.textContent = additionalProjectsContainer.classList.contains('hidden') ? 'View More Projects' : 'Show Less';
    });
  }

  // --- Contact Form (EmailJS) ---
  const contactForm = document.getElementById('contact-form');
  const feedbackMessage = document.getElementById('contact-feedback');
  if (contactForm && feedbackMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="user_name"]');
      const subject = contactForm.querySelector('[name="subject"]');
      const emailEl = contactForm.querySelector('[name="user_email"]');
      const message = contactForm.querySelector('[name="message"]');

      const nameVal = name ? name.value.trim() : "";
      const subjectVal = subject ? subject.value.trim() : "";
      const emailVal = emailEl ? emailEl.value.trim() : "";
      const messageVal = message ? message.value.trim() : "";
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal);

      if (!nameVal || !emailOk || !subjectVal || !messageVal) {
        feedbackMessage.textContent = "Please fill all fields correctly.";
        feedbackMessage.style.color = "red";
        feedbackMessage.style.display = 'block';
        setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
        return;
      }

      if (typeof emailjs !== 'undefined') {
        (function(){
          const btn = contactForm.querySelector('.submit-btn');
          const prevText = btn ? btn.textContent : null;
          if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
          return emailjs.sendForm('service_fcwnhwo', 'template_tqz2zlq', contactForm)
            .then(() => {
              feedbackMessage.textContent = "Message sent — thank you!";
              feedbackMessage.style.color = "var(--success-feedback-color)";
              feedbackMessage.style.display = 'block';
              contactForm.reset();
              setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
            })
            .catch((error) => {
              console.error('EmailJS Error:', error);
              feedbackMessage.textContent = "Failed to send message. Please try again.";
              feedbackMessage.style.color = 'red';
              feedbackMessage.style.display = 'block';
              setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
            })
            .finally(() => {
              if (btn) { btn.disabled = false; btn.textContent = prevText || 'Send Message'; }
            });
        })();
      } else {
        console.error("EmailJS library not found.");
        feedbackMessage.textContent = "Email service is currently unavailable.";
        feedbackMessage.style.color = "red";
        feedbackMessage.style.display = 'block';
        setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
      }
    });
  }

  // Slideshow
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach(slideshow => {
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll('.slide');
    const prevBtn = slideshow.querySelector('.prev');
    const nextBtn = slideshow.querySelector('.next');

    function showSlide(index) {
      // Handle wrapping around
      if (index >= slides.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex = index;
      }

      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('active');
      });

      // Show the correct slide
      if (slides[slideIndex]) {
        slides[slideIndex].classList.add('active');
      }
    }

    // Event listeners for next/prev buttons
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        showSlide(slideIndex - 1);
      });

      nextBtn.addEventListener('click', () => {
        showSlide(slideIndex + 1);
      });
    }

    // Show the first slide initially
    showSlide(slideIndex);
  });
});

// Hook hamburger icon after DOM load safety
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenuIcon = document.querySelector('.hamburger-icon');
    if (hamburgerMenuIcon) {
      hamburgerMenuIcon.addEventListener('click', toggleMenu);
    }
});

// --- Navbar Scroll Effect ---
document.addEventListener('DOMContentLoaded', () => {
  const desktopNav = document.getElementById('desktop-nav');
  const hamburgerNav = document.getElementById('hamburger-nav');

  const handleScroll = () => {
    const isScrolled = window.scrollY > 50;
    if (desktopNav) {
      desktopNav.classList.toggle('nav-scrolled', isScrolled);
    }
    if (hamburgerNav) {
      hamburgerNav.classList.toggle('nav-scrolled', isScrolled);
    }
  };

  window.addEventListener('scroll', handleScroll);
});


