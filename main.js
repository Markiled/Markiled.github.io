// Animate Smooth Scroll
$('#whats-new').on('click', function() {
	const images = $('#images').position().top;
	
	$('html, body').animate(
		{
			scrollTop: images
		},
		900
	);
});