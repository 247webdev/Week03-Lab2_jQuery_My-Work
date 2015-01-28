$(document).ready(function(){

	$('form').on('submit', function(e){
		var toDoItem = $('input[type=text').val();
		if( toDoItem.length === 0 ){
			e.preventDefault();
			return;
		} else {
			$('ul').append('<li><input type="checkbox">' + toDoItem + '<button type="button">X</button></li>');
			$('#newToDo').focus().val("");
		}
	});

	$('body').on('click', 'input[type=checkbox]', function(e){
		$(this).parent().toggleClass('strikeThrough');
		$(this).next().removeClass('strikeThrough');
	});

	$('body').on('click', 'button', function(e){
		// console.log(this);
		$(this).parent().remove();
	});

});