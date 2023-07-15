/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');
const navbarMenu = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//checking which section is active in the viewport/closest to the top 
const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  };

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavMenu = () => {
    const fragment = document.createDocumentFragment();
  
    sections.forEach((section) => {
      const navItem = document.createElement('li');
      const navLink = document.createElement('a');
      const sectionId = section.getAttribute('id');
      const sectionName = section.getAttribute('data-nav');
  
      navLink.textContent = sectionName;
      navLink.setAttribute('href', `#${sectionId}`);
      navLink.classList.add('menu__link');
  
      navItem.appendChild(navLink);
      fragment.appendChild(navItem);
    });
  
    navbarMenu.appendChild(fragment);
  };

// Add class 'active' to section when near top of viewport
const setActiveSection = () => {
    sections.forEach((section) => {
      if (isElementInViewport(section)) {
        section.classList.add('your-active-class');
      } else {
        section.classList.remove('your-active-class');
      }
    });
  };

// Scroll to anchor ID using scrollTO event
const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
  
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth',
    });
  };

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNavMenu);

// Scroll to section on link click
navbarMenu.addEventListener('click', scrollToSection);

// Set sections as active
window.addEventListener('scroll', setActiveSection);

// Hide navigation bar when not scrolling
let scrolling = false;
let scrollTimeout;

window.addEventListener('scroll', () => {
  scrolling = true;
  document.querySelector('.page__header').classList.remove('hidden');

  clearTimeout(scrollTimeout);

  scrollTimeout = setTimeout(() => {
    scrolling = false;
    setTimeout(() => {
      if (!scrolling) {
        document.querySelector('.page__header').classList.add('hidden');
      }
    }, 3000);
  }, 3000);
});

// Show scroll to top button when below the fold
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });
  
// Scroll to top on button click
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
});