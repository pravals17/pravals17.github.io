var mainWrapper = document.getElementById("main-wrapper");
mainWrapper.style.width="300px";
mainWrapper.style.height="330px";
//mainWrapper.style.overflow="hidden";
mainWrapper.style.position="relative";




var imglistul= document.createElement("ul");
imglistul.style.width="1200px";
imglistul.style.height="304px";
//imglistul.style.overflow="hidden";
imglistul.style.margin="0px";
imglistul.style.padding="0px";
imglistul.style.listStyle="none";
imglistul.style.position="absolute";


var imglistli = document.createElement("li");
var imgdiv= document.createElement('img');
imgdiv.style.width="300px";
imgdiv.style.height="304px";
imgdiv.setAttribute("src","mt1.png");
imglistli.appendChild(imgdiv);
//imglistli.style.top="0px";
//imglistli.style.left="0px";
imglistli.style.float="left";
imglistul.appendChild(imglistli);


var imglistli = document.createElement("li");
var imgdiv= document.createElement('img');
imgdiv.style.width="300px";
imgdiv.style.height="304px";
imgdiv.setAttribute("src", "green-background.png");
imglistli.appendChild(imgdiv);
//imglistli.style.top="0px";
//imglistli.style.left="0px";
imglistli.style.float="left";
imglistul.appendChild(imglistli);


var imglistli = document.createElement("li");
var imgdiv= document.createElement('img');
imgdiv.style.width="300px";
imgdiv.style.height="304px";
imgdiv.setAttribute("src", "mt4.jpg");
imglistli.appendChild(imgdiv);
//imglistli.style.top="0px";
//imglistli.style.left="0px";
imglistli.style.float="left";
imglistul.appendChild(imglistli);


var imglistli = document.createElement("li");
var imgdiv= document.createElement('img');
imgdiv.style.width="300px";
imgdiv.style.height="304px";
imgdiv.setAttribute("src", "mt2.jpg");
imglistli.appendChild(imgdiv);
//imglistli.style.top="0px";
//imglistli.style.left="0px";
imglistli.style.float="left";
imglistul.appendChild(imglistli);



mainWrapper.appendChild(imglistul);


var btndiv = document.createElement("div");
var previous = document.createElement("button");
previous.innerHTML="Previous";

btndiv.appendChild(previous);
var next=document.createElement("button");

next.innerHTML="Next";
btndiv.appendChild(next);
btndiv.style.position="absolute";

mainWrapper.appendChild(btndiv);
//mainWrapper.appendChild(next);
var i=0;
var j=4;
var currposition =0;
previous.onclick=function(){
		
		//j=(j-1)%4;
	//var positionprev = position+300*j;
	//position=0;
	//console.log(position);
	if (currposition==0)
	{
		currposition=900;
	}
	else{currposition=(currposition-300)%1200;
	console.log("inside prev else");}
	imglistul.left=currposition+"px";
	//console.log(j);
		
	
};

next.onclick=function(){
	//i=(i+1)%4;
		//var positionnext = position+(-300*i);
		//position=0;
		//setTimeout(function(){
			//console.log(position);
			
			if(currposition==900){
				currposition=0;
			}
			else{
				currposition=(currposition+300)%1200;
				console.log("inside prev else");
			}
		imglistul.style.left=currposition +"px";//}, 1000);
		//i=(i%3)+1;
	//console.log(i);
};

