var tableindex = Math.ceil(getcurDate() / 100);
var month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

window.onload = function() {
	var width = document.getElementById("main").getBoundingClientRect().width;
	adjustStyle(width);
	console.log(window.location.pathname);
	printnth100dTable(tableindex);
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

function toNextnth100Table() {
	tableindex += 3;
	printnth100dTable(tableindex);
}

function printnth100dTable(n) {
	for(var i = 1; i <= 3; i++) {
		document.getElementById('memoryitem_'+i).innerHTML = "";
		var comingRBDays = getnthDate((n + i - 1) * 100);
		document.getElementById('memoryitem_'+i).innerHTML += "<b style='font-size:42px;'>" + ((n + i - 1) * 100) + "th</b> Day<br>"
		document.getElementById('memoryitem_'+i).innerHTML += "<i>" + dateformater(comingRBDays) + "</i>";
	}
}

function toPrevnth100Table(n) {
	if(tableindex <= 1) {
		return;
	}
	if(tableindex -= 3 < 1) {
		tableindex = 1;
	}
	printnth100dTable(tableindex);
}