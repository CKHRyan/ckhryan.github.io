var focus_item;
var planjson;
var isModifiable = false;
var ref;
var planRef;

window.onload = async function() {
	var width = document.getElementById("main").getBoundingClientRect().width;
	adjustStyle(width);
	console.log(window.location.pathname);
	if (window.location.pathname.includes("index.html")) {
		updateDate();
	}
	
  	var firebaseConfig = {
	    apiKey: "AIzaSyAA_vsyVyw3z6IJF5Rl9uq3xOyx1zFeZmY",
	    authDomain: "test-f7cbe.firebaseapp.com",
	    databaseURL: "https://test-f7cbe.firebaseio.com",
	    projectId: "test-f7cbe",
	    storageBucket: "test-f7cbe.appspot.com",
	    messagingSenderId: "393255938266",
	    appId: "1:393255938266:web:7d55dfb04a5993b1a79de3"
  	};

	firebase.initializeApp(firebaseConfig);
	ref = firebase.database().ref();
	planRef = firebase.database().ref("plan/");
	  
	ref.on("value", function(snapshot) {
		console.log(snapshot.val());
		planjson = snapshot.val();
		printplanTable();
	}, function (error) {
		console.log("Error: " + error.code);
	});
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
	

document.addEventListener("click", function(e){
	if(e.target.id.substring(0, 5) != "list_" && e.target.id != "edit" && e.target.id != "del") {
		document.getElementById("edit").style.opacity = "0.5";
		document.getElementById("del").style.opacity = "0.5";
		document.getElementById("edit").disabled = true;
		document.getElementById("del").disabled = true;
		if (focus_item != null) {
			unselectItem(focus_item);
		}
	}
	else if (e.target.id.substring(0, 5) == "list_") {
		document.getElementById("edit").style.opacity = "1";
		document.getElementById("del").style.opacity = "1";
		document.getElementById("edit").disabled = false;
		document.getElementById("del").disabled = false;
		focus_item = parseInt(e.target.id.substring(5, e.target.id.length));
		//console.log("select item: " + focus_item);
	}
});

function postToDB() {
	var addevent = prompt("Add new event: ", "");
	if(addevent == null || addevent == "") {
		return;
	}
	
	if(planjson == null || !("plan" in planjson)) {
		ref.set({"plan":[addevent]})
	}
	else {
		planjson.plan.push(addevent);
	}
	updateDB(planjson.plan);
}

function clearDB() {
	//planjson.plan = [];
	if (confirm("Do you ensure to clear the list?")) {
		planRef.set([]);
		printplanTable();
	}
}

function deleteDB() {
	if (!isModifiable || focus_item == null) {
		return;
	}
	if (confirm("Do you ensure to delete this item?")) {
		planjson.plan.splice(focus_item, 1);
		updateDB(planjson.plan);
		printplanTable();
	}
		document.getElementById("edit").style.opacity = "0.5";
	document.getElementById("del").style.opacity = "0.5";
	document.getElementById("edit").disabled = true;
	document.getElementById("del").disabled = true;
	unselectItem(focus_item);
}

function editDB() {
	if (!isModifiable || focus_item == null) {
		return;
	}
	var newVal = prompt("Change value to: ", document.getElementById("list_"+focus_item).innerHTML.substring(3, document.getElementById("list_"+focus_item).innerHTML.length));
	document.getElementById("edit").style.opacity = "0.5";
	document.getElementById("del").style.opacity = "0.5";
	document.getElementById("edit").disabled = true;
	document.getElementById("del").disabled = true;
	if(newVal == null) {
		return;
	}
	else {
		planjson.plan[focus_item] = newVal;
		updateDB(planjson.plan);
	}
	unselectItem(focus_item);
}

function updateDB(newData) {
	planRef.set(newData);
}

function setModifiable(val) {
	isModifiable = val;
	if(val == true) {
		document.getElementById("mod").innerHTML = "Leave Edit";
		document.getElementById("edit").style.visibility = "visible";
		document.getElementById("del").style.visibility = "visible";
		document.getElementById("plan").className = "planlist";
	}
	else {
		document.getElementById("mod").innerHTML = "Edit Mode";
		document.getElementById("edit").style.visibility = "hidden";
		document.getElementById("del").style.visibility = "hidden";
		document.getElementById("plan").className = "planlist_fix";
	}
}

function unselectItem(index) {
	if (index == null) {
		console.log("No focused item is found.");
		return;
	}
	focus_item = null;
	document.getElementById("list_" + index).style.background = null;
}

function selectItem(index) {
	if (focus_item != null) {
		unselectItem(focus_item);
	}
	focus_item = index;
	document.getElementById("list_" + index).style.background = "#E0E0E0";
}

function printplanTable() {
	var ft = document.getElementById('plan');
	if (planjson == null) {
		ft.innerHTML = ""; 
		return;
	}
	var ft = document.getElementById('plan');
	ft.innerHTML = ""; 
	for (x in planjson.plan) {
		ft.innerHTML += "<button id='list_" + x + "' class='planelement list-group-item' onclick=selectItem(" + x + ")>" + (parseInt(x)+1) + ". " + planjson.plan[x] + "</button>";
	}
}