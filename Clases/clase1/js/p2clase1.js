/* esto es para que abra una nueva ventana al dar click en un boton*/
function recargar(){
    window.open("https://www.google.com.mx/?hl=es-419", "", screen.width, screen.height);
    maximizar();
}
function maximizar(){
    window.resizeTo(screen.width, screen.height);
    //al abrir la pagina la abre en estos angulos
    window.moveTo(50,80);
}
//puede cerrar con archivos que puedan ser editados por nosotros
function cerrar(){
    window.close();
}