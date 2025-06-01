import { client } from './sanityClient.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('masonry')
  const modal = document.getElementById('modal')
  const modalImg = document.getElementById('modal-img')

  client.fetch(`*[_type == "photo"]{
    title,
    "url": image.asset->url
  }`).then(photos => {
    // Shuffle the photo array before rendering
    const shuffled = photos.sort(() => Math.random() - 0.5)

    shuffled.forEach(photo => {
      const fig = document.createElement('figure')
      fig.className = 'gallery-item'
      fig.innerHTML = `
        <img src="${photo.url}" alt="${photo.title}" loading="lazy">
        <figcaption>${photo.title}</figcaption>
      `
      container.appendChild(fig)

      // Add modal listener to each image
      const img = fig.querySelector('img')
      img.addEventListener('click', () => {
        modal.classList.remove('hidden')
        modalImg.src = photo.url
        modalImg.alt = photo.title
      })
    })
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden')
      modalImg.src = ''
      modalImg.alt = ''
    }
  })
})



// Navigation bar-specific logic - to display or hide it dynamically on scrolls
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
// -----------------------------------------------------------------------------
