var A = document.getElementById("A");
var B = document.getElementById("B");
var TablaGeneral = document.getElementById("TablaGeneral");

var cuerpo = document.getElementById("cuerpo");
var letras = ["A", "B", "C", "D", "E", "F", "G", "H"];



function notificaObservador(e) {
    switch (e.key) {
        case "1":
            fila("1");
            break;
        case "2":
            fila("2");
            break;
        case "3":
            fila("3");
            break;
        case "4":
            fila("4");
            break;
        case "5":
            fila("5");
            break;
        case "6":
            fila("6");
            break;
        case "7":
            fila("7");
            break;
        case "8":
            fila("8");
            break;
        case "A":
            columna("A");
            break;
        case "B":
            columna("B");
            break;
        case "C":
            columna("C");
            break;
        case "D":
            columna("D");
            break;
        case "E":
            columna("E");
            break;
        case "F":
            columna("F");
            break;
        case "G":
            columna("G");
            break;
        case "H":
            columna("H");
            break;

        default:
            limpia()
            break;
    }
}

function columna(letra) {

    for (var i = 1; i < 9; i++) {
        var id = letra + i;
        document.getElementById(id).style.background = "aqua";
    }
}

function fila(num) {

    for (var i = 0; i < 8; i++) {
        var id = letras[i] + num;
        document.getElementById(id).style.background = "red";
    }
}

function limpia() {

    for (var i = 0; i < 8; i++) {
        for (var n = 1; n < 9; n++) {
            var id = letras[i] + n;
            document.getElementById(id).style.background = "white";
        }
    }
}

cuerpo.addEventListener("keypress", notificaObservador); 


TablaGeneral.onclick = function (e) {
     console.log(e.target);
     if(document.getElementById(e.target.id).innerHTML == "R"){
       document.getElementById(e.target.id).innerHTML = "esta";  
       document.getElementById(e.target.id).style.background = "green";
     }else{
        document.getElementById(e.target.id).style.background = "red"; 
     }
};

function underline(e) {
    if(document.getElementById(e.target.id).innerHTML == "R"){
       document.getElementById(e.target.id).style.background = "green";        
    }
}
TablaGeneral.addEventListener("mouseover", underline);
TablaGeneral.addEventListener("mouseleave", none);