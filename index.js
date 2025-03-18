document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".list-items");
    const navItems = document.querySelectorAll(".list-items li a");

    // Toggle menu when clicking hamburger
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Hide menu when clicking a navbar link
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});


const roles = ["Full Stack Developer", "Data Scientist", "Cloud engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 80; // Typing speed (adjust if needed)
let deletingSpeed = 60; // Deleting speed

const changingText = document.getElementById("changing-text");

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    // Typing letters one by one
    changingText.textContent = currentRole.slice(0, charIndex++);
  } else {
    // Deleting letters one by one
    changingText.textContent = currentRole.slice(0, charIndex--);
  }

  let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

  // When the word is fully typed, wait for 0.5s before deleting
  if (!isDeleting && charIndex === currentRole.length + 1) {
    isDeleting = true;
    nextSpeed = 500; // Pause before deleting
  }

  // When the word is fully deleted, switch to the next word
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  setTimeout(typeEffect, nextSpeed);
}

// Start the typing effect
typeEffect();

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(link => {
        link.classList.remove('active');
      });

      let activeLink = document.querySelector('nav a[href*="' + id + '"]');
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};
