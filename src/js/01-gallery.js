// Add imports above this line
import '../css/common.css';
import '../css/01-gallery.css';
import { galleryItems } from './gallery-items';  
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery")

const galleryCurrent = galleryItems.map(({preview, description, original}) => `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
  `).join('');

galleryList.insertAdjacentHTML('afterbegin', galleryCurrent);
  
//Використання simplelightbox

const lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});

