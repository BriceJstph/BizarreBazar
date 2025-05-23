
const colors = [
    "white",
    "gray",
    "red",
    "green",
    "blue"
]

const objects = [
    "Fantome",
    "Souris",
    "Fauteuil",
    "Bouteille",
    "Livre"
]

function randomizeTextAndColor() {
    console.log("Changing color and text...");
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];

    document.getElementById("pA").textContent = randomObject;
    document.getElementById("pA").style.color = randomColor;

    // Pour pB, on peut choisir un autre objet et une autre couleur, ou les mêmes si tu préfères
    const randomColorB = colors[Math.floor(Math.random() * colors.length)];
    const randomObjectB = objects[Math.floor(Math.random() * objects.length)];

    document.getElementById("pB").textContent = randomObjectB;
    document.getElementById("pB").style.color = randomColorB;
}

document.addEventListener("click", randomizeTextAndColor);

