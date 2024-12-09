
import "./style.css"
import { section1, section2, section3, section4,
    section5, section6, linkedInBannerSection,
    onPageLoadScreen,
 } from './landing-page.js';

 document.body.appendChild(onPageLoadScreen());
  document.body.appendChild(section1());
  document.body.appendChild(section6());
  document.body.appendChild(linkedInBannerSection());
  // document.body.appendChild(section2());
  // document.body.appendChild(section3());
  // document.body.appendChild(section4());
  // document.body.appendChild(section5());
  
    

  document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById("loading-screen");
    // const mainContent = document.getElementById("main-content");

    // Show the loading screen for 3 seconds
    setTimeout(function() {
        loadingScreen.style.display = "none"; // Hide the loading screen
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";
        // mainContent.style.display = "block"; // Show the main content

        // Set focus on the first container element
        const firstContainer = document.querySelector("#parent-container-1");
        if (firstContainer) {
            firstContainer.setAttribute("tabindex", "-1"); // Make it focusable
            firstContainer.focus();
        }
    }, 2000); // 3000 milliseconds = 3 seconds
});



document.querySelectorAll('.accordion-questions').forEach(question => {
    question.addEventListener('click', () => {
      const firstChild = question.firstElementChild;
        const answer = question.nextElementSibling;
        if (answer.style.display === 'none') {
          firstChild.lastChild.innerHTML = "-";
          question.setAttribute('aria-expanded', 'true');
            answer.style.display = 'flex';
        }else {
          firstChild.lastChild.innerHTML = "+";
            question.setAttribute('aria-expanded', 'false');
        answer.style.display = 'none';
        }
    });
}
)
const caseStudiesButton = document.getElementById('case-studies');
caseStudiesButton.addEventListener('click', () => {
  const accordionContainer = document.getElementById('accordion-container-1');  
  const firstChild = caseStudiesButton.firstElementChild.firstElementChild;
  if(accordionContainer.style.display === 'none') {
    accordionContainer.style.display = 'flex';
    firstChild.innerHTML = "Case Studies<span>-</span>";

  } else {
    accordionContainer.style.display = 'none';
    firstChild.innerHTML = "Case Studies<span>+</span>";
  
}
})

const expandables = document.querySelectorAll('.expandables');

expandables.forEach(expandable => {
  expandable.addEventListener('click', () => {
    const list = expandable.nextElementSibling;
    list.setAttribute('aria-hidden', 'false');
    list.classList.toggle('hidden');
    expandable.textContent = list.classList.contains('hidden') ? 'Show Details' : 'Hide Details';
    list.classList.contains('hidden') ? list.setAttribute('aria-hidden', 'true') : list.setAttribute('aria-hidden', 'false');
    

  });
});
// parallax effect
window.addEventListener('scroll', function() {
  const parallax = document.querySelector('.bg-containers');
  let scrollPosition = window.pageYOffset;
  parallax.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
});



// Intersection Observer API for animating elements on scroll section 3
document.addEventListener("DOMContentLoaded", function() {
  const cardItems = document.querySelectorAll(".card-items");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateX(0)';
              entry.target.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
              observer.unobserve(entry.target); // Stop observing once the animation is applied
          }
      });
  }, {
      threshold: 0.7 // Trigger when 20% of the element is visible
  });

  cardItems.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateX(-100px)';
    observer.observe(card);
  });
});



document.addEventListener("DOMContentLoaded", function() {
  const cardItems = document.querySelectorAll(".section-4-card-containers");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateX(0';
              entry.target.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
              observer.unobserve(entry.target); // Stop observing once the animation is applied
          }
      });
  }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
  });

  cardItems.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateX(-100px)';
    observer.observe(card);
  });
})


