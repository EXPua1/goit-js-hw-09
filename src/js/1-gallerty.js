import { images } from "./gallery-item.js";
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');
const galleryItems = images.map(({ preview, original, description }) => `
    <li class="gallery-item">
        <a class="gallery-link" href="${original}">
            <img 
                class="gallery-image" 
                src="${preview}" 
                alt="${description}" 
            />
        </a>
    </li>
`).join('');
console.log(images)
gallery.insertAdjacentHTML("beforeend", galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});


