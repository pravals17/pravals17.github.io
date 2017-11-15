var mainWrapper = document.getElementById("main-wrapper");


var gameworld = document.createElement("div");
gameworld.setAttribute('id','gameworld');
gameworld.style.width = "500px";
gameworld.style.height = "500px";
gameworld.style.background = "red";
gameworld.style.background = "url('background.png')";
gameworld.style.backgroundRepeat = "repeat-y";
gameworld.style.position = "relative";


var btn = document.createElement("Button");
btn.innerHTML = "Play Again";
btn.onclick = function(){location.reload()};
mainWrapper.appendChild(btn);

mainWrapper.appendChild(gameworld);

//Player car object
function player(){
	this.x=50;
	this.y=450;
	this.dx = 0;
		var that = this;
		this.init = function(){
			that.playerdiv = document.createElement("div");
			that.playerdiv.style.width = "50px";
			that.playerdiv.style.height = "50px";
			that.playerdiv.style.background = "url('playercar1.png')";
			that.playerdiv.style.backgroundSize = "cover";
			that.playerdiv.style.top = that.y +"px";
			that.playerdiv.style.left = that.x+"px";
			that.playerdiv.style.position = "absolute";
			gameworld.appendChild(that.playerdiv);
			mainWrapper.appendChild(gameworld);
		}
		
		this.movePlayer = function(){
			
			that.x = that.x + that.dx;
			//that.y = 450;	
			that.playerdiv.style.top = that.y +"px";
			that.playerdiv.style.left = that.x + "px";
			
		}
		this.detectcollision = function(obj1, obj2){
			if((obj1.x +50 > obj2.x)&&(obj1.x<obj2.x+50)&&(obj1.y < obj2.y+50))
			{
				return(true);
						
			}
			else
			{
				return(false);
			}
		}
	
}

//Obstacle cars
function obstacles(){
	this.x = 50;
	this.y = 0;
	this.dx = 0;
	this.dy = 3;
	var that = this;
		this.init = function(left){
			that.x=left;
			that.obstaclesdiv = document.createElement("div");
			that.obstaclesdiv.style.width = "50px";
			that.obstaclesdiv.style.height = "50px";
			that.obstaclesdiv.style.background = "url('enemycar2.png')";
			that.obstaclesdiv.style.backgroundSize = "cover";
			that.obstaclesdiv.style.top = that.y +"px";
			that.obstaclesdiv.style.left = that.x+"px";
			that.obstaclesdiv.style.position = "absolute";
			gameworld.appendChild(that.obstaclesdiv);
			mainWrapper.appendChild(gameworld);
			}
			
			this.moveObstacle = function(){
				that.y = that.y + that.dy;
				that.obstaclesdiv.style.left = that.x +"px";
				that.obstaclesdiv.style.top = that.y + "px";
				if (that.y>=450){
					obstaclearray.splice(obstaclearray.indexOf(that));
					gameworld.removeChild(that.obstaclesdiv)
					}

			}
			
}

//Bullet objects
function bullet(){
	this.x = 50;
	this.y = 450;
	this.dy = -5;
	var that = this;
	that.init = function(left){
		    that.x = left;
			that.bulletdiv = document.createElement("div");
			that.bulletdiv.style.width = "20px";
			that.bulletdiv.style.height = "20px";
			that.bulletdiv.style.background = "url('bullet.png')";
			that.bulletdiv.style.backgroundSize = "100% 100%";
			that.bulletdiv.style.top = that.y +"px";
			that.bulletdiv.style.left = that.x+"px";
			that.bulletdiv.style.position = "absolute";
			gameworld.appendChild(that.bulletdiv);
			console.log("bullets bullets bullets");
	}
	this.movebullet = function(){
		that.y = that.y + that.dy;
		that.bulletdiv.style.left = that.x +"px";
		that.bulletdiv.style.top = that.y + "px";
		if (that.y< 0){
				bulletarray.splice(bulletarray.indexOf(that));
				gameworld.removeChild(that.bulletdiv)
				}
		}
	
	this.bulletcollision = function(obj1,obj2){
		if((obj1.x +50 > obj2.x)&&(obj1.x<obj2.x+50)&&(obj1.y < obj2.y+50))
					{
						return(true);
						
					}
					else
					{
						return(false);
					}
	}
}

//defining variables
var playercar = new player();
var flag;
var counter = 0;
var bulletarray = [];
var bulletobject;
var obstaclecar;
var obstaclearray = [];	

playercar.init();

document.onkeydown = function(event){
	console.log("inside playermove");
	switch(event.keyCode){
		case 37:
			if(playercar.x == 50){
				playercar.dx = 0;
			}
			else{
				playercar.dx = - 170;
			}
			
			playercar.movePlayer();
			
			break;
			
		case 39:
			if(playercar.x == 390){
				playercar.dx = 0;
			}
			else{
				playercar.dx =  170;
			}
			playercar.movePlayer();
			break;
		
		case 38:
		if(bulletarray.length == 0){
			bulletobject = new bullet();
			bulletobject.init(playercar.x);
			bulletarray.push(bulletobject);
		}
			
			
			
			
		default:
			playercar.dx = 0;
		}
	}
	
	
	
//obstacles at a regular interval
var createobstacles = setInterval(function(){
	obstaclecar = new obstacles();
	var rand = Math.floor(Math.random()*500)+1;
	console.log(rand);
	var rem = (rand%50);
	var left;
	if (rem<17){left = 50}
	else if (rem<34){left=220}
	else{left = 390}
	
	obstaclecar.init(left);
	obstaclearray.push(obstaclecar);
	},2000)
	
//All motion objects in the set interval	
var clearalert = setInterval(function(){
	counter=counter+1;
	gameworld.style.backgroundPosition = 0+'px'+' '+counter+'px';
	gameworld.style.backgroundRepeat = "repeat-y";
	console.log("inside backgroundscroll");
		
	for(let i =0; i<obstaclearray.length;i++)
	{
		obstaclearray[i].moveObstacle();
		if(obstaclearray[i]){	
			if(playercar.detectcollision(playercar,obstaclearray[i]))
			{
				clearInterval(createobstacles);
				clearInterval(clearalert);
				document.onkeydown = null;
			}
		}
		
		if(bulletarray[i])
		{
			bulletarray[i].movebullet();
		}
		
		if(bulletarray[i]){
			if(bulletobject.bulletcollision(bulletarray[i], obstaclearray[i]))
			{
				gameworld.removeChild(this.obstaclecar.obstaclesdiv);
				obstaclearray.splice(obstaclearray.indexOf(this));
				gameworld.removeChild(this.bulletobject.bulletdiv);
				bulletarray.splice(bulletarray.indexOf(this));
			}
		}
			
	}}, 9);
		