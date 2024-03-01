/*CUANDO LES PIDAN PONER LA REFERENCIA APUNTANDO AL CAMPO IDENTIFICACIÓN:

- PARA GOU SIEMPRE SE DEBE CAMBIAR LOS CAMPOS PAGADOR POR COMPRADOR PARA MICROSITIO ABIERTO.
- EL CAMPO REFERENCIA DEBEN PONERLO OCULTO.
- EN EL CAMPO "buyer_id" DEBEN ANEXAR EL SIGUIENTE SCRIPT:
*/
(function(){

	$('#reference').hide();
      $('label[for="reference"]').hide();

	$('#buyer_id').change(function(){
	
		let identification = $('#buyer_id').value();
	
		$('#reference_hidden').text(identification);
		$('#reference').value(identification);
		$('#reference').prop('type','hidden');
	});
})();
