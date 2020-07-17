var nameForm;
var cedulaForm;
var correoForm;
var passwordForm;
var diaForm;
var mesForm;
var añoForm;
var generoForm;

function validarFormulario(form){
    if(estaVacio(form.nombre,"name")){
        nameForm = form.nombre;
        return false;
    }else{
        if(estaVacio(form.id,"cedula")){
            cedulaForm = form.cedula;
            return false
        }else{
            if(estaVacio(form.correo, "correo")){
                correoForm = form.correo;
                return false;
            }else{
                if(estaVacio(form.contraseña, "contraseña")){
                    passwordForm = form.contraseña;
                    return false
                }else{
                    if(noEstaSeleccionado(form.dia, "day")){   
                        diaForm = form.dia.value;
                        return false;
                    }else{
                        if(noEstaSeleccionado(form.mes, "month")){
                            mesForm = form.mes.value;
                            return false;
                        }else{
                            if(noEstaSeleccionado(form.año, "year")){
                                añoForm = form.año.value;
                                return false;
                            }else{
                                if(noEstaSeleccionado(form.genero, "genre")){
                                    generoForm = form.genero.value;
                                    return false;
                                }else{
                                    if(validarCheckbox(form.terminos.checked)){
                                        return true;
                                    }else{
                                        form.submit();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } 
    }
}
function estaVacio(texto, nombre){
    var nuevoEstilo = document.getElementById(nombre);

    if(texto.value == ""){
        /* alert("maaal"); */ 
        texto.focus();
        nuevoEstilo.style.borderColor = "red";
        /* retorna verdadero porque SI está vacia */
        return true;
    }else{
        nuevoEstilo.style.borderColor = "initial";
        return false;
    }
}
function noEstaSeleccionado(texto, nombre){
    var nuevoEstilo = document.getElementById(nombre);

    if(texto.value == 0){
        nuevoEstilo.style.backgroundColor = "red";
        /* retorna verdadero porque NO está seleccionado como lo dice la funcion */
        return true;
    }else{
        nuevoEstilo.style.backgroundColor = "initial";
        return false;
    }
}
function validarCheckbox(texto){
    var body = document.getElementsByTagName("body")[0];
    var aviso = document.createElement("p");
    if(texto == false){
        var textoAviso = document.createTextNode("Debes hacer check para poder registarte");
        aviso.appendChild(textoAviso);
        aviso.style.color = "red";
        aviso.style.fontWeight = "bold";
        body.appendChild(aviso);
        return true;
    }else{
        return false;
    }
}
function tablaDinamica(){    
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
    var tablabody = document.createElement("tbody");
    
    var fila = document.createElement("tr");
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Nombre:"); 
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Cedula:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Correo:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Contraseña:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Fecha de nacimiento:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Genero:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var fila2 = document.createElement("tr");
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(nameForm);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(cedulaForm);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(correoForm);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(passwordForm);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);    
    
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode( diaForm+"/ "+mesForm+"/ "+ añoForm);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2); 

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(generoForm);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    tablabody.appendChild(fila);
    tablabody.appendChild(fila2);
    tabla.appendChild(tablabody);
    body.appendChild(tabla);
    tabla.style.borderStyle = "solid";
    tabla.style.borderColor = "pink";
}