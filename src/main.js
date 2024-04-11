import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { clearGallery, renderImages, showLoader, hideLoader } from './js/render-functions';

import { fetchImages } from './js/pixabay-api';

const list = document.querySelector('.list');

const API_KEY = '43277181-ebb9172f58fa43bc64ca23581';
const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');
const submitButton = document.querySelector('.submit-button');

form.addEventListener('submit', handleSubmit);
    
function handleSubmit(event) {
    event.preventDefault();
    const searchQuery = searchInput.value.trim();
    if (!searchQuery) {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query',
        });
        return;
    }
    showLoader();
    clearGallery();
    fetchImages(searchQuery)
        .then(images => {
            if (images.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            } else {
                renderImages(images);
            }
        })
        .catch(error => {
            iziToast.error({
                title: 'Error',
                message: 'Failed to fetch images. Please try again later!',
            });
        })
        .finally(() => {
            hideLoader();
        });
}