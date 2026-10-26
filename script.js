const imgPath = "img/exports/";
const objectNameList = ["ghost","mouse","chair","book","bottle"];
const probabilityOfGoodObject = 0.3;

const audioTick = new Audio("audio/tick.mp3");


const htmlImages = document.querySelectorAll("img");
const pageWidth = document.documentElement.clientWidth;
const pageHeight = document.documentElement.clientHeight;
const tapToPlay = document.querySelector(".tap-to-play");

canChange = true;

function hideImages() {
    htmlImages.forEach((image) => {
        image.style.visibility = "hidden";
    });
}

function showImages() {
    htmlImages.forEach((image) => {
        image.style.visibility = "visible";
    });
}

function randomizeImagePositions() {

    htmlImages.forEach((image) => {
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

// Remove and return a random element from tab parameter
function getRandomInTab(tab) {
    const element = tab[Math.floor(Math.random() * tab.length)];
    const id = tab.indexOf(element);
    if (id !== -1) tab.splice(id, 1);
    return element;
}

function playTheTick(){
    audioTick.play();
}

function refreshImages(){
    if (!canChange)
        return;

    tapToPlay.remove();
    canChange = false;

    hideImages();

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
    if (Math.random() < 0.5){
        htmlImages[0].src = falseFilename1;
        htmlImages[1].src = falseFilename2;
    }else{
        htmlImages[0].src = falseFilename2;
        htmlImages[1].src = falseFilename1;
    }

    toGrab = "";
    if (indices.length==1)
        toGrab = objectNameList[indices[0]];
    else
        toGrab = objectNameList[secondShapeId];
    console.log(`Grab the ${toGrab} !`);

    randomizeImagePositions();

    playTheTick()
    setTimeout(playTheTick,300);
    setTimeout(playTheTick,600);
    setTimeout(showImages,900);
    setTimeout(() => {canChange = true},900);

    //console.log(`${falseFilename1} ${falseFilename2} ${indices}`);
}


document.addEventListener("click", refreshImages);
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        refreshImages();
    }
});
