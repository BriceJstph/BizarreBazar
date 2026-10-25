

function randomizeImagePositions() {
    const images = document.querySelectorAll(".random-image");
    const pageWidth = document.documentElement.clientWidth;
    const pageHeight = document.documentElement.clientHeight;

    images.forEach((image) => {
        const width = image.clientWidth;
        const height = image.clientHeight;
        const rotation = Math.random() * 360;
        const radians = rotation * Math.PI / 180;
        const rotatedWidth = Math.abs(width * Math.cos(radians)) + Math.abs(height * Math.sin(radians));
        const rotatedHeight = Math.abs(width * Math.sin(radians)) + Math.abs(height * Math.cos(radians));
        const left = Math.random() * Math.max(0, pageWidth - rotatedWidth);
        const top = Math.random() * Math.max(0, pageHeight - rotatedHeight);

        image.style.left = `${left + (rotatedWidth - width) / 2}px`;
        image.style.top = `${top + (rotatedHeight - height) / 2}px`;
        image.style.transform = `rotate(${rotation}deg)`;
    });
}

window.addEventListener("load", randomizeImagePositions);

document.addEventListener("click", randomizeImagePositions);
