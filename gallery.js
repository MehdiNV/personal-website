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
