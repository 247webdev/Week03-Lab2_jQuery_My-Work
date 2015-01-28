$(document).ready(function(){

	$( "*" ).removeClass( "hilite" );

	$('form').on('submit', function(e){

		var toDoItem = $('input[type=text').val();

		if( toDoItem.length === 0 ){
			e.preventDefault();
			return;
		} else {
			$('ul').append('<li><input type="checkbox">' + toDoItem + '<button type="button">X</button></li>');
			$('#newToDo').focus().val("");

//this line doesn't work by itself  $('ul').children().last().append( '<li><input type="checkbox">' + toDoItem + '</li>' );
// if( $('ul').children().length === 0 ){
// 	$('ul').append('<li><input type="checkbox">'+ toDoItem +'</li>');
// } else {
// 	$('ul').children().last().append( '<li><input type="checkbox">' + toDoItem + '</li>' );
// }
		}

		// css('background', $('#newEvenColor').val() );


	});
//on adds, check if .html() === ""
	//if "" use .html('<li>something</li>')
	//else use $('ul').children().first().append('<li>something</li>')


//clicking a todo item allows that todo to be struck thru   
	$('body').on('click', 'input[type=checkbox]', function(e){  // 'body' is now a delegate and the click is looking for a click on a button 
		// console.log(this);
		$(this).parent().toggleClass('strikeThrough');
//			alert("hi!");
	});
	$('body').on('click', 'button', function(e){  // 'body' is now a delegate and the click is looking for a click on a button 
		// console.log(this);
		$(this).parent().remove();
	});
});

//		console.log( "toDoItem " +toDoItem );
