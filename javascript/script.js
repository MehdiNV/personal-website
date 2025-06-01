import { client } from './sanityClient.js'

const container = document.getElementById('masonry');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const loader = document.getElementById('loader');

let page = 0;
const pageSize = 10;
let loading = false;
const maxDOMImages = 20;
let hasLoadedOnce = false;

const msnry = new Masonry(container, {
  itemSelector: '.gallery-item',
  columnWidth: '.grid-sizer',
  gutter: 16,
  percentPosition: true,
  transitionDuration: '0.3s'
});
console.log('Masonry initialized:', msnry);

function calculateColumnWidth() {
  const containerWidth = container.clientWidth;
  const desiredColumnWidth = 400; // You can change this
  const gutter = 16;

  const columns = Math.floor(containerWidth / (desiredColumnWidth + gutter));
  const columnWidthPercent = 100 / columns;

  const itemWidth = `calc(${columnWidthPercent}% - ${(gutter * (columns - 1)) / columns}px)`;

  const items = container.querySelectorAll('.gallery-item, .grid-sizer');
  items.forEach(el => {
    el.style.width = itemWidth;
  });

  msnry.layout();
}

function loadPhotos() {
  if (loading) return;
  loading = true;
  loader.style.display = 'block';

  const start = page * pageSize;
  const end = start + pageSize;

  const query = client.fetch(`*[_type == "photo"] | order(_createdAt desc) [${start}...${end}] {
    title,
    "url": image.asset->url
  }`);

  const delay = hasLoadedOnce
    ? new Promise(resolve => setTimeout(resolve, 2000))
    : Promise.resolve();

  Promise.all([query, delay])
    .then(([photos]) => {
      console.log('Photos are loading in...', photos);
      const newItems = [];

      photos.forEach(photo => {
        const fig = document.createElement('figure');
        fig.className = 'gallery-item';
        fig.innerHTML = `
          <img src="${photo.url}" alt="${photo.title}" loading="lazy">
          <figcaption>${photo.title}</figcaption>
        `;

        const img = fig.querySelector('img');

        // Modal event
        img.addEventListener('click', () => {
          modal.classList.remove('hidden');
          modalImg.src = photo.url;
          modalImg.alt = photo.title;
        });

        container.appendChild(fig);
        newItems.push(fig);
        console.log('Appended to DOM: ', fig);
      });

      // Wait for all new images to load before triggering Masonry layout
      imagesLoaded(container, () => {
        calculateColumnWidth();
        msnry.appended(newItems);
        msnry.layout();
      });

      page++;
      hasLoadedOnce = true;
      loading = false;
      loader.style.display = 'none';
    })
    .catch(err => {
      console.error('Failed to load photos:', err);
      loading = false;
      loader.style.display = 'none';
    });
}

// Modal close
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modalImg.src = '';
    modalImg.alt = '';
  }
});

// Scroll trigger
const sentinel = document.createElement('div');
sentinel.id = 'scroll-sentinel';
container.after(sentinel);

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    loadPhotos();
  }
}, {
  rootMargin: '200px'
});

observer.observe(sentinel);

// Calculate sizing
window.addEventListener('resize', () => {
  calculateColumnWidth();
});


// Load initial batch
loadPhotos();
