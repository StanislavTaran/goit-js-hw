'use strict';

import galleryItems from './gallery-items.js';

const refs = {
  galleryParent: document.querySelector('ul.gallery'),
  lightbox: document.querySelector('.lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  closeLightboxBtn: document.querySelector('button[data-action="close-lightbox"]'),
  lightboxOverlay: document.querySelector('.lightbox__content'),
};

const imagesAdress = galleryItems.map(el => el.original);

refs.galleryParent.addEventListener('click', openLightbox);
refs.closeLightboxBtn.addEventListener('click', closeLightbox);
refs.lightboxOverlay.addEventListener('click', handleOverlayClick);

function openLightbox(event) {
  event.preventDefault();

  const url = event.target.dataset.source;

  refs.lightbox.classList.add('is-open');
  refs.lightboxImage.setAttribute('src', url);

  window.addEventListener('keydown', handleKeyPress);
  window.addEventListener('keydown', flippingImagesByArrows);
}

function closeLightbox() {
  refs.lightbox.classList.remove('is-open');
  refs.lightboxImage.setAttribute('src', ' ');

  window.removeEventListener('keydown', handleKeyPress);
  window.removeEventListener('keydown', flippingImagesByArrows);
}

function handleOverlayClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }

  closeLightbox();
}

function handleKeyPress(event) {
  if (event.code !== 'Escape') {
    return;
  }

  closeLightbox();
}

function flippingImagesByArrows(event) {
  let currentImageAdress = refs.lightboxImage.getAttribute('src');
  let idx = imagesAdress.indexOf(currentImageAdress);

  const isPressRight = event.code === 'ArrowRight';
  const isPressLeft = event.code === 'ArrowLeft';
  const lastImage = imagesAdress.length - 1;

  if (!isPressRight && !isPressLeft) {
    return;
  } else if (isPressRight && idx !== lastImage) {
    idx += 1;
  } else if (isPressLeft && idx !== 0) {
    idx -= 1;
  }
  currentImageAdress = imagesAdress[idx];
  refs.lightboxImage.setAttribute('src', currentImageAdress);
}

const createGallery = function(galleryItems) {
  const galleryMarkup = [];

  galleryItems.forEach(image => {
    const galleryItem = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`;
    galleryMarkup.push(galleryItem);
  });

  refs.galleryParent.insertAdjacentHTML('beforeend', galleryMarkup.join(''));
};

createGallery(galleryItems);
