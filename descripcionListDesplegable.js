//CUANDO PIDAN PONER LA DESCRIPCIÓN CON LISTA DESPLEGABLE:

// PONEN LA DESCRIPCIÓN OCULTA.
// CREAR UN NUEVO CAMPO DESCRIPCIÓN CON EL NOMBRE "description_2" Y PONEN EL SIGUIENTE SCRIPT:

(function(){
	$('#description').hide();
	$('label[for="description"]').hide();

	$('#description_2').change(function(){
	
		let select = $('#description_2').value();
	
		$('#description_hidden').text(select);
		$('#description').value(select);
		$('#description').prop('type','hidden');
	});
})();

// PONGAN REGLAS DE VALIDACIÓN DEL CAMPO DESCRIPCIÓN ORIGINAL.
// CAMBIEN LA TRADUCCIÓN AL CAMPO NUEVO POR "Descripción del pago".
// EN DISEÑO DE CAMPOS AÑADEN EL NUEVO CAMPO PARA DESCRIPCIÓN Y DEJAN EL ANTIGUO TAMBIÉN, ESTARÁ OCULTO, PERO ASÍ LES TOMARÁ LOS DATOS.
