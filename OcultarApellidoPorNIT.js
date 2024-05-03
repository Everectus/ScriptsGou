//Añadir el script al campo "buyer_id_type".
//Dejar el buyer_surname como opcional.

$('#buyer_id_type').change(function () {
        let tipo = $('#buyer_id_type').value();
        if (tipo === "NIT") {
            $('#buyer_surname').hide();
            $('label[for="buyer_surname"]').hide();
            $('#buyer_surname').value("");
        } else {
            $('#buyer_surname').show();
            $('label[for="buyer_surname"]').show();
        }
    });

//Si les indican que el campo buyer_surname debe quedar obligatorio cuando aparezca, deben crear un campo nuevo para que en ese se ponga la regla que diga que es obligatorio si "required_if:campo,value".
//Por script deben pasar los datos de ese nuevo campo al campo buyer_surname.
