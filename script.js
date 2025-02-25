// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Typing Animation (Profile Section)
document.addEventListener('DOMContentLoaded', () => {
  const typingAnimationElement = document.getElementById('typing-animation');
  const typingTexts = [
    'AI Engineer',
    'Computer Vision Engineer',
    'Machine Learning Engineer',
    'Deep Learning Engineer'
  ];
  function playTypingAnimation(text) {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        typingAnimationElement.textContent += text[i];
      }, i * 150);
    }
    setTimeout(() => {
      typingAnimationElement.textContent = '';
      playTypingAnimation(typingTexts[(typingTexts.indexOf(text) + 1) % typingTexts.length]);
    }, text.length * 150 + 1500);
  }
  playTypingAnimation(typingTexts[0]);
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('#skills .skill-card');
  cards.forEach(card => {
    const header = card.querySelector('.card-header');
    const content = card.querySelector('.card-content');
    
    header.addEventListener('click', () => {
      if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        content.style.maxHeight = null;
      } else {
        cards.forEach(otherCard => {
          if (otherCard !== card && otherCard.classList.contains('expanded')) {
            otherCard.classList.remove('expanded');
            otherCard.querySelector('.card-content').style.maxHeight = null;
          }
        });
        card.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});

function toggleMoreProjects() {
  const additionalProjects = document.getElementById('additional-projects');
  const viewMoreBtn = document.querySelector('.view-more-btn');

  if (additionalProjects.classList.contains('hidden')) {
    // Show more projects
    additionalProjects.classList.remove('hidden');
    viewMoreBtn.textContent = 'Show Less';
  } else {
    // Hide them again
    additionalProjects.classList.add('hidden');
    viewMoreBtn.textContent = 'View More Projects';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const feedback = document.getElementById('contact-feedback');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    // Send form using EmailJS
    emailjs.sendForm('service_fcwnhwo', 'template_tqz2zlq', contactForm)
      .then((result) => {
        feedback.style.display = 'block';
        // Hide feedback and reset form after 3 seconds
        setTimeout(() => {
          feedback.style.display = 'none';
          contactForm.reset();
        }, 3000);
      }, (error) => {
        alert("Failed to send message. Please try again later.");
      });
  });
});


