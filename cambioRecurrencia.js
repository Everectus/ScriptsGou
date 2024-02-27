/*
    CUANDO SOLICITAN CAMBIAR LA RECURRENCIA DE UN MICROSITIO:

- Crear un nuevo campo de tipo selección, este campo llevará el nombre de "recurrent_periodicidad_2", requerido, al cual se le añadirán las siguientes opciones:
	--------------------------------
	|	VALOR	|	DESCRIPCIÓN		|
	|	  5		|	 (5)Anual		|
	|	  1		|	 (1)Diario	  	|
	|	  6		|	 (6)Mensual		|
	|	  2		|	 (2)Semanal		|
	|	  3		|	 (3)Quincenal	|
	|	  4		|	 (4)Trimestral	|
	--------------------------------

    - Posterior a eso le ponen las reglas de validación del campo periodicidad original. 
    - Luego se guardan los cambios de se campo.
    - Luego en el campo "recurrent" deben agregar el siguiente script:
    - recorgar añadir en diseño de campos recurrent_max_periods - recurrent_interval- periodicidad

*/


(function () {

    $('#recurrent_periodicidad_2').hide();
    $('label[for="recurrent_periodicidad_2"]').hide();


    $('#recurrent').change(function () {

        if ($('#recurrent').is(':checked')) {

            $('#recurrent_periodicidad_2').show();
            $('label[for="recurrent_periodicidad_2"]').show();

            $('#recurrent_max_periods').hide();
            $('label[for="recurrent_max_periods"]').hide();
            $('#recurrent_interval').hide();
            $('label[for="recurrent_interval"]').hide();
            $('#recurrent_periodicity').hide();
            $('label[for="recurrent_periodicity"]').hide();

        }
    })

    $('#recurrent_periodicidad_2').change(function () {

        let periodicidad = $('#recurrent_periodicity').value();
        let Intervalo = $('#recurrent_interval').value();
        let recurrent_periodicidad_2 = $('#recurrent_periodicidad_2').value();
        switch (recurrent_periodicidad_2) {
            case "1":
                    periodicidad = $('#recurrent_periodicity').value("D");
                    Intervalo = $('#recurrent_interval').value(1);
                    $('#recurrent_max_periods').value('365');
                    console.log('exito')
                break;
            case "2":
                    periodicidad = $('#recurrent_periodicity').value("D");
                    Intervalo = $('#recurrent_interval').value(7);
                    $('#recurrent_max_periods').value('208');
                break;
            case "3":
                    periodicidad = $('#recurrent_periodicity').value("D");
                    Intervalo = $('#recurrent_interval').value(15);
                    $('#recurrent_max_periods').value('120');
                break;
            case "4":
                    periodicidad = $('#recurrent_periodicity').value("M");
                    Intervalo = $('#recurrent_interval').value(3);
                    $('#recurrent_max_periods').value('20');
                break;
            case "5":
                    periodicidad = $('#recurrent_periodicity').value("Y");
                    Intervalo = $('#recurrent_interval').value(1);
                    $('#recurrent_max_periods').value('5');
                break;
            case "6":
                    periodicidad = $('#recurrent_periodicity').value("M");
                    Intervalo = $('#recurrent_interval').value(1);
                    $('#recurrent_max_periods').value('60');
                break;
        }

    })
})();
