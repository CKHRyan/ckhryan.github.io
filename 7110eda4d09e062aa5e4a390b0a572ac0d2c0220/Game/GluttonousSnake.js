window.onload = function(){
	var width = document.getElementById("main").getBoundingClientRect().width;
	adjustStyle(width);
	console.log(window.location.pathname);
}

function adjustStyle(width) {
	console.log(width);
	if (width < 750) {
		console.log("mobile");
		$("#size-stylesheet").attr("href", "../bodiary_mb.css");
	} else {
		console.log("device");
		$("#size-stylesheet").attr("href", "../bodiary_pc.css"); 
	}
}
	

var headblock;
var mySnake;
var myApple;
var court = document.getElementById('Court')
court_height = 450;
court_width = 600;

const greenblock = "width:30px; height:30px; background: green; border: 3px solid DarkGreen; position: absolute;";
const redblock = "width:20px; height:20px; background: red; border: 3px solid DarkRed; position: absolute;";

document.addEventListener('keydown', (event) => SnakeController(event.keyCode));

function startGame() {
	mySnake = new SnakeStack();
	grow();
	myApple = new Apple();
}	

function clearGame() {
	clearInterval(mySnake.action);
	myApple = null;
	headblock = null;
	mySnake = null;
	court.innerHTML = "";
	document.getElementById('apple_count').innerHTML = 0;
}

class SnakeStack {
	constructor() {
		this.Snake = [];
		var moveSnake = this.moveSnake.bind(this);
		this.action = setInterval(moveSnake, 200);
	}
	push(element) {
		this.Snake.push(element);
	}
	pop() {
		return this.Snake.pop();
	}
	peek() {
		if (this.Snake.length > 0) {
			return this.Snake[this.Snake.length - 1];
		}
		else {
			return null;
		}
	}
	isEmpty() {
		return this.Snake.length === 0;
	}
	clear() {
		this.Snake = [];
	}
	size() {
		return this.Snake.length;
	}
	print() {
		console.log(this.Snake.toString());
	}
	
	moveSnake() {
		if (this.Snake.length > 0) {
		for(var i = this.Snake.length - 1; i > 0; i--) {
			var frontVector = this.Snake[i - 1].getBlockVector();
			this.Snake[i].setBlockVector(frontVector[0], frontVector[1]);
			this.Snake[i].model.style.left = this.Snake[i - 1].model.style.left;
			this.Snake[i].model.style.top = this.Snake[i - 1].model.style.top;
		}
		this.Snake[0].head_move();
		this.isEat();
		this.isDead();
		}
	}
	
	isDead() {
		var die = false;
		var head_y = pxStrToInt(this.Snake[0].model.style.top);
		var head_x = pxStrToInt(this.Snake[0].model.style.left);
		if (head_y < 0 || head_y >= court_height || head_x < 0 || head_x >= court_width)
			die = true;
		for(var i = 3; i < this.Snake.length && die == false; i++) {
			if (this.Snake[0].model.style.top == this.Snake[i].model.style.top && 
				this.Snake[0].model.style.left == this.Snake[i].model.style.left) {
					die = true;
				}
		}
		if(die) {
			alert("The snake dies\nIt eats apples " + this.Snake.length + " in total!");
			clearGame();
		}
	}
	
	isEat() {
		var eat = false;
		for(var i = 0; i < this.Snake.length; i++) {
			if (pxStrToInt(this.Snake[i].model.style.top) == myApple.y && 
				pxStrToInt(this.Snake[i].model.style.left) == myApple.x) {
					eat = true;
					break;
				}
		}
		if(eat) {
			myApple.trans();
			grow();
			document.getElementById('apple_count').innerHTML = this.Snake.length - 1;
		}
	}
}

class Block {

	constructor(block_id) {
		this.id = block_id;
		this.model =  document.getElementById(this.id);
		this.vectorX = 0;
		this.vectorY = 0;
		this.tail = null;
	}
	
	setBlockVector(y, x) {
		this.vectorY = y;
		this.vectorX = x;
	}
	
	getBlockVector() {
		return [this.vectorY, this.vectorX];
	}

	head_move() {
		if(this.vectorY!=0) {
			this.move_vertical(this.vectorY);
		}
		if(this.vectorX!=0) {
			this.move_horizontal(this.vectorX);
		}
	}
	
	move_vertical(val) {
		this.model.style.top = pxStrCal(this.model.style.top, val);
	}
	
	move_horizontal(val) {
		this.model.style.left = pxStrCal(this.model.style.left, val);
	}
	
}

function SnakeController(code) {
	if (mySnake == null) {
		return;
	}
	switch(code) {
	case 37:
		console.log('Left was pressed');
		if (headblock.vectorX <= 0) {
			headblock.setBlockVector(0, -30);
		}
		break;
	case 38:
		console.log('Up was pressed');
		if (headblock.vectorY <= 0) {
			headblock.setBlockVector(-30, 0);
		}
		break;
	case 39:
		console.log('Right was pressed');
		if (headblock.vectorX >= 0) {
			headblock.setBlockVector(0, 30);
		}
		break;
	case 40:
		console.log('Down was pressed');
		if (headblock.vectorY >= 0) {
			headblock.setBlockVector(30, 0);
		}
		break;
	}
}

function grow() {
	console.log("Growing");
	var block_model = document.createElement("div"); 
	block_model.id = "b" + (mySnake.size() + 1).toString();
	block_model.style = greenblock;
	court.appendChild(block_model);
	var frontblock = mySnake.peek();
	var grownblock;
	if(frontblock == null) {
		block_model.style.top = "240px";
		block_model.style.left = "300px";
		headblock = grownblock = new Block(block_model.id);
	}
	else {
		block_model.style.top = pxStrCal(frontblock.model.style.top, -frontblock.vectorY);
		block_model.style.left = pxStrCal(frontblock.model.style.left, -frontblock.vectorX);
		grownblock = new Block(block_model.id);
		mySnake.peek().tail = grownblock;
	}
	console.log(block_model.id);
	mySnake.push(grownblock);
}

function check() {
	alert(mySnake.size());
}

class Apple {
	constructor() {
		this.apple_model = null;
		this.spawn();
	}
	
	spawn() {
		this.apple_model = document.createElement("div"); 
		this.apple_model.id = "apple";
		this.apple_model.style = redblock;
		court.appendChild(this.apple_model);
		this.trans();
	}
	
	trans() {
		this.x = Math.floor(Math.random()*20)*30;
		this.y = Math.floor(Math.random()*15)*30;
		this.apple_model.style.top = (this.y + 5).toString() + "px";
		this.apple_model.style.left = (this.x + 5).toString() + "px";
		console.log("Apple x: " + this.apple_model.style.left);
		console.log("Apple y: " + this.apple_model.style.top);
	}
}

function pxStrToInt(pxStr) {
	return parseInt(pxStr.slice(0, -2));
}

function pxStrCal(pxStr, val) {
	return (pxStrToInt(pxStr) + val).toString() + 'px';
}