document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const scrollToTopButton = document.getElementById('scroll-to-top');
  const educationItems = document.querySelectorAll('.education-item');
  const projectCards = document.querySelectorAll('.project-card');

  // Set initial active link to Home
  const homeLink = document.querySelector('a[href="#home"]');
  homeLink.classList.add('active');

  function updateActiveLink() {
    let currentSection = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - header.offsetHeight;
      const sectionBottom = sectionTop + section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionBottom) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });

    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('section-active'); 
      if (section.getAttribute('id') === currentSection) {
        section.classList.add('section-active');
      }
    });
  }

  function handleScrollToTopButton() {
    if (window.scrollY > 300) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
      scrollToTopButton.classList.add('hide');
    }
  }


  
  window.addEventListener('scroll', () => {
    updateActiveLink();
    handleScrollToTopButton();
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      const headerHeight = header.offsetHeight;
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: 'smooth'
      });
      updateActiveLink();
    });
  });


  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      burger.classList.remove('toggle');
    });
  });

  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollToTopButton.classList.add('hide');
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated-in-education'); // For education items
        observer.unobserve(entry.target);
      }
    });
  });
  
  educationItems.forEach(item => observer.observe(item));
  projectCards.forEach(card => observer.observe(card));



  const aboutSection = document.getElementById('about');
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const aboutText = aboutSection.querySelector('.about-description');
        const aboutImage = aboutSection.querySelector('.about-image img');
        aboutText.classList.add('fadeInTwo');
        aboutImage.classList.add('fadeInScaleTwo');
        aboutObserver.unobserve(aboutSection); 
      }
    });
  }, { threshold: 0.5 });

  aboutObserver.observe(aboutSection);

  const skillsSection = document.getElementById('skills');
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.skill-item, .tool-item').forEach(item => {
          item.classList.add('animate-in');
        });
        skillsObserver.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.5 });

  skillsObserver.observe(skillsSection);

  const educationSection = document.getElementById('education');
  const educationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const educationSteps = educationSection.querySelectorAll('.education-step');
        educationSteps.forEach((step, index) => {
          setTimeout(() => {
            step.classList.add('animate-in');
          }, index * 200); 
        });
        educationObserver.unobserve(educationSection); 
      }
    });
  }, { threshold: 0.5 });

  educationObserver.observe(educationSection);
});

window.addEventListener('load', () => {
  const loadingScreen = document.getElementById('loading-screen');
  const mainContent = document.getElementById('main-content');
  setTimeout(() => {
    loadingScreen.style.display = 'none';
    mainContent.style.display = 'flex';
  }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("loader").classList.add("hidden");
    document.getElementById("content").classList.remove("hidden");

    document.getElementById("profile-image").classList.add("animate-image");
    document.getElementById("name").classList.add("animate-text");
    document.querySelector(".passionate").classList.add("animate-text");
    document.getElementById("btn-right").classList.add("animate-text");
    document.getElementById("btn-left").classList.add("animate-text");
  }, 2000); 
});

const showMoreBtn = document.getElementById('show-more-btn');
let isExpanded = false;
const hiddenProjects = document.querySelectorAll('.project-card.hidden');

showMoreBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;
  hiddenProjects.forEach(project => {
    project.style.display = isExpanded ? 'block' : 'none';
  });
  showMoreBtn.textContent = isExpanded ? 'show less' : 'show more';
});
