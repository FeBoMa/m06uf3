var nom = document.getElementById("nom")
var desc = document.getElementById("desc")
var cuerpo = document.getElementById("cuerpo")
var mapache = document.getElementById("mapache")
var ffdesc = true;
var ffnom = true;


function seleccionado() {
    desc.style.border = "thick solid green";
    ffdesc = false;
}

function desseleccionado() {
    desc.style.border = "1.2px solid #a9a9a9";
    ffdesc = true;
}

function seleccionadonom() {
    ffnom = false;
}

function desseleccionadonom() {
    ffnom = true;
}

function notificaObservador(e) {
    if(e.key==="e" && ffdesc && ffnom){
       nom.value = "";
       desc.value = "";
       alert("borra");
    }
}


function datos() {
    alert("el teu nom");
}

desc.addEventListener("focus", seleccionado);
desc.addEventListener("blur", desseleccionado);

nom.addEventListener("focus", seleccionadonom);
nom.addEventListener("blur", desseleccionadonom);

cuerpo.addEventListener("keypress", notificaObservador); 

mapache.addEventListener("dblclick", datos);

