function mostraMissatge(e) {
    console.log(e);
    alert("Contenido boton 1 " + e.target.outerText);
}
function aplica(e) {
    console.log(e);
    //alert("Contenido boton 2" + e.target.outerText);

}
primer = document.getElementById("primer"),
datos = document.getElementById("datos"),

btn = document.getElementById("assigna"),

btn.onclick = function () {
    if(datos.value!=""){
     primer.innerHTML = datos.value;   
    }
};
