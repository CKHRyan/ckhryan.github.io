if (!window.location.href.substring(0, 8).includes("https://") && !window.location.href.substring(0, 7).includes("http://")) {
	alert("The web pages can be viewed until uploaded to the Internet");
	window.stop();
}