function copyEmail(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("Copy");
	$temp.remove();
	alert("Copied to clipboard: " + copyText.value);
}