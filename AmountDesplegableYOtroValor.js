/*CUANDO LES PIDAN PONER EL AMOUNT APUNTANDO COMO LISTA DESPLEGABLE:

- PARA GOU SIEMPRE SE DEBE CAMBIAR LOS CAMPOS PAGADOR POR COMPRADOR PARA MICROSITIO ABIERTO.
- EL CAMPO AMOUNT DEBEN PONERLO OCULTO.
- DEBEN CREAR UN NUEVO CAMPO PARA LA LISTA DESPLEGABLE Y EN ESE CAMPO DEBEN ANEXAR EL SIGUIENTE SCRIPT:
- DEBEN MANTENER EL CAMPO AMOUNT EN LA VISUALIZACIÓN DE LOS CAMPOS, ESTARÁ OCULTO, PERO A LA ESCUCHA DE CAMBIOS
- DEBEN CREAR UN NUEVO CAMPO PARA CUANDO LA OPCIÓN SEA 'OTRO'.
- EN ESTE CASO PUNTUAL EL COMERCIO PIDIÓ AÑADIR EL NOMBRE AL CAMPO AMOUNT SOBRE DONACIÓN
*/

(function(){
	$('#amount, label[for="amount"]').hide();
    $('#otro_valor, label[for="otro_valor"]').hide();
	
	$('#donation_select').change(function(){
	
		let select = $('#donation_select').value();

        let amount;

        $('#otro_valor').off('input');
        $('#otro_valor, label[for="otro_valor"]').hide();
        
        switch (select) {
            case '19000':
                $('#otro_valor, label[for="otro_valor"]').hide();
                amount = 19000;
                break;
            case '50000':
                $('#otro_valor, label[for="otro_valor"]').hide();
                amount = 50000;
                break;
            case '100000':
                $('#otro_valor, label[for="otro_valor"]').hide();
                amount = 100000;
                break;
            case 'otro':
                $('#otro_valor, label[for="otro_valor"]').show();
                $('#otro_valor').on('input', function() {
                    amount = $(this).value();
                    $('#amount').value(amount);
                    console.log(amount);
                });
                return;
        }

        $('#amount').value(amount);
	});
})();
