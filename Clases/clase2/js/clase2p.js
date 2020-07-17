// fucniones standar (solo sirven con con el onclick):

function mostrar(){
    // tomo los valores ingresados en los inputs y los almaceno en variables para luego mostrarlos
    let campo1 = newForm.answer1.value;
    let campo2 = newForm.answer2.value;
    alert("El valor del input #1 es "+campo1+ ". El valor del input #2 es "+campo2)
}

function multiplicar() {
    let campo1 = parseInt(newForm.answer1.value);
    let campo2 = parseInt(newForm.answer2.value);
    let total = campo1 * campo2;

    // checked es un metodo para saber si se selecciono o no el checkbox
    if(newForm.check.checked){
        total = total * 0.9;
    }

    newForm.reset();
    
    // esto lo va a imprimir en el h1 que tiene de id <resultado>
    resultado.innerHTML = total;
} 