const images = [
    'src/img1.svg',
    'src/img2.svg',
    'src/img3.svg',
    'src/img4.svg',
    'src/img5.svg'
];

const colors = [
    "green",
    "purple",
    "orange",
    "yellow",
    "gray"
]

function getRandomColor() {
    return colors[Math.floor(Math.random()*5)];
}

function changeImageColor(){
    let obj = document.getElementById("mouse1");
    let new_color = getRandomColor();

    let svgDoc = obj.contentDocument; // Récupérer le document SVG interne
    let shape_list = svgDoc.querySelectorAll(".colored-shape"); // Sélectionner l'élément à modifier

    for(let i = 0; i < shape_list.length; i++){
        if (shape_list[i]) {
            shape_list[i].setAttribute("fill", new_color); // Changer la couleur de remplissage
        }
    }
}

document.addEventListener("click", changeImageColor);

document.getElementById("mouse1").addEventListener("load", function() {
    let svgDoc = this.contentDocument; // Accède au contenu du SVG
    svgDoc.addEventListener("click", changeImageColor);
});