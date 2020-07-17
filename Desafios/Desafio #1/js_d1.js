var info;

function backgroundColor(color){
    window.document.bgColor = color;
}

function changeTitle(){
    // si se ingresa algo en el prompt y se le da aceptar
    var answer = prompt("Write the new title of the document");
    if (answer!= null){
        window.document.title = answer;
    }
}

// objetivo 3
function windowSettings(){
    window.moveTo(0,0);
    window.resizeTo(screen.width, screen.height);
}

// obj 4
function isThereInternet(){
    if(navigator.onLine){
        window.document.title = "Si hay conexión";
    }else{
        alert("No hay conexión");
        window.close();
    } 
}

function texto(){
    if(!navigator.onLine)
        document.write("<p>Lo sentimos. No hay conexión a internet</p>");
}

// obj 5
function openNewWindow() {
    window.open("modal_d1.html", "", screen.width, screen.height);
}

