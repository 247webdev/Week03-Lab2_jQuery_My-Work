$(document).ready(function(){
	$('#even').on('submit', function(e){

		if($('input[type=text').val().length === 0 ){
			e.preventDefault();
			return;
		}

		$('tbody tr:even').css('background', $('#newEvenColor').val() );

	});
	$('#odd').on('submit', function(e){

		if($('input[type=text').val().length === 0 ){
			e.preventDefault();
			return;
		}

		$('tbody tr:odd').css('background', $('#newOddColor').val() );

	});

});