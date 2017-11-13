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
						//console.log("true");
						return(true);
						
					}
					else
					{//console.log("false");
						return(false);}
						//(rightA>leftB)&&(leftA<rightB)&&(bottomA>topB)&&(topA<bottomB)
				}
	
}

var playercar = new player();
playercar.init();

var counter = 0;
var backgroundScroll=setInterval(function(){
		counter=counter+1;
		gameworld.style.backgroundPosition = 0+'px'+' '+counter+'px';
		gameworld.style.backgroundRepeat = "repeat-y";
			console.log("inside backgroundscroll");
	}, 10)

var playerMove = setInterval(function(){
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
			clearInterval(playerMove);
			break;
			
			case 39:
			if(playercar.x == 390){
				playercar.dx = 0;
			}
			else{
				playercar.dx =  170;
			}
			//playercar.dx = 170;
			playercar.movePlayer();
			clearInterval(playerMove);
			break;
			
			default:
			playercar.dx = 0;
		}
	}
	//playercar.movePlayer();
	},10);
	
	
function obstacles(){
	this.x = 50;
	this.y = 0;
	this.dx = 0;
	this.dy = 1;
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
				if (that.y>=450){gameworld.removeChild(that.obstaclesdiv)};
									//that.obstaclesdiv=null;}
				//if (that.y>=450){that.obstaclesdiv=null;}
			}
			
}
	
var createobstacles = setInterval(function(){
		var obstaclecar = new obstacles();
	//var createobstacles = setInterval(function(){
		
	//var obstaclecar = new obstacles();
	var rand = Math.floor(Math.random()*500)+1;
	console.log(rand);
	var rem = (rand%50);
	var left;
	if (rem<17){left = 50}
	else if (rem<34){left=220}
	else{left = 390}
	
	obstaclecar.init(left);
	
	//},15000)
	
	var clearalert = setInterval(function(){
		
	obstaclecar.moveObstacle();
	
	if(playercar.detectcollision(playercar,obstaclecar))
	{
		//obstaclecar.moveObstacle();
		clearInterval(createobstacles);
		clearInterval(backgroundScroll);
		clearInterval(clearalert);
		//alert("Game Over!!");
		while(gameworld.hasChildNodes())
		{
			gameworld.removeChild(gameworld.lastChild);
			gameworld.style.background = "url('gameover.jpg')";
			gameworld.style.backgroundPosition= "centre";
		}
		
		
	}}, 10);},2000)
		
		
	
	