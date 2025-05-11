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
  const desktopIcon = document.getElementById('theme-icon-desktop');
  const mobileIcon = document.getElementById('theme-icon-mobile');

  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let currentTheme = localStorage.getItem('theme');

  if (!currentTheme) {
    currentTheme = userPrefersDark ? 'dark' : 'light';
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

  applyTheme(currentTheme);

  function handleToggleChange(event) {
    const newTheme = event.target.checked ? 'dark' : 'light';
    applyTheme(newTheme);
    localStorage.setItem('theme-manual-override', 'true');
  }

  if (desktopToggle) {
    desktopToggle.addEventListener('change', handleToggleChange);
  }
  if (mobileToggle) {
    mobileToggle.addEventListener('change', handleToggleChange);
  }

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

  // --- Skills Accordion ---
  const skillCards = document.querySelectorAll('#skills .skill-card');
  skillCards.forEach(card => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');
    if (header && content) {
      header.addEventListener('click', () => {
        const isExpanded = card.classList.contains('expanded');
        skillCards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('expanded')) {
            otherCard.classList.remove('expanded');
            otherCard.querySelector('.card-content').style.maxHeight = null;
          }
        });
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

  // --- Project "More Details" Toggle (Updated with Animation & ARIA) ---
  const detailButtons = document.querySelectorAll(".project-btn.more-details-btn");

  detailButtons.forEach(button => {
    const projectCard = button.closest(".project-card");
    if (!projectCard) return;

    const detailsId = button.getAttribute('aria-controls');
    const details = detailsId ? document.getElementById(detailsId) : null;
    const projectInfo = projectCard.querySelector(".project-info");

    if (details && projectInfo) {
      const isInitiallyHidden = details.classList.contains('hidden') || !details.classList.contains('details-visible');
      button.setAttribute('aria-expanded', isInitiallyHidden ? 'false' : 'true');
      details.setAttribute('aria-hidden', isInitiallyHidden ? 'true' : 'false');

      if (!isInitiallyHidden) {
        details.style.maxHeight = details.scrollHeight + "px";
        projectInfo.classList.add('project-info-hidden'); // Hide info if details are initially visible
      } else {
        projectInfo.classList.remove('project-info-hidden');
      }
    }
  });

  detailButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const projectCard = this.closest(".project-card");
      if (!projectCard) return;

      const detailsId = this.getAttribute('aria-controls');
      if (!detailsId) {
        console.warn("More Details button is missing aria-controls attribute or its value is empty.");
        return;
      }
      const details = document.getElementById(detailsId);
      const projectInfo = projectCard.querySelector(".project-info");

      if (!details || !projectInfo) {
        console.warn(`Required elements (.project-details or .project-info) not found for card controlled by button for ID: ${detailsId}`);
        return;
      }

      const isCurrentlyVisible = details.classList.contains('details-visible');

      // Close all other open project details and restore their project-info
      document.querySelectorAll(".project-details.details-visible").forEach((detailEl) => {
        if (detailEl !== details) {
          const otherProjectCard = detailEl.closest('.project-card');
          if (otherProjectCard) {
            const otherProjectInfo = otherProjectCard.querySelector('.project-info');
            if (otherProjectInfo) {
              otherProjectInfo.classList.remove('project-info-hidden');
            }
            const otherButtonId = detailEl.id;
            const otherButton = document.querySelector(`.project-btn.more-details-btn[aria-controls="${otherButtonId}"]`);
            if (otherButton) {
              otherButton.textContent = "More Details";
              otherButton.setAttribute('aria-expanded', 'false');
            }
          }
          detailEl.classList.remove('details-visible');
          detailEl.style.maxHeight = null;
          detailEl.setAttribute('aria-hidden', 'true');
        }
      });

      // Toggle the clicked project's details and project-info
      if (isCurrentlyVisible) {
        details.classList.remove('details-visible');
        details.style.maxHeight = null;
        this.textContent = "More Details";
        this.setAttribute('aria-expanded', 'false');
        details.setAttribute('aria-hidden', 'true');
        projectInfo.classList.remove('project-info-hidden'); // Show project-info
      } else {
        details.classList.remove('hidden');
        details.classList.add('details-visible');
        details.style.maxHeight = details.scrollHeight + "px";
        this.textContent = "Less Details";
        this.setAttribute('aria-expanded', 'true');
        details.setAttribute('aria-hidden', 'false');
        projectInfo.classList.add('project-info-hidden'); // Hide project-info
      }
    });
  });

  // --- "View More Projects" Toggle ---
  const viewMoreProjectsBtn = document.querySelector(".view-more-btn");
  const additionalProjectsContainer = document.getElementById('additional-projects');
  if (viewMoreProjectsBtn && additionalProjectsContainer) {
    const isInitiallyHidden = additionalProjectsContainer.classList.contains('hidden');
    viewMoreProjectsBtn.textContent = isInitiallyHidden ? 'View More Projects' : 'Show Less';

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
  const feedbackMessage = document.getElementById('contact-feedback');
  if (contactForm && feedbackMessage) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]');
      const email = contactForm.querySelector('[name="email"]');
      const message = contactForm.querySelector('[name="message"]');
      let isValid = true;
      if (!name.value.trim() || !email.value.trim() || !email.value.includes('@') || !message.value.trim()) {
        isValid = false;
      }
      if (!isValid) {
        feedbackMessage.textContent = "Please fill all fields correctly.";
        feedbackMessage.style.color = "red";
        feedbackMessage.style.display = 'block';
        setTimeout(() => {
            feedbackMessage.style.display = 'none';
            feedbackMessage.textContent = "";
        }, 3000);
        return;
      }
      if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_fcwnhwo', 'template_tqz2zlq', contactForm)
          .then((result) => {
            feedbackMessage.textContent = "Message sent successfully!";
            feedbackMessage.style.color = "var(--success-feedback-color)";
            feedbackMessage.style.display = 'block';
            contactForm.reset();
            setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
          }, (error) => {
            feedbackMessage.textContent = "Failed to send message. Please try again.";
            feedbackMessage.style.color = "red";
            feedbackMessage.style.display = 'block';
            console.error("EmailJS Error:", error);
            setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
          });
      } else {
        console.error("EmailJS library not found.");
        feedbackMessage.textContent = "Email service is currently unavailable.";
        feedbackMessage.style.color = "red";
        feedbackMessage.style.display = 'block';
        setTimeout(() => { feedbackMessage.style.display = 'none'; feedbackMessage.textContent = ""; }, 3000);
      }
    });
  }
});

const hamburgerMenuIcon = document.querySelector('.hamburger-icon');
if (hamburgerMenuIcon) {
    hamburgerMenuIcon.addEventListener('click', toggleMenu);
}
