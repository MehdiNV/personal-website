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
  console.log("Calculating column width to determine best tiling arrangement...");

  const containerWidth = container.clientWidth;
  const desiredColumnWidth = 400; // Determinable amount for each column width
  const gutter = 16;

  const columns = Math.floor(containerWidth / (desiredColumnWidth + gutter));
  const columnWidthPercent = 100 / columns;

  const itemWidth = `calc(${columnWidthPercent}% - ${(gutter * (columns - 1)) / columns}px)`;

  const items = container.querySelectorAll('.gallery-item, .grid-sizer');
  items.forEach(el => {
    el.style.width = itemWidth;
  });
}

function loadPhotos() {
  if (loading) return;
  loading = true;
  loader.style.display = 'block';

  const start = page * pageSize;
  const end = start + pageSize;

  const query = client.fetch(`*[_type == "photo"] | order(sortOrder asc) [${start}...${end}] {
    title,
    "url": image.asset->url
  }`);

  const delay = hasLoadedOnce
    ? new Promise(resolve => setTimeout(resolve, 2000))
    : Promise.resolve();

  Promise.all([query, delay])
    .then(([photos]) => {
      console.log('New photos are loading in...', photos);
      const newItems = [];

      photos.forEach(photo => {
        const fig = document.createElement('figure');
        const delay = newItems.length * 300; // 300ms per tile
        fig.className = 'gallery-item';
        fig.style.setProperty('--fade-delay', `${delay}ms`);
        fig.innerHTML = `
          <img src="${photo.url}" alt="${photo.title}" loading="lazy">
          <figcaption>${photo.title}</figcaption>
        `;

        const img = fig.querySelector('img');

        // Modal event
        img.addEventListener('click', () => {
          const scrollTop = window.scrollY;
          modal.style.top = `${scrollTop}px`; // Position modal based on scroll

          modal.classList.remove('hidden');
          modalImg.src = photo.url;
          modalImg.alt = photo.title;
        });

        container.appendChild(fig);
        newItems.push(fig);
      });

      // Wait for all new images to load before triggering Masonry layout
      imagesLoaded(container, () => {
        requestAnimationFrame(() => {
          calculateColumnWidth();
          msnry.appended(newItems);
          msnry.layout();

          // Fallback second layout to catch any stragglers
          setTimeout(() => {
            msnry.layout();
          }, 100);
        });
      });

      page++;
      hasLoadedOnce = true;
      loading = false;
      loader.style.display = 'none';
      msnry.layout();
    })
    .catch(err => {
      console.error('Failed to load photos:', err);
      loading = false;
      loader.style.display = 'none';
    });
}

// Scroll-to-top button behavior
const scrollBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.classList.remove('hidden');
  } else {
    scrollBtn.classList.add('hidden');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Handle the Modal closing - make sure it dissapears if we click outside
modal.addEventListener('click', e => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modalImg.src = '';
    modalImg.alt = '';
    modal.style.top = '0'; // reset
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
  console.log("Window was resized, re-calculating column width...");

  calculateColumnWidth();
});

// Load initial batch
loadPhotos();
