document.addEventListener('DOMContentLoaded', function() {
   const navToggle = document.querySelector('.nav-toggle');
   const navUl = document.querySelector('nav ul');

   navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navUl.classList.toggle('active');
   });

   // Optional: Close menu when clicking a link (for better UX)
   const navLinks = document.querySelectorAll('nav li a');
   navLinks.forEach(link => {
      link.addEventListener('click', function() {
         navToggle.classList.remove('active');
         navUl.classList.remove('active');
      });
   });

   // Optional: Close menu on window resize to desktop
   window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
         navToggle.classList.remove('active');
         navUl.classList.remove('active');
      }
   });
});