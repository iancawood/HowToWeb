$(document).ready(function() {
	console.log("This will run when all elements have been loaded and the page is ready.");

	$(".select-me").text("This text was added using jQuery."); // this is a standard jQuery select.

	$(".center div").html("<h4>BROOOOO!!!! HOW??!!?!?</h4>"); // you can also do cool shit like this

	$('.my-carousel').owlCarousel({
		loop:true,
		margin:10
	})
});