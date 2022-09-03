window.addEventListener('load',inicio,false);
function inicio(){
    enviar.addEventListener('click',newTable);
    reiniciar.addEventListener('click',reinicia);
}
var cont="";
function newTable(){
    random = () => Math.floor((Math.random() * 100) + 1);
    fila = document.getElementById("fil").value;
    columna = document.getElementById("col").value;
    tabla = document.getElementById("tablaDinamica");
    cont+="<table >";
    for(j=1;j<= fila; j++){
        cont+="<tr>";
        for(i=1; i<=columna; i++){
            cont+="<td id="+j+i+">" 
            cont+= random();
            cont+="</td>";
        }    
        cont+="</tr>";
    }

    cont+="</table>";
    tabla.innerHTML= cont;
}

function reinicia(){
    location.reload();
}