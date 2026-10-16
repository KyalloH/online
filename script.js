
"use strict";

// 1. Show a welcome message in the browser console.
console.log("Welcome to KyalloH's developer portfolio!");

// 2. Highlight the navigation link for the section being viewed.
const sections = document.querySelectorAll("main section");
const navLinks = document.querySelectorAll("nav a[href^='#']");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { threshold: 0.35 }
);

sections.forEach((section) => observer.observe(section));

// 3. Update the footer year automatically.
const footer = document.querySelector("footer p");

if (footer) {
  footer.textContent =
    `© ${new Date().getFullYear()} KyalloH. Built while learning.`;
}
