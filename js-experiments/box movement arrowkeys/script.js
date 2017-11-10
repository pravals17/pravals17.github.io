var mainWrapper = document.getElementById("main-wrapper")
mainWrapper.style.width="500px";
mainWrapper.style.height="500px";
mainWrapper.style.background = "red";
mainWrapper.style.padding="0px";
mainWrapper.style.Position = "relative";

var demobox = document.getElementById("box");
demobox.style.width = "15px";
demobox.style.height = "15px";
demobox.style.background = "green";
demobox.style.position="absolute";

//demobox.style.display="block";
mainWrapper.appendChild(demobox);

function Box(elementid){
	this.element = elementid;
	this.x = 10;
	this.y = 10;
	this.dy=0;
	this.dx=0.5;
	var that=this;

	this.movebox=function(){
		that.x = that.x + that.dx;
		that.y = that.y + that.dy;
		that.element.style.left = that.x + 'px';
		that.element.style.top = that.y + 'px';
	
		if(that.x>=490){that.dx=-0.5;}
		if(that.x<=10){that.dx=0.5;}
		if(that.y<=10){that.dy=0.5;}
		if (that.y>=490){that.dy=-0.5;}
		}
}

var dBox = new Box(demobox);

		setInterval(function(){document.onkeydown = function(event) {
				switch(event.keyCode){
					case 37:
						dBox.dx=-0.5
						dBox.dy=0;
						console.log("inside 37");
					break;
			case 38:
					dBox.dx = 0;
					dBox.dy=-0.5;
					break;
			case 39:
					dBox.dx=0.5;
					dBox.dy=0;					
					break;
			case 40:
					dBox.dx= 0;
					dBox.dy=0.5;
					break;
			default:		
		}
		
		}
		dBox.movebox();},1);
		
	
	

