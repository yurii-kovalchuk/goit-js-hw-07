import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
let markup = galleryItems
  .map(
    ({ preview, description }) =>
      `<div class="gallery__item"><img src="${preview}" alt="${description}" class="gallery__image"></div>`
  )
  .join("");

galleryRef.innerHTML = markup;

galleryRef.addEventListener("click", onClick);

function onClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const currentItem = galleryItems.find(
    ({ description }) => description === e.target.alt
  );

  basicLightbox
    .create(
      `<img src="${currentItem.original}" alt="${currentItem.description}">`
    )
    .show();
}
