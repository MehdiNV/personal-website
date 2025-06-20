import { client } from './sanityClient.js'

// Utility necessary for logging and debugging...
function getTimestamp() {
  const now = new Date();
  const pad = (n, len = 2) => n.toString().padStart(len, '0');

  const day = pad(now.getDate());
  const month = pad(now.getMonth() + 1);
  const year = now.getFullYear().toString().slice(-2);
  const hours = pad(now.getHours());
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  const millis = pad(now.getMilliseconds(), 3);

  return `[${day}/${month}/${year} ${hours}:${minutes}:${seconds}.${millis}]:`;
}

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

function calculateColumnWidth() {
  console.log(`${getTimestamp()} Calculating column width to determine best tiling arrangement...`);

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
      console.log(`${getTimestamp()} photos are loading in...`, photos);
      const newItems = [];

      photos.forEach(photo => {
        const fig = document.createElement('figure');
        const delay = newItems.length * 300; // 300ms per tile
        fig.className = 'gallery-item loading';
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
          console.log(`${getTimestamp()} Calculating column widths now that images have loaded in...`);
          calculateColumnWidth();
          console.log(`${getTimestamp()} Finished processing column widths`);

          msnry.appended(newItems);
          msnry.layout();

          newItems.forEach(item => {
            item.classList.remove('loading');
          });
          
          msnry.layout();

          // Fallback second layout to catch any stragglers
          setTimeout(() => {
            msnry.layout();
          }, 50);
        });
      });

      page++;
      hasLoadedOnce = true;
      loading = false;
      loader.style.display = 'none';
      msnry.layout();
    })
    .catch(err => {
      console.error(`${getTimestamp()} Failed to load photos: `, err);
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
    modal.style.top = '0'; // Reset location of overlay
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
  console.log(`${getTimestamp()} Window was resized, re-calculating column width...`);
  calculateColumnWidth();
  console.log(`${getTimestamp()} Finishing calculating column widths`);
});

// Load the intiial batch
console.log(`${getTimestamp()} Initialising masonry layout...`);
loadPhotos();
