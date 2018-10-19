// Animate Smooth Scroll
$('#view-work').on('click', function() {
	const images = $('#images').position().top;

	$('html, body').animate(
    {
		scrollTop: images
    },
    900
	);
});

$(document).ready(function() {
	$(window).scroll(function()
	{
		if($(this).scrollTop()>100)
		{
			$('#scroll').fadeIn();
		}
		else
		{
			$('#scroll').fadeOut();
		}
	});
		$('#scroll').click(function()
		{
			$('html, body').animate(
			{
				scrollTop: 0
			}
			600);
			return false;
		});
});
