const imgPath = "src/exports/";
const objectNameList = ["ghost","mouse","chair","book","bottle"];
const probabilityOfGoodObject = 0.3;


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

function setSecondImageToChair() {
    const secondImage = document.querySelectorAll("img")[1];

    if (secondImage) {
        secondImage.src = "src/exports/chair0.png";
    }
}

// Remove and return a random element from tab parameter
function getRandomInTab(tab) {
    const element = tab[Math.floor(Math.random() * tab.length)];
    const id = tab.indexOf(element);
    if (id !== -1) tab.splice(id, 1);
    return element;
}

function refreshImages(){
    indices = [0,1,2,3,4];

    //First, select a false couple
    falseShapeId = getRandomInTab(indices);
    falseColorId = getRandomInTab(indices);
    const falseFilename1 = `${imgPath}${objectNameList[falseShapeId]}${falseColorId}.png`;

    //Select the second couple, two cases
    secondShapeId = getRandomInTab(indices);
    if (Math.random() < probabilityOfGoodObject){
        //Good Object
        secondColorId = secondShapeId;
    }else{
        //Second false object
        secondColorId = getRandomInTab(indices);
    }
    const falseFilename2 = `${imgPath}${objectNameList[secondShapeId]}${secondColorId}.png`;

    //Randomize front/back placement
    const htmlImages = document.querySelectorAll("img");
    if (Math.random() < 0.5){
        htmlImages[0].src = falseFilename1;
        htmlImages[1].src = falseFilename2;
    }else{
        htmlImages[0].src = falseFilename2;
        htmlImages[1].src = falseFilename1;
    }

    console.log(`${falseFilename1} ${falseFilename2} ${indices}`);
    randomizeImagePositions();
}


window.addEventListener("load", refreshImages);
document.addEventListener("click", refreshImages);

refreshImages()