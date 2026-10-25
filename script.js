

function randomizeImagePositions() {
    const images = document.querySelectorAll(".random-image");
    const pageWidth = document.documentElement.clientWidth;
    const pageHeight = document.documentElement.clientHeight;

    images.forEach((image) => {
        const width = image.clientWidth;
        const height = image.clientHeight;
        const rotation = Math.random() * 360;
        const left = `${Math.random() * Math.max(0, pageWidth - width)}px`;
        const top = `${Math.random() * Math.max(0, pageHeight - height)}px`;

        image.style.left = left;
        image.style.top = top;
        image.style.transform = `rotate(${rotation}deg)`;
    });
}

window.addEventListener("load", randomizeImagePositions);

document.addEventListener("click", randomizeImagePositions);
