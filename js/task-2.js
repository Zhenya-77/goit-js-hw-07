const gallery = document.querySelector('.gallery');

const createGallery = () => {
  const galleryItems = images.map(image => {
    return `
      <li>
        <img src="${image.url}" alt="${image.alt}" />
      </li>
    `;
  });
  
  gallery.insertAdjacentHTML('beforeend', galleryItems.join(''));
};

createGallery();