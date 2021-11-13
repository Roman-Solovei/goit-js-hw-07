import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

const galleryMarkup = createGalleryItems(galleryItems);
console.log(galleryMarkup);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

// galleryContainer.addEventListener('click', onPaletteContainerClick);


function createGalleryItems(images) {
    // console.log(images)
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
  
// import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js";


// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show();


// // const basicLightbox = require('./basicLightbox');
// console.dir(basicLightbox);
// const qwer = basicLightbox.open;
// console.log(qwer);


// const qqqq = document.querySelector('.gallery__item');



// function swww() {
//     basicLightbox.create(`
// 		<img width="1400" height="900" src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg">
// 	`).show()
// }
//     ;
// qqqq.addEventListener('click', swww());
// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `)

// instance.show()

// import * as basicLightbox from 'https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js';

// const basicLightbox = require('https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js');
// const instance = basicLightbox.create((images) => {
//     return images
//       .map(({ preview, original, description }) => {
//         return `
//     <div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//      />
//     </a>
//     </div>`;     
//       })
//       .join('');
// });

// instance.show()
// const instance = basicLightbox.create(
//     document.querySelector('.gallery__image')
// );
// console.log(basicLightbox);


// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg" width="800" height="600">
// `)

// instance.show();
// const galleryItem = document.body;
// console.log(galleryItem);


// // const instance =
// //     basicLightbox.create(`
// //     <div class="modal">
// //         <p>
// //             Your first lightbox with just a few lines of code.
// //             Yes, it's really that simple.
// //         </p>
// //     </div>
// // `);
//   const instance =
//     basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);
//     instance.show();
//     // console.log(instance);
// function rew() {
//     const er = instance;
//     console.log(er);
  
// };
// galleryItem.addEventListener('click', rew());
// instance.show();


// const content = document.createElement('div')

// const h1 = document.createElement('h1')
// const p = document.createElement('p')

// h1.textContent = 'Create element'
// p.textContent = 'Create elements dynamicly and use them in your lightbox.'

// content.appendChild(h1)
// content.appendChild(p)

// const instance = basicLightbox.create(content)

// document.querySelector('.create').onclick = instance.show