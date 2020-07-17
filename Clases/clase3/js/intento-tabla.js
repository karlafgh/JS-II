function crearTabla(){
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tablabody = document.createElement("tbody");
    
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Nombre"); 
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Cedula");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Correo");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Contraseña");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Fecha de nacimiento");  

    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var fila2 = document.createElement("tr");
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode("answer");
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode("answer");
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode("answer");
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode("answer");
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);    

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode("answer");
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2); 

    tablabody.appendChild(fila);
    tablabody.appendChild(fila2);
    tabla.appendChild(tablabody);
    body.appendChild(tabla);
    tabla.style.borderStyle = "solid";
    tabla.style.borderColor = "red";
}