import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = onCreateGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function onCreateGalleryItems(images) {   
    return images
      .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
     />
    </a>
    </div>`;     
      })
      .join('');
};  

galleryContainer.addEventListener('click', onClickHandler);

function onClickHandler(e) { 
  e.preventDefault();
   
  if (e.target.nodeName === 'IMG') {        
    basicLightbox.create(`
        <img class=modal width="1280" src=${e.target.dataset.source}>     
      `).show();
  };  
 
};



galleryContainer.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(e) {
  console.log(e.code)
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = e.code === ESC_KEY_CODE;

  if (isEscKey) {
    const closeBasicLightbox = document.querySelector('.modal');
    console.log(closeBasicLightbox);
    closeBasicLightbox.classList.remove('.modal');   
  };
};