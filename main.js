document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('header');
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const scrollToTopButton = document.getElementById('scroll-to-top');

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

    // Add new logic to add class to the current section
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('section-active'); // Remove from all sections first
      if (section.getAttribute('id') === currentSection) {
        section.classList.add('section-active'); // Add to the current section
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

  // Add click event listeners to scroll to sections
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent default link behavior
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      // Update active link after scrolling
      updateActiveLink();
    });
  });

  // Toggle burger menu
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
  });

  // Close burger menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      burger.classList.remove('toggle');
    });
  });

  // Scroll to top button functionality
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    scrollToTopButton.classList.add('hide');
  });

  // Intersection Observer for About section animations
  const aboutSection = document.getElementById('about');
  const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const aboutText = aboutSection.querySelector('.about-description');
        const aboutImage = aboutSection.querySelector('.about-image img');
        aboutText.classList.add('fadeInTwo');
        aboutImage.classList.add('fadeInScaleTwo');
        aboutObserver.unobserve(aboutSection); // Unobserve after animation
      }
    });
  }, { threshold: 0.5 });

  aboutObserver.observe(aboutSection);
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
  }, 2000); // Adjust this timeout as needed
});
