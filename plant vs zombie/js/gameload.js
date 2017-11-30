const canvas = document.getElementById('mycanvas');
const context = canvas.getContext('2d');
function gameload(){
	
	canvas.style.display = "none";
	var menu = document.getElementById("main-wrapper");
	menu.style.background = "url('images/menu.png')";
	menu.style.height = "601px";
	menu.style.width = "945px";
	var playagain = document.getElementById("playagain");
	playagain.style.display = "none";
	var play = document.createElement("button");
	play.innerHTML="Play";
	play.style.width = "113px";
	play.style.height = "41px";
	play.style.background = "url('images/Button.png')";
	play.style.position = "absolute";
	play.style.top = "250px";
	play.style.left = "400px";
	menu.appendChild(play);
	console.log("Hello"); 
	play.onclick = function(){
		//init();
		playagain.style.display = "none";
		play.style.background = "none";
		play.style.display = "none";
		menu.style.background = "none";
		canvas.style.display = "block";
		gamestart = Date.now();
		zombie = new Zombie(context);
		animate();
		zombiearray.push(zombie);
	}
}

gameload();

