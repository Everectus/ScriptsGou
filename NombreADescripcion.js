//Cuando soliciten dejar el nombre como descripción.

//Añadir el siguiente script en el campo de buyer_name.

(function(){
	$('#description').hide();
      $('label[for="description"]').hide();
	
	$('#buyer_name').change(function(){
	
		let name = $('#buyer_name').value();
	
		$('#description_hidden').text(name);
		$('#description').value(name);
		$('#description').prop('type','hidden');
	});
})();