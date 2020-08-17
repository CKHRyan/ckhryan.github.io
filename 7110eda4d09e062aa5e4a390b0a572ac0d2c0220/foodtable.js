
var restaurant_obj;

window.onload = function() {
	var width = document.getElementById("main").getBoundingClientRect().width;
	adjustStyle(width);
	console.log(window.location.pathname);
	loadExcel();
		//document.getElementById("foodtable_loadbar").style.display = "none";
		//document.getElementById("foodtable_loadspinner").style.display = "none";
		//document.getElementById("foodtable_option").style.display = "block";
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
	

function loadExcel() {
	$.ajax({
	  url: "https://script.google.com/macros/s/AKfycbze1j2R4y_jffgPxLinwx7gJPMOMsBLq2Vlq5vqtP-kxo-Xd0M/exec",
	  type: "GET",
	  dataType: "json",
	  async: true,
		beforeSend: function(x) {
			if(x && x.overrideMimeType) {
			   x.overrideMimeType("application/j-son;charset=UTF-8");
			}
			console.log('Request sent.');
		},
	  success: function(Jdata) {
		console.log(Jdata);
		restaurant_obj = Jdata;
		document.getElementById("foodtable_loadbar").style.display = "none";
		document.getElementById("foodtable_loadspinner").style.display = "none";
		document.getElementById("foodtable_option").style.display = "block";
	  },
	  
	  error: function() {
		alert("ERROR!!!");
	  }
	});
	
}

function printFoodTable(region) {
	
	if (restaurant_obj == null)
		return;

	var ft = document.getElementById('foodtable').getElementsByTagName('table')[0];
	while(ft.hasChildNodes())
	{
	   ft.removeChild(ft.firstChild);
	}
	
	var district_rt_obj;
	var district_color = [];
	switch(region) {
		case "HK":
			district_rt_obj = restaurant_obj["Hong Kong Island"];
			district_color.push("#15acee");
			district_color.push("#d3e9fe");
			break;
		case "KL":
			district_rt_obj = restaurant_obj["Kowloon"];
			district_color.push("#ff4d4d");
			district_color.push("#ffb3b3");
			break;
		case "NT":
			district_rt_obj = restaurant_obj["New Territories"];
			district_color.push("#6fd624");
			district_color.push("#d4ffb8");
			break;
		default:
			console.log("The region is not valid");
			return;
	}

	for (var dt in district_rt_obj) {
		var row = ft.insertRow(ft.rows.length);
		row.style = "background-color: " + district_color[0] + "; line-height: 30px;";
		row.insertCell(0).innerHTML = dt;
		for (var rt in district_rt_obj[dt]) {
			var row = ft.insertRow(ft.rows.length);
			row.style = "background-color: " + district_color[1] + "; line-height: 25px;";
			row.insertCell(0).innerHTML = district_rt_obj[dt][rt].Name;
			row.insertCell(1).innerHTML = district_rt_obj[dt][rt].Address;
			row.insertCell(2).innerHTML = district_rt_obj[dt][rt].Cuisine;
			row.insertCell(3).innerHTML = district_rt_obj[dt][rt].PriceRange;
		}
	} 
}