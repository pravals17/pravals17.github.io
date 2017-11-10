var mainWrapper = document.getElementById('main-wrapper');
var slideholder = document.createElement("div");

//slideholder.style.background = "red";
slideholder.style.width = "270px";
slideholder.style.height = "271px";
slideholder.style.position="relative"
slideholder.display="table";
slideholder.style.overflow="hidden";
slideholder.style.position="relative";

mainWrapper.appendChild(slideholder);

var images = ["mt1.png", "green-background.png", "mt2.jpg", "mt4.jpg"];

var imglistul = document.createElement("ul");
slideholder.appendChild(imglistul);
imglistul.style.position="absolute";
imglistul.style.width="2000px";
imglistul.style.listStyle="none";
imglistul.style.margin="0px";
imglistul.style.padding="0px";

    for(var i=0; i<images.length; i++) {
        var imglistli = document.createElement("li");
        imglistli.style.display="inline-block";
        var img = document.createElement("img");
        img.setAttribute("src", images[i]);
        imglistli.appendChild(img);
		imglistul.appendChild(imglistli);
    }



    var next= document.createElement("button");
	next.innerHTML="Next";
    mainWrapper.appendChild(next);



    var prev= document.createElement("button");
    prev.innerHTML="Prev";
    mainWrapper.appendChild(prev);
	var leftsize=0;
    var flag=true;
    imglistul.style.left = leftsize+"px";
    next.onclick=function(){
        var counter=1;
        if(flag){
            flag=false;

            var checker=setInterval(function(){

                if((leftsize)<=-((images.length-1)*270)){

                    leftsize=0;

                    imglistul.style.left= (leftsize)+ "px";

                    clearInterval(checker);

                    flag=true;

                }

                else{

                    leftsize=leftsize-3.0;

                    imglistul.style.left= (leftsize)+ "px";

                    counter++;

                    if(counter>100){

                            clearInterval(checker);

                            flag=true;

                        }

                }

            },1);

        }
   }



    prev.onclick=function(){

        var counter=1;

        if(flag){

            flag=false;

            var checker=setInterval(function(){

                if((leftsize)>=0){

                    leftsize=-((images.length-1)*270);

                    imglistul.style.left= (leftsize)+ "px";

                    clearInterval(checker);

                    flag=true;

                }

                else{

                    leftsize=leftsize+2.70;

                    counter++;

                    imglistul.style.left= (leftsize)+ "px";

                    if(counter>100){

                        clearInterval(checker);

                        flag=true;

                    }

                }    



            },1);

        }

    }