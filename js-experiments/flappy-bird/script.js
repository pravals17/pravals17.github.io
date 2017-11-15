let mainWrapper = document.getElementById('main-wrapper');


let gameworld = document.createElement('div');
gameworld.style.width = "500px";
gameworld.style.height = "500px";
gameworld.style.background = "url('background.png')";
gameworld.style.backgroundRepeat = "repeat-x";
gameworld.style.position = "relative";
gameworld.style.overflow = "hidden";
mainWrapper.appendChild(gameworld);

let btn = document.createElement("Button");
btn.innerHTML = "Play Again";
btn.onclick = function(){location.reload()
};
mainWrapper.appendChild(btn);

let counter = 0;
let obstaclecounter = 0;

let score = document.createElement('div');
score.style.width = "100px";
score.style.height = "100px";
score.style.left = "400px";
score.style.position = "absolute";
score.style.fontSize = "100px";
score.style.fontWeight = "bold";
score.style.textAlign = "centre";
score.innerHTML = obstaclecounter;
gameworld.appendChild(score);


class Bird{
	
	constructor(x, y)
	{
		this.dy = 10;
		this.x = x;
		this.y = y;
		this.birddiv = document.createElement("div");
		this.birddiv.style.width = "50px";
		this.birddiv.style.height = "50px";
		this.birddiv.style.background = "url('flappybird.png')";
		this.birddiv.style.backgroundSize = "100% 100%";
		this.birddiv.style.top = this.y +"px";
		this.birddiv.style.left = this.x+"px";
		this.birddiv.style.position = "absolute";
		gameworld.appendChild(this.birddiv);
		mainWrapper.appendChild(gameworld);
	}
	
	moveBird(obj)
	{	
		obj.y = obj.y + obj.dy;
		obj.birddiv.style.top = obj.y +"px";
		obj.birddiv.style.left = obj.x + "px";
		
	}	
	detectcollision(obj1, obj2){
		if(((obj1.x + 50 > obj2.x)&&(obj1.y < obj2.height1)) || ((obj1.x + 50 > obj2.x)&&(obj1.y + 50 > obj2.height1 + 170))|| (obj1.y == 450))
			{
				return(true);
						
			}
		else
			{	
				return(false);
			}
	}
		
}

let birdObject = new Bird(80,225);
						
document.onkeydown = function(event){
	switch(event.keyCode){
		case 32:
			if(birdObject.y < 0){
				birdObject.y = 0;
			}
			else{
				birdObject.dy = -80;
				birdObject.moveBird(birdObject);		
			}			
		break;
		default: 
						
	}
		
}

class Obstacles{
	constructor(x, y)
	{
		this.x = x;
		this.height1 = y;
		this.height2 = 500 - y - 170;
		this.dx = -0.7;
		
		this.obsdiv1 = document.createElement("div");
		this.obsdiv1.style.width = "100px";
		this.obsdiv1.style.height = this.height1+"px";
		this.obsdiv1.style.background = "url('pipetop.png')";
		this.obsdiv1.style.backgroundSize = "100% 100%";
		this.obsdiv1.style.backgroundPosition = "top";
		this.obsdiv1.style.top = "0 px";
		this.obsdiv1.style.left = this.x+"px";
		this.obsdiv1.style.position = "absolute";
		gameworld.appendChild(this.obsdiv1);
		mainWrapper.appendChild(gameworld);
		
		this.obsdiv2 = document.createElement("div");
		this.obsdiv2.style.width = "100px";
		this.obsdiv2.style.height = this.height2+"px";
		this.obsdiv2.style.background = "url('pipebottom.png')";
		this.obsdiv2.style.backgroundSize = "100% 100%";
		this.obsdiv2.style.top = this.height1+170+"px";
		this.obsdiv2.style.left = this.x+"px";
		this.obsdiv2.style.position = "absolute";
		gameworld.appendChild(this.obsdiv2);
		mainWrapper.appendChild(gameworld);
		
	}
		
	moveObstacle(obj)
	{
		obj.x = obj.x + obj.dx;
		this.obsdiv1.style.left = obj.x + "px";
		this.obsdiv2.style.left = obj.x + "px";
		if(obj.x<0){
			obstaclearray.splice(obstaclearray.indexOf(this),1);
			gameworld.removeChild(this.obsdiv1);
			gameworld.removeChild(this.obsdiv2);
			obstaclecounter++;
			score.innerHTML = obstaclecounter;	
		}
		
	}	
	
}

var obstacleObject;
var obstaclearray = [];
var createobstacle = setInterval(function(){
	obstacleObject = new Obstacles(450, Math.floor(Math.random()*180)+80);
	obstaclearray.push(obstacleObject);
	
	}, 3000);

let moveBirddown = setInterval(function(){
			
							birdObject.dy = 0.5;
							birdObject.moveBird(birdObject);
							if (birdObject.y == 450){
								clearInterval(moveBirddown);
								clearInterval(createobstacle);
								score.style.left = "200px";
								score.style.top = "200px";
								score.style.color = "red";
								document.onkeydown = null;
							}
			
							counter = counter-0.5;
							gameworld.style.backgroundPosition = counter+'px'+' '+0+'px';
							gameworld.style.backgroundRepeat = "repeat-x";
							
							for(var i = 0; i<obstaclearray.length;i++){
								obstaclearray[i].moveObstacle(obstaclearray[i])
								if(birdObject.detectcollision(birdObject, obstaclearray[i]))
								{
									clearInterval(moveBirddown);
									clearInterval(createobstacle);
									score.style.left = "200px";
									score.style.top = "200px";
									score.style.color = "red";
									document.onkeydown = null;
									break;
									
									
								}
							}
				
			
			
						},5);