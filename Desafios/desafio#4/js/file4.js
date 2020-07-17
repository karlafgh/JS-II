//arreglos
var estados=["Lara","Yaracuy","Portuguesa"];
var Lara=["Barquisimeto", "Carora", "Cabudare", "El Tocuyo"];
var Yaracuy=["Yaritagua", "San Felipe", "Chivacoa", "Nirgua"];
var Portuguesa=["Acarigua", "Guanare", "Araure", "Ospino"];

function selectCiudades(texto){
    var selectCities = document.getElementById("ciudades");

    switch (texto) {
        case "Lara":
            var opt1 = document.getElementById("opt1");
            var opt1Text = document.createTextNode(Lara[1]);
            opt1.appendChild(opt1Text);
            opt1.nodeValue(Lara[1]);
            selectCities.appendChild(opt1);

            var opt2 = document.getElementById("opt2");
            var opt2Text = document.createTextNode(Lara[2]);
            opt2.appendChild(opt2Text);
            opt2.nodeValue(Lara[2]);

            selectCities.appendChild(opt2);

            var opt3 = document.getElementById("opt3");
            var opt3Text = document.createTextNode(Lara[3]);
            opt3.appendChild(opt3Text);
            selectCities.appendChild(opt3);

            var opt4 = document.getElementById("opt4");
            var opt4Text = document.createTextNode(Lara[4]);
            opt4.appendChild(opt4Text);
            selectCities.appendChild(opt4);
            break;
    
        case "Yaracuy":
            var opt1 = document.getElementById("opt1");
            var opt1Text = document.createTextNode(Yaracuy[1]);
            opt1.appendChild(opt1Text);
            selectCities.appendChild(opt1);

            var opt2 = document.getElementById("opt2");
            var opt2Text = document.createTextNode(Yaracuy[2]);
            opt2.appendChild(opt2Text);
            selectCities.appendChild(opt2);

            var opt3 = document.getElementById("opt3");
            var opt3Text = document.createTextNode(Yaracuy[3]);
            opt3.appendChild(opt3Text);
            selectCities.appendChild(opt3);

            var opt4 = document.getElementById("opt4");
            var opt4Text = document.createTextNode(Yaracuy[4]);
            opt4.appendChild(opt4Text);
            selectCities.appendChild(opt4);

            break;

        case "Portuguesa":
            var opt1 = document.getElementById("opt1");
            var opt1Text = document.createTextNode(Portuguesa[1]);
            opt1.appendChild(opt1Text);
            selectCities.appendChild(opt1);

            var opt2 = document.getElementById("opt2");
            var opt2Text = document.createTextNode(Portuguesa[2]);
            opt2.appendChild(opt2Text);
            selectCities.appendChild(opt2);

            var opt3 = document.getElementById("opt3");
            var opt3Text = document.createTextNode(Portuguesa[3]);
            opt3.appendChild(opt3Text);
            selectCities.appendChild(opt3);

            var opt4 = document.getElementById("opt4");
            var opt4Text = document.createTextNode(Portuguesa[4]);
            opt4.appendChild(opt4Text);
            selectCities.appendChild(opt4);
            break;

        default:     
            break;
    }
}



function teclas_numeros(k){
    tecla = (k.keyCode!=0) ? k.keyCode : k.charCode;

    if (tecla == 8) return true;

    patron =  /[0-9-]/;

    te = String.fromCharCode(tecla);

    return patron.test(te);
}

function teclas_letras(k){
    tecla = (k.keyCode!=0) ? k.keyCode : k.charCode;

    if (tecla == 8) return true;

    patron =  /[A-Za-z\s]/;

    te = String.fromCharCode(tecla);

    return patron.test(te);
}

//validar email
function validarCorreo(email, form){
    regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])[@]([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
    var correo_estilo = document.getElementById("correo");
    var aviso = document.getElementById("reminder2");

    if(!regEx.test(email)){
        form.ci.focus();
        aviso.style.visibility = "visible";
        correo_estilo.style.borderColor = "red";
    }else{
        aviso.style.visibility = "hidden";
        correo_estilo.style.borderColor = "initial";
    }
}

//validar cedula
function validarCedula(cedula, form){
    regEx = /^([v]|[V])[-]([0-9]{7,8})$/;
    var cedula_estilo = document.getElementById("cedula");
    var aviso = document.getElementById("reminder");

    if(regEx.test(cedula)){
        cedula_estilo.style.borderColor = "initial";
        aviso.style.visibility = "hidden";

    }else{
        cedula_estilo.style.borderColor = "red";
        aviso.style.visibility = "visible";
        form.ci.focus();
    }
}

//validar que los input no estén vacios
function validarFormulario(form){
    if(estaVacio(form.nombre,"name")){
        return false;
    }else{
        if(estaVacio(form.id,"cedula")){
            return false
        }else{
            if(estaVacio(form.nro,"nro_tlfno")){
                return false
            }else{
                if(estaVacio(form.correo, "correo")){
                    return false;
                }else{
                    if(noEstaSeleccionado(form.estado, "estados")){   
                        return false;
                    }else{
                        tablaDinamica(form);
                    }
                }   
            }
        } 
    }
}

function estaVacio(texto, nombre){
    var nuevoEstilo = document.getElementById(nombre);

    if(texto.value == ""){
        texto.focus();
        nuevoEstilo.style.borderColor = "red";
        return true;
    }else{
        nuevoEstilo.style.borderColor = "initial";
        return false;
    }
}
function noEstaSeleccionado(texto, nombre){
    var nuevoEstilo = document.getElementById(nombre);

    if(texto.value == 0){
        texto.focus();
        nuevoEstilo.style.backgroundColor = "red";
        return true;
    }else{
        nuevoEstilo.style.backgroundColor = "initial";
        return false;
    }
}
function tablaDinamica(form){    
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
    var textoCelda = document.createTextNode("Número de Teléfono:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Correo:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Estado:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);

    var celda = document.createElement("td");
    var textoCelda = document.createTextNode("Ciudad:");  
    celda.appendChild(textoCelda);
    fila.appendChild(celda);
    
    var fila2 = document.createElement("tr");
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(form.name.value);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(form.cedula.value);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(form.nro_tlfno.value);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);    

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(form.correo.value);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);
    
    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(form.estados.value);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2); 

    var celda2 = document.createElement("td");
    var textoCelda2 = document.createTextNode(form.ciudades.value);
    celda2.appendChild(textoCelda2);
    fila2.appendChild(celda2);

    tablabody.appendChild(fila);
    tablabody.appendChild(fila2);
    tabla.appendChild(tablabody);
    body.appendChild(tabla);
    tabla.style.borderStyle = "solid";
    tabla.style.borderColor = "aquamarine";
    tabla.style.margin = "20px"
}