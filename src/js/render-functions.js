// render-functions.js

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a');

export function clearGallery() {
    const galleryElement = document.querySelector('.gallery');
    galleryElement.innerHTML = '';
}

export function renderImages(images) {
    const galleryElement = document.querySelector('.gallery');
    const imageElements = images.map(image => {
        return `
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" />
            </a>
        `;
    }).join('');
    galleryElement.innerHTML = imageElements;
    gallery.refresh(); // Refresh SimpleLightbox gallery
}

export function showLoader() {
    document.querySelector('.loader').style.display = 'block';
}

export function hideLoader() {
    document.querySelector('.loader').style.display = 'none';
}
