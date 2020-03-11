/*aqui le indico al usuario que ingrese una url y luego la lleva 
var answer = prompt("Escriba una url");
window.location = answer*/

//aqui indico mediante un alert el width y height
var ancho = screen.width;
var alto = screen.height;

alert("El ancho de su pantalla es: "+ancho +" y el largo es: "+alto);

//Funcion para poner en el boton y del html y que imprima
function imprimir(){
    window.print();
}

function datosNav(){
    console.log("Nombre del navegador: "+navigator.appName)
    console.log("Version del navegador: "+navigator.appVersion)
    console.log("Idioma del navegador: "+navigator.language)
}

