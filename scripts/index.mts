const iconsEl = document.querySelector(".icons");
if (iconsEl === null) {
  throw new Error("Missing an .icons element");
}
const detailsEl = document.querySelector(".details");
if (detailsEl === null) {
  throw new Error("Missing a .details element");
}
const paraEl = document.querySelector(".details p");
if (paraEl === null) {
  throw new Error("Missing paragraph child element to .details");
}
iconsEl.addEventListener("mouseover", (e) => {
  paraEl.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia magnam repudiandae mollitia corporis molestias
   aliquam atque dolore quos? Quasi laborum iure recusandae quidem, enim facere accusantium ea culpa itaque?`;
});
