import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

function createImageGallery(galleryItems) {
    const galleryUl = document.querySelector('.gallery');

    const markup = galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
</li>`
    }).join('');

    galleryUl.innerHTML = markup;
}

createImageGallery(galleryItems);

var lightbox = new SimpleLightbox('.gallery > li > a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});
