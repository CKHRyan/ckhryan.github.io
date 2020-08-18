
window.onload = function(){
	var width = document.getElementById("main").getBoundingClientRect().width;
	adjustStyle(width);
	console.log(window.location.pathname);
	if (window.location.pathname.includes("index.html")) {
		updateDate();
	}
}


function helloworld() {
	alert("helloworld!");
}

function updateDate() {
	document.getElementById('rbdays').innerHTML = getDate();
}

function getDate() {
	return Math.floor((new Date() - new Date(2019, 5, 5)) / 86400000) + 1;
}

function adjustStyle(width) {
	console.log(width);
	if (width < 750) {
		console.log("mobile");
		$("#size-stylesheet").attr("href", "bodiary_mb.css");
	} else {
		console.log("device");
		$("#size-stylesheet").attr("href", "bodiary_pc.css"); 
	}
}
	