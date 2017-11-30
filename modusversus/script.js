	var slider = document.getElementById("slider");
	var currposition = 0;
	var photocounter = 0;
	var slidetitlecounter = 0;		  
	var slidetitles = ["Donec faucibus ultricies congue","Animals","Birds"];
	var firstli = document.getElementById("firstli");
	var secondli = document.getElementById("secondli");
	var thirdli = document.getElementById("thirdli");
	var rowslider = document.getElementById("rowslider");
	var rowcounter = 0;
	var currrowposition = 0;
	var opacity = 1;
	var submenuarrow = document.getElementById("submenuarrow");
	var submenu = document.getElementById("submenu");
	var search = document.getElementById("search");
	
	function portfoliomenu(){
		submenu.style.display="block";
		submenu.style.position="absolute";
		submenu.style.background = "#669999";
	}
	
	function portfoliomouseout(){
		submenu.style.display = "none";
	}
	
	/*function displaysearchbar(){
		search.style.type = "text";
		//search.style.float = "left";
		search.style.position="absolute";
	}
	function hidesearchbar(){
		search.style.display = "none";
	}*/
	
	function slideimgnexttop(){
		  var slidetopic = document.getElementById("slidetopic");
		  if(slidetitlecounter < 2){			
			slidetitlecounter = slidetitlecounter +1;
			slidetopic.textContent = slidetitles[slidetitlecounter];
			if(slidetitlecounter == 1){
				slider.style.left = "-3510px";
				currposition = -3510;
				photocounter = 0;
				activeindicator();
			}
			
			if(slidetitlecounter == 2){
				slider.style.left = "-7020px";
				currposition = -7020;
				photocounter = 0;
				activeindicator();
			}
			//console.log(slidetitlecounter);
		  }
	}	
	
	
	function slideimgprevtop(){
		
		var slidetopic = document.getElementById("slidetopic");
		  if(slidetitlecounter > 0){			
			slidetitlecounter = slidetitlecounter-1;
			slidetopic.textContent = slidetitles[slidetitlecounter];
			if(slidetitlecounter == 0){
				slider.style.left = "0px";
				currposition = 0;
				photocounter = 0;
				activeindicator();
			}
			
			if(slidetitlecounter == 1){
				slider.style.left = "-3510px";
				currposition = -3510;
				photocounter = 0;
				activeindicator();
			}
			//console.log(slidetitlecounter);
		  }
		
	}
	
	
	
	
	function slideimgnext(){
		 var counter = 0;
		  
		if(photocounter < 2){
				var slide = setInterval(function(){
				currposition = currposition - 1;
				slider.style.left = currposition+'px';
				counter +=1; 
				//console.log(counter);
				if (counter > 1170){
				clearInterval(slide);
			}},1);
			photocounter +=1;
			activeindicator();
		}
		
	}
	
	function slideimgprev(){
		var counter = 0;
		  if(photocounter > 0){
				var slide = setInterval(function(){
				currposition = currposition + 1;
				slider.style.left = currposition+'px';
				counter +=1; 
				//console.log(counter);
				if (counter > 1170){
				clearInterval(slide);
			}},1);
			photocounter -=1;
			activeindicator();
			
		}
		
	}
	
	//to indicate the active bar in the slider
	function activeindicator(){
		if(photocounter == 0){
			  firstli.setAttribute("class", "indicator-active");
			  secondli.setAttribute("class", "");
			  thirdli.setAttribute("class","");
				}
			else if(photocounter == 1){
			  firstli.classList.remove("indicator-active");
			  secondli.classList.add("indicator-active");
			  thirdli.classList.remove("indicator-active");
			  
				}
			else{
			  firstli.setAttribute("class", "");
			  secondli.setAttribute("class", "");
			  thirdli.setAttribute("class","indicator-active");
			}
	}
	
	
	//click function in the li elements below the main slider
	
	firstli.onclick = function(){
		firstli.setAttribute("class", "indicator-active");
		secondli.setAttribute("class", "");
		thirdli.setAttribute("class","");
		if (currposition >=-2342 && currposition <=0){
			currposition = 0;
			slider.style.left = currposition+'px';
		}
		if(currposition>-7020 && currposition<= -3510){
			currposition = -3510;
			slider.style.left = currposition+'px';
		}
		if(currposition> -10530 && currposition<= -7020){
			currposition = -7020;
			slider.style.left = currposition+'px';
		}
		photocounter=0;
	}
	
	secondli.onclick = function(){
		firstli.setAttribute("class", "");
		secondli.setAttribute("class", "indicator-active");
		thirdli.setAttribute("class","");
		if (currposition >=-2342 && currposition <=0){
			currposition = -1170;
			slider.style.left = currposition+'px';
		}
		if(currposition>-7020 && currposition<= -3510){
			currposition = -4680;
			slider.style.left = currposition+'px';
		}
		if(currposition> -10530 && currposition<= -7020){
			currposition = -8190;
			slider.style.left = currposition+'px';
		}
		photocounter=1;
	}
	
	thirdli.onclick = function(){
		firstli.setAttribute("class", "");
		secondli.setAttribute("class", "");
		thirdli.setAttribute("class","indicator-active");
		if (currposition >=-2342 && currposition <=0){
			currposition = -2340;
			slider.style.left = currposition+'px';
		}
		if(currposition>-7020 && currposition<= -3510){
			currposition = -5850;
			slider.style.left = currposition+'px';
		}
		if(currposition> -10530 && currposition<= -7020){
			currposition = -9360;
			slider.style.left = currposition+'px';
		}
		photocounter=2;
	}
	
	
	function rowslidernext(){
		var counter = 0;  
		if(rowcounter < 2){
				if(currrowposition <=0  && currrowposition>=-2400){
					var opacmeter1 = setInterval(function(){
						opacity -= 0.0035;
						rowslider.style.opacity = opacity;
						counter++;
						console.log("inside set interval");
						if(counter > 300){clearInterval(opacmeter1);}
					},1)
					
					console.log(counter);
					setTimeout(function(){
						counter++;
						currrowposition = currrowposition-1200;
						rowslider.style.left = currrowposition+'px';
						rowslider.style.opacity = opacity;
						if(counter > 300){
							console.log("hello");
						//currrowposition = currrowposition-1200;
						//rowslider.style.left = currrowposition+'px';
						var opacmeter2 = setInterval(function(){
						opacity += 0.0035;
						rowslider.style.opacity = opacity;
						counter++;
						console.log("inside set interval");
						if(counter>605){clearInterval(opacmeter2);}
						},1)
				}}, 1500);
				}
			rowcounter +=1;
			//activeindicator();
		}
	}
	
	
	function rowsliderprev(){
		var counter = 0;
		  if(rowcounter > 0){
				if(currrowposition <=0  && currrowposition>=-2400){
					var opacmeter1 = setInterval(function(){
						opacity -= 0.0035;
						rowslider.style.opacity = opacity;
						counter++;
						console.log("inside set interval");
						if(counter > 300){clearInterval(opacmeter1);}
					},1)
					
					console.log(counter);
					setTimeout(function(){
						counter++;
						currrowposition = currrowposition + 1200;
						rowslider.style.left = currrowposition+'px';
						rowslider.style.opacity = opacity;
						if(counter > 300){
							console.log("hello");
						//currrowposition = currrowposition-1200;
						//rowslider.style.left = currrowposition+'px';
						var opacmeter2 = setInterval(function(){
						opacity += 0.0035;
						rowslider.style.opacity = opacity;
						counter++;
						console.log("inside set interval");
						if(counter>605){clearInterval(opacmeter2);}
						},1)
				}}, 1500);
				}
			rowcounter -=1;
			
			
		}
	}
	//currrowposition = currrowposition +1200;
	//rowslider.style.left = currrowposition+'px';