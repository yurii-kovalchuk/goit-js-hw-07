import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

let markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join("");

galleryRef.innerHTML = markup;

galleryRef.addEventListener("click", onClick);

let modalContent;

function onClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  modalContent = basicLightbox.create(
    `<img src="${e.target.dataset.source}" alt="${e.target.alt}">`,
    {
      onShow: () => document.addEventListener("keydown", onKey),
      onClose: () => document.removeEventListener("keydown", onKey),
    }
  );

  modalContent.show();
}

function onKey(e) {
  if (e.code !== "Escape") {
    return;
  }
  modalContent.close();
  console.log("escape"); // щоб переконатися що случах знятий
}
