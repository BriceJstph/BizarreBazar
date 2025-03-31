document.addEventListener("click", function (event) {
    let mouse = document.getElementById("mouse");
    mouse.style.left = event.clientX + "px";
    mouse.style.top = event.clientY + "px";
});

function resizeMouse() {
    let mouse = document.getElementById("mouse");
    let size = Math.min(window.innerWidth, window.innerHeight) * 0.25; // 25% de la plus petite dimension
    mouse.style.width = size + "px";
}

window.addEventListener("resize", resizeMouse);
resizeMouse(); // Appelle la fonction au chargement