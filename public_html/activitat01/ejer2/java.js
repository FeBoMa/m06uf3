function mostraMissatge(e) {
    console.log(e);
    alert("Contenido boton 1 " + e.target.outerText);
}
function aplica(e) {
    console.log(e);
    //alert("Contenido boton 2" + e.target.outerText);
}
var grande = document.getElementById("grande")
var pequeno = document.getElementById("pequeno")
var texto = document.getElementById("texto")
var color = document.getElementById("color")
var cuerpo = document.getElementById("cuerpo")
var cabeza = document.getElementById("main-header");

grande.onclick = function () {
    texto.style.fontSize = "25px";
};

pequeno.onclick = function () {
    texto.style.fontSize = "5px";
};

color.onclick = function () {
    cuerpo.style.backgroundColor = getRandomColor();
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function underline() {
    texto.style.textDecoration = "underline";
}
function none() {
    texto.style.textDecoration = "none";
}
cabeza.addEventListener("mouseover", underline);
cabeza.addEventListener("mouseleave", none);

window.onload = function() {
    alert("Cargacompleta");
}