/*CUANDO LES PIDAN PONER LA REFERENCIA APUNTANDO AL CAMPO NOMBRE:

- PARA GOU SIEMPRE SE DEBE CAMBIAR LOS CAMPOS PAGADOR POR COMPRADOR PARA MICROSITIO ABIERTO.
- EL CAMPO REFERENCIA DEBEN PONERLO OCULTO.
- EN EL CAMPO "buyer_name" DEBEN ANEXAR EL SIGUIENTE SCRIPT:
- DEBEN MANTENER EL CAMPO REFERENCIA EN LA DEFINICIÓN DE LOS CAMPOS, ESTARÁ OCULTO, PERO A LA ESCUCHA DE CAMBIOS
*/
(function(){

	$('#reference').hide();
      $('label[for="reference"]').hide();

	$('#buyer_name').change(function(){
	
		let identification = $('#buyer_name').value();
	
		$('#reference_hidden').text(identification);
		$('#reference').value(identification);
		$('#reference').prop('type','hidden');
	});
})();
