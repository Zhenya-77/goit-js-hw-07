const gallery = document.querySelector('.gallery');

const createGallery = (images) => {
  const galleryItems = images.map(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    li.appendChild(img);
    return li;
  });

  galleryItems.forEach(item => gallery.appendChild(item));
};

createGallery(images);