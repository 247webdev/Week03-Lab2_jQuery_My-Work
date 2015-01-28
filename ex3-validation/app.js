$(document).ready(function(){
	function showWarning(x){
		$('#warningMessage').removeClass('off').html(x);	
	}
	function hideWarning(x){
		$('#warningMessage').addClass('off').html(x);
	}

	$('input[type=password]').keydown( function(e){
		var passLength = $('input[type=password]').val().length;
		if( passLength < 6 ){
			$('#warningMessage').hasClass('off') ? showWarning(passLength) : void(0) ;
		} else {
			!$('#warningMessage').hasClass('off') ? void(0) : showWarning(passLength) ;
		}
		//showWarning()
	});

	$('input[type=password]').submit( function(e){
		if( true ){
			console.log("inside submit");
		}
	});

	//$(this).filter(".block-left").addClass('fadeInLeft');
// $(this).filter(".block-right").addClass('fadeInRight');



	// $();

	// $('body').html("please enter a password");



	// });

	// 	if($('input[type=text').val().length === 0 ){
	// 		e.preventDefault();
	// 		return;
	// 	}

	// 	$('tbody tr:even').css('background', $('#newEvenColor').val() );




	// $('#odd').on('submit', function(e){

	// 	if($('input[type=text').val().length === 0 ){
	// 		e.preventDefault();
	// 		return;
	// 	}

	// 	$('tbody tr:odd').css('background', $('#newOddColor').val() );

	// });

});