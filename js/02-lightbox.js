import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = onCreateGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function onCreateGalleryItems(images) {
  console.log()
    return images
      .map(({ preview, original, description }) => {
        return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;     
      })
      .join('');
  
};


var lightbox = new SimpleLightbox('.gallery a');

galleryContainer.addEventListener('click', onClickHandler);

function onClickHandler(e) {
  e.preventDefault();
  
// lightbox.options.captionData = `${e.target.getAttribute('alt')}`;
//  console.log(lightbox.options.captionData);
     
  lightbox.options.captionSelector = `${e.target.getAttribute('alt')}`;
  console.log(lightbox.options.captionSelector);
  
  lightbox.options.captionDelay = 250;
  lightbox.options.closeText = 'false';
};
