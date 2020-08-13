
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

function loadabc() {
		alert(google.script.run.doget());
	}
	
	function loadExcel() {
		alert("Request sent");
		
		$.ajax({
		  url: "https://script.google.com/macros/s/AKfycbze1j2R4y_jffgPxLinwx7gJPMOMsBLq2Vlq5vqtP-kxo-Xd0M/exec",
		  type: "GET",
		  dataType: "json",
		  async: false,
			beforeSend: function(x) {
				if(x && x.overrideMimeType) {
				   x.overrideMimeType("application/j-son;charset=UTF-8");
				}
			},
		  success: function(Jdata) {
			printFoodTable(Jdata);
		  },
		  
		  error: function() {
			alert("ERROR!!!");
		  }
		});
	}

	function printFoodTable(rtr_obj) {

		$("#foodtable")
			.find("tr")
			.remove()
			.end();

		var table = $('#foodtable table');

		$.each(rtr_obj, function(){
			table.append(
				$('<tr style = "background-color: #CCCCCC; margin-top: 10px;"></tr>').append(
					$('<td></td>').text(this.District),
				)
			);
			$.each(this.Details, function(){
				table.append(
					$('<tr></tr>').append(
						$('<td></td>').text(this.Name),
						$('<td></td>').text(this.Address),
						$('<td></td>').text(this.Cuisine),
						$('<td></td>').text(this.PriceRange)
					)
				);
			});
		});
	}