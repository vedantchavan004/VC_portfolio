// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle Functionality ---
  const desktopToggle = document.getElementById('theme-toggle-desktop');
  const mobileToggle = document.getElementById('theme-toggle-mobile');
  const desktopIcon = document.getElementById('theme-icon-desktop'); // Optional: for icon text ☀️/🌙
  const mobileIcon = document.getElementById('theme-icon-mobile');   // Optional: for icon text ☀️/🌙

  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = localStorage.getItem('theme');

  // Determine initial theme: 1. localStorage, 2. System Preference, 3. Default to light
  if (!currentTheme) {
    if (userPrefersDark) {
      currentTheme = 'dark';
    } else {
      currentTheme = 'light';
    }
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const isDark = theme === 'dark';

    if (desktopToggle) desktopToggle.checked = isDark;
    if (mobileToggle) mobileToggle.checked = isDark;

    const iconChar = isDark ? '🌙' : '☀️';
    if (desktopIcon) desktopIcon.textContent = iconChar;
    if (mobileIcon) mobileIcon.textContent = iconChar;
  }

  applyTheme(currentTheme); // Apply the initial theme

  function handleToggleChange(event) {
    const newTheme = event.target.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    // Optional: Set a flag indicating user has manually changed the theme
    localStorage.setItem('theme-manual-override', 'true');
  }

  if (desktopToggle) {
    desktopToggle.addEventListener('change', handleToggleChange);
  }
  if (mobileToggle) {
    mobileToggle.addEventListener('change', handleToggleChange);
  }

  // Listen for changes in system preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    // Only update if the user hasn't manually overridden the theme
    if (!localStorage.getItem('theme-manual-override')) {
      const newSystemTheme = e.matches ? 'dark' : 'light';
      applyTheme(newSystemTheme);
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
        setTimeout(type, 150); // Typing speed
      } else {
        setTimeout(erase, 1500); // Pause before erasing
      }
    }

    function erase() {
      if (charIndex > 0) {
        typingAnimationElement.textContent = typingTexts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100); // Erasing speed
      } else {
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(type, 500); // Pause before typing next text
      }
    }
    setTimeout(type, 500); // Initial start
  }


  // --- Skills Accordion ---
  const skillCards = document.querySelectorAll('#skills .skill-card');
  skillCards.forEach(card => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');
    
    if (header && content) {
      header.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        
        // Close all other cards
        skillCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('expanded')) {
            otherCard.classList.remove('expanded');
            otherCard.querySelector('.card-content').style.maxHeight = null;
          }
        });

        // Toggle current card
        if (isExpanded) {
          card.classList.remove('expanded');
          content.style.maxHeight = null;
        } else {
          card.classList.add('expanded');
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

  // --- Project "More Details" Toggle ---
  const detailButtons = document.querySelectorAll(".project-btn.more-details-btn"); // Make selector more specific
  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectCard = this.closest(".project-card");
      if (!projectCard) return;
      const details = projectCard.querySelector(".project-details");
      if (!details) return;

      const isCurrentlyHidden = details.style.display === "none" || details.style.display === "";

      // Close all other project details first
      document.querySelectorAll(".project-details").forEach((detailEl) => {
        if (detailEl !== details) {
          detailEl.style.display = "none";
          // Reset text of other buttons
          const otherButton = detailEl.closest('.project-card')?.querySelector('.project-btn.more-details-btn');
          if (otherButton) otherButton.textContent = "More Details";
        }
      });
      
      // Toggle the clicked project's details
      if (isCurrentlyHidden) {
        details.style.display = "block";
        this.textContent = "Less Details";
      } else {
        details.style.display = "none";
        this.textContent = "More Details";
      }
    });
  });

  // --- "View More Projects" Toggle ---
  const viewMoreProjectsBtn = document.querySelector(".view-more-btn");
  const additionalProjectsContainer = document.getElementById('additional-projects');

  if (viewMoreProjectsBtn && additionalProjectsContainer) {
    // Initially hide if it's meant to be hidden by default via CSS
    if(additionalProjectsContainer.classList.contains('hidden')) {
        viewMoreProjectsBtn.textContent = 'View More Projects';
    } else {
        viewMoreProjectsBtn.textContent = 'Show Less';
    }

    viewMoreProjectsBtn.addEventListener("click", () => {
      additionalProjectsContainer.classList.toggle('hidden');
      if (additionalProjectsContainer.classList.contains('hidden')) {
        viewMoreProjectsBtn.textContent = 'View More Projects';
      } else {
        viewMoreProjectsBtn.textContent = 'Show Less';
      }
    });
  }

  // --- Contact Form with EmailJS ---
  const contactForm = document.getElementById('contact-form');
  const feedbackMessage = document.getElementById('contact-feedback'); // Corrected variable name

  if (contactForm && feedbackMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); 
      
      // Simple client-side validation example (can be expanded)
      const name = contactForm.querySelector('[name="name"]');
      const email = contactForm.querySelector('[name="email"]');
      const message = contactForm.querySelector('[name="message"]');
      let isValid = true;

      if (!name.value.trim()) {
        // alert("Please enter your name."); // Or display error near field
        isValid = false;
      }
      if (!email.value.trim() || !email.value.includes('@')) {
        // alert("Please enter a valid email.");
        isValid = false;
      }
      if (!message.value.trim()) {
        // alert("Please enter your message.");
        isValid = false;
      }

      if (!isValid) {
        feedbackMessage.textContent = "Please fill all fields correctly.";
        feedbackMessage.style.color = "red"; // Or use a CSS class for error
        feedbackMessage.style.display = 'block';
        setTimeout(() => {
            feedbackMessage.style.display = 'none';
            feedbackMessage.style.color = "var(--success-feedback-color)"; // Reset color
            feedbackMessage.textContent = "Message sent successfully!"; // Reset text
        }, 3000);
        return;
      }

      // Assuming EmailJS is loaded globally
      if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_fcwnhwo', 'template_tqz2zlq', contactForm)
          .then((result) => {
            feedbackMessage.textContent = "Message sent successfully!";
            feedbackMessage.style.color = "var(--success-feedback-color)";
            feedbackMessage.style.display = 'block';
            contactForm.reset();
            setTimeout(() => {
              feedbackMessage.style.display = 'none';
            }, 3000);
          }, (error) => {
            feedbackMessage.textContent = "Failed to send message. Please try again.";
            feedbackMessage.style.color = "red";
            feedbackMessage.style.display = 'block';
            console.error("EmailJS Error:", error);
             setTimeout(() => {
              feedbackMessage.style.display = 'none';
            }, 3000);
          });
      } else {
        console.error("EmailJS library not found.");
        feedbackMessage.textContent = "Email service is currently unavailable.";
        feedbackMessage.style.color = "red";
        feedbackMessage.style.display = 'block';
         setTimeout(() => {
            feedbackMessage.style.display = 'none';
        }, 3000);
      }
    });
  }
});

// Expose toggleMenu to global scope if it's called via onclick="toggleMenu()" in HTML
// Otherwise, it's better to attach event listener in JS
const hamburgerIcon = document.querySelector('.hamburger-icon');
if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', toggleMenu);
}
