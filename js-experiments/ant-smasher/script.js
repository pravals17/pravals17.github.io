var mainWrapper = document.getElementById("main-wrapper");
mainWrapper.style.width="500px";
mainWrapper.style.height="500px";
mainWrapper.style.background = "red";
mainWrapper.style.padding="0px";
mainWrapper.style.position = "relative";

var btnStart = document.getElementById("button");
btnStart.style.width = "100px";
btnStart.style.height = "20px";

btnStart.style.top="503px";
btnStart.style.border="1px";

var btn = document.createElement("Button");
btn.innerHTML = "Play Again";
btnStart.appendChild(btn);
btnStart.onclick = function(){location.reload()}


//var body = getElementsByTagName('body')[0];
//body.appendChild(btnStart);

function ant(){
	//this.element = element;
	this.x = 10;
	this.y = 10;
	console.log("inside ant");
	this.dx = 0.5;
	this.dy = 0.5;
	var that = this;
			this.init = function(top, left){
			
				that.antdiv = document.createElement("div");
				that.antdiv.style.width = "30px";
				that.antdiv.style.height = "30px";
				that.antdiv.style.background = "url('ant.png')";
				that.antdiv.style.backgroundSize = "Cover";	
				that.antdiv.style.position = "absolute";
				that.y=top;
				that.x=left;
				mainWrapper.appendChild(that.antdiv);
				
				
			}
		this.moveant=function()
			{
				console.log("moveant");
				that.x = that.x + that.dx;
				that.y = that.y + that.dy;
				that.antdiv.style.left = that.x +"px";
				that.antdiv.style.top = that.y + "px";
				if(that.x>=470){that.dx=-0.5;}
				if(that.x<=0){that.dx=0.5;}
				if(that.y<=0){that.dy=0.5;}
				if (that.y>=470){that.dy=-0.5;}
				
			}
				this.detectcollision = function(obj1, obj2){
					if((obj1.x +30 > obj2.x)&&(obj1.x<obj2.x+30)&&(obj1.y < obj2.y+30))
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
var antarray=[];
for (var i = 0; i<8;i++){
	var antelement = new ant();
	antarray.push(antelement);
	//console.log("inside loop");
	antelement.init(Math.floor(Math.random()*300)+1, Math.floor(Math.random()*300)+1);
	//console.log("inside first for");
	antelement.antdiv.onclick=function(antParam){
		return function(){
		antarray.splice(antarray.indexOf(antParam),1);
		mainWrapper.removeChild(this)
				console.log(antarray.length);	
				setTimeout(function(){if (antarray.length==0){alert("GAME OVER!!")}},1000);

		};
		}(antelement);
		//var index = antarray.indexof(this);
		//antarray.splice(index,1);
		
}
	
	
setInterval(function(){
				for (var j=0;j<antarray.length;j++){
					antarray[j].moveant();
						for (var k=0;k<antarray.length; k++){
							if(k!=j){
								//console.log("antarray[j].x"+antarray[j].x);
								//console.log("antarray[k].x"+antarray[k].x);
								if(antelement.detectcollision(antarray[j],antarray[k]))
								{
									var temp = antarray[k].dx
									antarray[k].dx = antarray[j].dx;
									antarray[j].dx = temp;
						}}
								}}},10);
		
	
	