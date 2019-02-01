var texto = document.getElementById("texto")
var cuerpo = document.getElementById("cuerpo");
function mouse_position(e)
{
var $resultadoX = (e.clientX<(document.documentElement.clientWidth/2)) ? "Izquierda":"Derecha";
var $resultadoY = (e.clientY<(document.documentElement.clientHeight/2)) ? "Arriba":"Abajo";

texto.innerHTML = $resultadoX + " " + $resultadoY;
}


