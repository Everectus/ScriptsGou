/*
    En caso tal de que un comercio les indique que deben atar varios sitios al mismo micrositio, lo realizan desde la creación del micrositio, 
    luego se les habilitará un nuevo campo en la vista del micrositio con el nombre de sitio, ya será funcional la lista desplegable para escoger con cual sitio procesar.

    Si deben cambiar la descripción del pago lo pueden realizar con el siguiente código:
    El Case corresponde al Id del sitio en panel.
    
    Deben añadirlo a cualquier campo requerido del micrositio.
*/

(function () {

    $('label[for="site_id"]').html("Concepto de pago");
    
    
    $('#site_id').change(function (){
        
        let listVal =  $(this).value();

        switch(listVal){
            case "1509":
                $('#description').value("Alumbrado Público");
                $('#description').prop('type', 'hidden');
                break;

            case "1776":
                $('#site_id').value("Espectáculo Público Impuesto Municipal");
                $('#description').prop('type', 'hidden');
                break;
        };
    });

})();


//Si solamente les piden cambiar el nombre del campo sitio, lo pueden hacer con el siguiente script

(function () {

    $('label[for="site_id"]').html("Concepto de pago");

})();
