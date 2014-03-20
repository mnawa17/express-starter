$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });


  //---------------------------------------------------------------------------
 
 
$("#p1").click(function() {
 	context.strokeRect(20, 20, 150, 120);
 });