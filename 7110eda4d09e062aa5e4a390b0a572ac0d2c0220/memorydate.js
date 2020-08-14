
window.onload = function() {
	var width = document.getElementById("main").getBoundingClientRect().width;
	adjustStyle(width);
	console.log(window.location.pathname);
	var rbnth100d = Math.ceil(getcurDate() / 100);
	for(var i = rbnth100d; i < rbnth100d + 31; i++) {
		var comingRBDays = getnthDate(i * 100);
		document.getElementById('memorytable').innerHTML += (i * 100) + "th Day: "
		document.getElementById('memorytable').innerHTML += dateformater(comingRBDays);
		document.getElementById('memorytable').innerHTML += "<br>";
	}
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

function getcurDate() {
	return Math.floor((new Date() - new Date(2019, 5, 5)) / 86400000) + 1;
}

function getnthDate(n) {
	var rb_1st = new Date(2019, 5, 5);
	return new Date(rb_1st.getTime() + (n - 1)  * 86400000)
}

var month_name = ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function dateformater(date) {
	var dateindicator;
	switch (date.getDate()) {
		case 1:
		case 21:
		case 31:
			dateindicator = "<sup>st</sup>";
			break;
		case 2:
		case 22:
			dateindicator = "<sup>nd</sup>";
			break;
		case 3:
		case 23:
			dateindicator = "<sup>rd</sup>";
			break;
		default:
			dateindicator = "<sup>th</sup>";
	}
	return [date.getDate()+dateindicator,month_name[date.getMonth()],date.getFullYear()].join(' ');
}