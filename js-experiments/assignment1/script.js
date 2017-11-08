var mainWrapper = document.getElementById("main-wrapper");
var data=[];
for(var i =0; i<10;i++)
{
	var coordinates={top:(Math.floor(Math.random()*450)+1), left:(Math.floor(Math.random()*450)+1)};
	data.push(coordinates);
	
}

var parent = document.createElement('div');
parent.style.width="500px";
parent.style.height="500px";
parent.style.background="red";
parent.style.position="relative";

var lists = document.createElement('ul');
var listitems = document.createElement("li");

for (var i=0;i<data.length;i++)
{
	var child1 = document.createElement('div');
	child1.style.position="absolute";
	child1.style.width="10px";
	child1.style.height="10px";
	child1.style.top = data[i].top + "px";
	child1.style.left = data[i].left + "px";
	child1.style.background = "blue";
	//child1.setAttribute("id", i);
	
	parent.appendChild(child1);
		


	child1.onclick=function(){
	  var listcontent=document.createTextNode(" Top:" +this.style.top + " Left:"+this.style.left);
	  listitems.appendChild(listcontent);
	  lists.appendChild(listcontent);
	  parent.removeChild(this);
		}
}

mainWrapper.appendChild(parent);

var childList = document.createElement('div');
childList.style.width="500px";
childList.style.height="500px";
childList.style.background="grey";
childList.appendChild(lists);
mainWrapper.appendChild(childList);