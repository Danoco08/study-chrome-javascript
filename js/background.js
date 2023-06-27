const images = [
    "bg01.jpeg",
    "bg02.jpeg",
    "bg03.jpeg",
    "bg04.jpeg",
    "bg05.jpeg",
    "bg06.jpeg",
    "bg07.jpeg",
    "bg08.jpeg",
    "bg09.jpeg",
    "bg10.jpeg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);