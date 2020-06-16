var preguntar = document.getElementById("boton");
var borrar = document.getElementById("borrar");
var t = document.getElementById("r");
var d = document.getElementById("e");
var f= document.getElementById("2");
var subtotal_factura = 0;
var iva = 0;
var total = 0;
var articulo = document.getElementById("arti");
var finalizar = document.getElementById("finalizar");
var campo = String,campo1=String,campo2=String;
var texto,texto2,texto3,texto4,texto5;

preguntar.onclick = function(form) {
	campo =Datos.rif.value;
	campo1 = Datos.nombre.value;
	campo2 = Datos.direccion.value
	if (campo == ""){
		alert("No se puede dejar el campo vacio");
		campo.focus();
	}else{
		t.innerHTML =campo;
	}
	if(campo1 == "" || !isNaN(campo1)){
		alert("No se puede dejar el campo vacio");
		campo1.focus();
	}else{
		d.innerHTML = campo1;
	}
	if(campo2 == "" || !isNaN(campo2)){
		alert("No se puede dejar el campo vacio");
		campo2.focus();
	}else{
		f.innerHTML = campo2;
	}
	
}
articulo.onclick = (form)=>{
	var crear = document.createElement("div");
	var crear2 = document.createElement("div");
	var crear3 = document.createElement("div");
	var crear4 = document.createElement("div");
	var crear5 = document.createElement("div");
	var crear6 = document.createElement("div");
	var crear7 = document.createElement("div");

	let nombre_de_articulo = Articulos.nombre_articulo.value;
	let cantidad = Articulos.cantidad.value;
	let precio = Articulos.precio.value;
	let subtotal = cantidad * precio;
	subtotal_factura = subtotal_factura+subtotal;
	iva = iva+subtotal * 0.16;
	total = total+subtotal + iva;
	
	if (nombre_de_articulo == "" || !isNaN(nombre_de_articulo) || cantidad <1 || precio<1) {
		alert("Coloca el nombre del articulo y coloca valores mayores a 1")
		
	}else{
		texto = document.createTextNode("El Articulo es: " +nombre_de_articulo);
		texto2 = document.createTextNode("La Cantidad es: " +cantidad);
		texto3 = document.createTextNode("El Precio es: " +precio+"Bs.");
		texto4 = document.createTextNode("El Subtotal es: " +subtotal+"Bs.");
		texto5 = document.createTextNode("El Subtotal de la factura es: " +subtotal_factura+"Bs.");
		texto6 = document.createTextNode("El Monto del iva es de :" +iva+"Bs.");
		texto7 = document.createTextNode("El Total es: "+total +"Bs.");

		crear.appendChild(texto);
		document.getElementById("ar").appendChild(crear);
		
		crear2.appendChild(texto2);
		document.getElementById("ti").appendChild(crear2);

		crear3.appendChild(texto3);
		document.getElementById("cu").appendChild(crear3);

		crear4.appendChild(texto4);
		document.getElementById("lo").appendChild(crear4);

		crear5.appendChild(texto5);
		document.getElementById("s").appendChild(crear5);

		crear6.appendChild(texto6);
		document.getElementById("to").appendChild(crear6);

		crear7.appendChild(texto7);
		document.getElementById("tal").appendChild(crear7);
	}

	borrar.onclick =function(){
		var eliminar_nombre_art = document.getElementById("ar");
		var eliminar_cantidad = document.getElementById("ti");
		var eliminar_precio = document.getElementById("cu")
		var eliminar_subtotal = document.getElementById("lo");
		var eliminar_subtotal_factura = document.getElementById("s");
		var eliminar_iva = document.getElementById("to");
		var eliminar_total = document.getElementById("tal");


		document.getElementById("ar").removeChild(crear);
		eliminar_cantidad.removeChild(crear2);
		eliminar_precio.removeChild(crear3);
		eliminar_subtotal.removeChild(crear4);
		eliminar_subtotal_factura.removeChild(crear5);
		eliminar_iva.removeChild(crear6);
		eliminar_total.removeChild(crear7);
	}

	finalizar.onclick = function(){
		if (cantidad>1){
			if(confirm("¿Estas seguro que deseas finalizar?") === true){

				t.innerHTML = "El Rif del Cliente es " +campo;
				d.innerHTML = "El Nombre del Cliente es " +campo1;
				f.innerHTML = "La Direccion del Cliente es " +campo2;
				
				crear.appendChild(texto);
				document.getElementById("ar").appendChild(crear);
				
				crear2.appendChild(texto2);
				document.getElementById("ti").appendChild(crear2);

				crear3.appendChild(texto3);
				document.getElementById("cu").appendChild(crear3);

				crear4.appendChild(texto4);
				document.getElementById("lo").appendChild(crear4);

				crear5.appendChild(texto5);
				document.getElementById("s").appendChild(crear5);

				crear6.appendChild(texto6);
				document.getElementById("to").appendChild(crear6);

				crear7.appendChild(texto7);
				document.getElementById("tal").appendChild(crear7);
				
				Datos.reset();
				Articulos.reset();
			}
		}
		else{
			alert("Falta informacion");
		}
	}
}




