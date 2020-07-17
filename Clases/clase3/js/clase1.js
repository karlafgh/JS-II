function generar_tabla(){
    var body = document.getElementsByTagName("body")[0];
    
    var tabla = document.createElement("table");
    var tablabody = document.createElement("tbody");
    var btn1 = document.createElement("button");
    btn1.type="button";
    btn1.innerText="Nro de filas:"
    btn1.onclick= () =>{
        alert("El número de filas es "+tabla.rows.length);
    }

    var btn2 = document.createElement("button");
    btn2.type="button";
    btn2.innerText="Valor 2,2:"
    btn2.onclick= () =>{
        alert("El valor de la celda 2,2: -"+tabla.rows[1].cells.item(1).innerHTML+"-");
    }
    /* mi tabla de multiplicar */
    for(var i = 1; i <= 4; i++){
        var fila = document.createElement("tr");
        for (let j = 1; j <= 10; j++) {
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(i+"x"+j+" = "+i*j);
            /* appendChild es crearle un hijo */
            celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
        tablabody.appendChild(fila);
    }
    tabla.appendChild(tablabody);
    body.appendChild(tabla);
    body.appendChild(btn1);
    body.appendChild(btn2);

    tabla.style.borderStyle = "solid";
    tabla.style.borderColor = "red";
}