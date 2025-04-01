const images = [
    'src/img1.svg',
    'src/img2.svg',
    'src/img3.svg',
    'src/img4.svg',
    'src/img5.svg'
];

function changeImageColor() {

    let obj = document.getElementById("mouse1");

    // Vérifier si le document est chargé
    obj.addEventListener("load", function() {
        let svgDoc = obj.contentDocument; // Récupérer le document SVG interne
        console.log(svgDoc);
        let shape_list = svgDoc.querySelectorAll(".colored-shape"); // Sélectionner l'élément à modifier

        for(let i = 0; i < shape_list.length; i++){
            if (shape_list[i]) {
                shape_list[i].setAttribute("fill", "green"); // Changer la couleur de remplissage
            }
        }
    });
}   

changeImageColor(); // Initialisation