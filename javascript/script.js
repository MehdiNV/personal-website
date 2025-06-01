import { client } from './sanityClient.js'

const container = document.getElementById('masonry');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

let page = 0;
const pageSize = 10;
let loading = false;

// For virtualized offloading
const maxDOMImages = 20;

function loadPhotos() {
  if (loading) return;
  loading = true;
  loader.style.display = 'block'; // Showcase the loading indicator...

  const start = page * pageSize;
  const end = start + pageSize;

  client
    .fetch(`*[_type == "photo"] | order(_createdAt desc) [${start}...${end}] {
      title,
      "url": image.asset->url
    }`)
    .then(photos => {
      photos.forEach(photo => {
        const fig = document.createElement('figure');
        fig.className = 'gallery-item';
        fig.innerHTML = `
          <img src="${photo.url}" alt="${photo.title}" loading="lazy">
          <figcaption>${photo.title}</figcaption>
        `;
        const img = fig.querySelector('img');
        img.addEventListener('click', () => {
          modal.classList.remove('hidden');
          modalImg.src = photo.url;
          modalImg.alt = photo.title;
        });
        container.appendChild(fig);
      });

      // Virtualized offloading
      const allItems = container.querySelectorAll('.gallery-item');
      if (allItems.length > maxDOMImages) {
        for (let i = 0; i < allItems.length - maxDOMImages; i++) {
          container.removeChild(allItems[i]);
        }
      }

      page++;
      loading = false;
      loader.style.display = 'none'; // Hide the spinner from the user
    })
    .catch(err => {
      console.error('Failed to load photos:', err);
      loading = false;
      loader.style.display = 'none'; // Still hide the spinner even w/ errors
    });
}


// Modal close
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modalImg.src = '';
    modalImg.alt = '';
  }
})

// Scroll trigger via IntersectionObserver
const sentinel = document.createElement('div');
sentinel.id = 'scroll-sentinel';
container.after(sentinel);

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadPhotos();
  }
}, {
  rootMargin: '200px'
})

observer.observe(sentinel);

// Load initial batch
loadPhotos();
