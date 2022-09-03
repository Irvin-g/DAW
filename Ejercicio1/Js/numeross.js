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

//intento sacar mayor menor
/*for (int x=0;x<matriz.length;x++) {
    for (int y=0;y<matriz[x].length;y++) {
      if (matriz[x][y] > numeroMayor) {
        numeroMayor = matriz[x][y];
        mayorPosicion = x + "," + y;
      }
      if (matriz[x][y] < numeroMenor) {
        numeroMenor = matriz[x][y];
        menorPosicion = x + "," + y;
      }
    }                
  }*/