const images = [
  "img/birth_harry.jpg",
  "img/flower_harry.jpg",
  "img/magic_harry.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");

image.src = chosenImage;

document.body.appendChild(image);
