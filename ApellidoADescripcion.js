(function(){
	$('#description').hide();
      $('label[for="description"]').hide();
	
	$('#buyer_surname').change(function(){
	
		let name = $('#buyer_surname').value();
	
		$('#description_hidden').text(name);
		$('#description').value(name);
		$('#description').prop('type','hidden');
	});
})();
