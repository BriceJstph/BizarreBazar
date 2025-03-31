const images = [
    'src/img1.svg',
    'src/img2.svg',
    'src/img3.svg',
    'src/img4.svg',
    'src/img5.svg'
];

function getRandomImage() {
    return images[Math.floor(Math.random() * images.length)];
}

function changeImages() {
    document.getElementById('image1').src = getRandomImage();
    document.getElementById('image2').src = getRandomImage();
}

changeImages(); // Initialisation