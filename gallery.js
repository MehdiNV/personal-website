document.addEventListener('DOMContentLoaded', () => {
  // Modal logic
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      modal.classList.remove('hidden');
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modalImg.src = '';
      modalImg.alt = '';
    }
  });

  // ✅ Randomize masonry image order
  const container = document.getElementById('masonry');
  if (container) {
    const items = Array.from(container.children);
    const shuffled = items.sort(() => Math.random() - 0.5);
    container.innerHTML = '';
    shuffled.forEach(el => container.appendChild(el));
  }
});

let lastScrollY = window.scrollY;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    // scrolling down
    header.classList.add('hidden');
  } else {
    // scrolling up
    header.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
