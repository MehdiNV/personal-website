// script.js
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  track.innerHTML += track.innerHTML; // clone all slides
});
