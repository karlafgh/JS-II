var nombreArticulo, 
    cantidadArticulo 
    precioArticulo,  
    subtotalArticulo,
    subtotalFactura, 
    montoIva,
    montoTotal;

var inputNombre = document.getElementById("nombre");

function validarString(inputAValidar) {
    do {
        inputAValidar.style(border, "1px red")
        
    } while (inputAValidar = NaN);
}

validarString()