function copyEmail(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("Copy");
	alert("Copied to clipboard: " + $temp);
	$temp.remove();
}