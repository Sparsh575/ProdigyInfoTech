// === NAVBAR TOGGLE ===
const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// === FORM VALIDATION ===
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector('textarea');

  if (!name.value || !email.value || !message.value) {
    alert('Please fill in all fields before submitting.');
    e.preventDefault(); // Stops form from submitting
  } else {
    alert('Message sent! We will get back to you soon.');
  }
});
