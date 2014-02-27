alert("YO");

// Problem 1 (Say Hello!) ---------------------------------------------------
$('#say_hello').click(function() {
  alert('RL GRIME IS GOD')
});


// Problem 2 (Houdini) ------------------------------------------------------
$('#disappear').click(function() {
  $('#houdini_text').hide()
});

$('#reappear').click(function() {
	$('#houdini_text').show()

});


// Problem 3 (Tickle Me Pink) -----------------------------------------------
$('#pink_button').click(function() {
	$('#tickled_text').css('color','pink');
});


// Problem 4 (Greet Me) -----------------------------------------------------
$('#my_name').click(function() {
	$('#my_name').val()
});
