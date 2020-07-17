// funciones anónimas
var mostrar = document.getElementById("mostrar"); 

mostrar.onclick = function(){
    let campo1 = newForm.answer1.value;
    let campo2 = newForm.answer2.value;
    alert("El valor del input #1 es "+campo1+ ". El valor del input #2 es "+campo2);
}

var multiplicar = document.getElementById("multiplicar");

multiplicar.onclick = function() {
    let campo1 = parseInt(newForm.answer1.value);
    let campo2 = parseInt(newForm.answer2.value);
    let total = campo1 * campo2;

    if(newForm.check.checked){
        total = total * 0.9;
    }

    newForm.reset();
    resultado.innerHTML = total;
} 
