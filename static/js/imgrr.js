// Problem 2 (Peekaboo) ------------------------------------------------------
$('#toggle_img').click(function()  {
	if ($('#toggle_img').text()==='Go Away!') { 
	$('#toggle_img').text('Come Back!') 
	$('#main_img').hide()
} else { 
	$('#main_img').show()
	$('toggle_img').text('Come Back!') }
	
});


// Problem 3 (Swap Em) -----------------------------------------------
$('#change_img').click(function() {
	alert($('#new_img_file').val())
});

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  // WRITE CODE HERE
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
