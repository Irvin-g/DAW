window.addEventListener('load',inicio,false);
function inicio(){
    resp.addEventListener('click',respu);
    borrar.addEventListener('click',borrard);
}
//var total = document.getElementById("submitbtn");
var listado= document.getElementById("respuestas");

function respu(){
var cantlibros= document.getElementById("libro").value;
var cantpluma= document.getElementById("plumas").value;
var cantcuaderno= document.getElementById("cuaderno").value;
var preciot;
var precioL;
var precioC;
var precioP;

var respuesta = document.getElementById("respuestas");


precioL= cantlibros*100.00;
precioC= cantcuaderno*15.50;
precioP= cantpluma*2.35;
preciot= precioL + precioC + precioP;



listado.innerHTML = "Precio de libros        $"+precioL.toString()+"<br>"+
                    "Precio de cuadernos        $"+precioC.toString()+"<br>"+
                    "Precio de plumas        $"+precioP.toString()+"<br>"+
                    "Precio total        $"+preciot.toString()
    ;
}

function borrard(){
    listado.innerHTML = " ";
}