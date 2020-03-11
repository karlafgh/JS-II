// funciones arrow

var dividir = document.getElementById("dividir");

dividir.onclick = () =>{
    let campo1 = parseInt(newForm.answer1.value);
    let campo2 = parseInt(newForm.answer2.value);
}

// agregar elementos de html con js
var agregarElemento = document.getElementById("element");

agregarElemento.onclick = ()=>{
    var node = document.createElement("h2");

    var textnode = document.createTextNode("Hello, world");

    node.appendChild(textnode);
    
    document.getElementById("ingresar").appendChild(node);
}

var cambiarLista = document.getElementById("list");
cambiarLista.onclick = function(){
    var text = document.createTextNode("Cambiado");
    var item = document.getElementById("list").childNodes[0];
    item.replaceChild(text, item.childNodes[0]);
}