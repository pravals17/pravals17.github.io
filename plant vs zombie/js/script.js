let gamefield = []; //array to keep track of the objects in the canvas
let gamestart; // = Date.now();

let zombiewavestart = Date.now() + 60000;

for(var i = 0; i < 9 ; i++){
	gamefield[i] = new Array(); //to create the 2D array for saving the objects in each quadrant of the gamefield
}

let zombiecount = 0; //count the number of zombie that crossed the line of defence
let peashooterarray = [];//array to keep rack of peashooter
let zombiearray = []; //array to keep track of zombies
let bulletarray = []; //array to keep track of bullets
let sunflowerarray = []; //array to keep track of sunflowers
let sunarray = []; //array to keep track of the suns produced by the sunflower
let commanderarray = []; //array to keep track of the commander peashooter
let commanderbulletarray = []; //array to keep track of the commander bullet

let player = false;
let score = 200;
let mouse={
	 x : undefined,
	 y : undefined
 }
 
let flagonclickcanvas = undefined;

 window.addEventListener('mousemove', function(event){
	 mouse.x = event.x;
	 mouse.y = event.y;
 });
 
let xclick = undefined;
let yclick = undefined;
 

 //selecting the plants from the optionPane on click event
 canvas.onclick = function(){
	 if(score > 0){
	 xclick = mouse.x;
	 yclick = mouse.y;
	 console.log(xclick);
	 console.log(yclick);
	 if(mouse.x >10 && mouse.x <86 && mouse.y > 512 && mouse.y < 588){
		 flagonclickcanvas = "peashooter"
		 //console.log(flagonclickcanvas);
	 }
	 
	 if(mouse.x > 113 && mouse.x < 183 && mouse.y > 512 && mouse.y < 588){
		flagonclickcanvas = "sunflower";
		//console.log("sunflower");
	 }
	 
	 if(mouse.x > 210 && mouse.x < 287 && mouse.y > 512 && mouse.y < 588){
		flagonclickcanvas = "commander";
		
	 }
	 
	 if((flagonclickcanvas == "peashooter") &&(mouse.x > 38 && mouse.x < 925) &&(mouse.y > 80 && mouse.y < 480)){
		
		//storing the peashooters in the gamefield array
		
		if(mouse.y> 0 && mouse.y <=145)
		{
			var i = 0;
			if((mouse.x > 10 && mouse.x <= 105)&&(!gamefield[i][0])){
				peashooterarray.push(new Peashooter(context, 84, 40));
				gamefield[i][0] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 84, 40 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				peashooterarray.push(new Peashooter(context, 180, 40));
				gamefield[i][1] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 180, 40 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				peashooterarray.push(new Peashooter(context, 282, 40));
				gamefield[i][2] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 282, 40 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				peashooterarray.push(new Peashooter(context, 377, 40));
				gamefield[i][3] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 377, 40 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				peashooterarray.push(new Peashooter(context, 474, 40));
				gamefield[i][4] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 474, 40 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				peashooterarray.push(new Peashooter(context, 579, 40));
				gamefield[i][5] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 579, 40 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				peashooterarray.push(new Peashooter(context, 673, 40));
				gamefield[i][6] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 673, 40));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				peashooterarray.push(new Peashooter(context, 767, 40));
				gamefield[i][7] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 787, 40 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				peashooterarray.push(new Peashooter(context, 864, 40));
				gamefield[i][8] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 864, 40 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 145 && mouse.y <= 231)
		{
			var i = 1;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				peashooterarray.push(new Peashooter(context, 84, 120));
				gamefield[i][0] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context,  84, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				peashooterarray.push(new Peashooter(context, 180, 120));
				gamefield[i][1] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 180, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				peashooterarray.push(new Peashooter(context, 282, 120));
				gamefield[i][2] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 282, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				peashooterarray.push(new Peashooter(context, 377, 120));
				gamefield[i][3] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 377, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				peashooterarray.push(new Peashooter(context, 474, 120));
				gamefield[i][4] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 474, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				peashooterarray.push(new Peashooter(context, 579, 120));
				gamefield[i][5] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 579, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				peashooterarray.push(new Peashooter(context, 673, 120));
				gamefield[i][6] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 673, 120 ));
				flagonclickcanvas = undefined;
				}	
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				peashooterarray.push(new Peashooter(context, 767, 120));
				gamefield[i][7] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 767, 120));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				peashooterarray.push(new Peashooter(context, 864, 120));
				gamefield[i][8] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context,864, 120 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 231 && mouse.y <= 318)
		{
			var i = 2;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				peashooterarray.push(new Peashooter(context, 84, 200));
				gamefield[i][0] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 84, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				peashooterarray.push(new Peashooter(context, 180, 200));
				gamefield[i][1] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 180, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				peashooterarray.push(new Peashooter(context, 282, 200));
				gamefield[i][2] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 282, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				peashooterarray.push(new Peashooter(context, 377, 200));
				gamefield[i][3] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 377, 200));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				peashooterarray.push(new Peashooter(context, 474, 200));
				gamefield[i][4] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 474, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				peashooterarray.push(new Peashooter(context, 579, 200));
				gamefield[i][5] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 579, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				peashooterarray.push(new Peashooter(context, 673, 200));
				gamefield[i][6] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, context, 673, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				peashooterarray.push(new Peashooter(context, 767, 200));
				gamefield[i][7] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 767, 200 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				peashooterarray.push(new Peashooter(context, 864, 200));
				gamefield[i][8] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 864, 200 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 318 && mouse.y <= 400)
		{
			var i = 3;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				peashooterarray.push(new Peashooter(context, 84, 280));
				gamefield[i][0] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 84, 280));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				peashooterarray.push(new Peashooter(context, 180, 280));
				gamefield[i][1] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 180, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				peashooterarray.push(new Peashooter(context, 282, 280));
				gamefield[i][2] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 282, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				peashooterarray.push(new Peashooter(context, 377, 280));
				gamefield[i][3] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 377, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				peashooterarray.push(new Peashooter(context, 474, 280));
				gamefield[i][4] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 474, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				peashooterarray.push(new Peashooter(context, 579, 280));
				gamefield[i][5] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 579, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				peashooterarray.push(new Peashooter(context, 673, 280));
				gamefield[i][6] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 673, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				peashooterarray.push(new Peashooter(context, 767, 280));
				gamefield[i][7] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 767, 280 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				peashooterarray.push(new Peashooter(context, 864, 280));
				gamefield[i][8] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 864, 280 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 400 && mouse.y <= 485)
		{
			var i = 4;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				peashooterarray.push(new Peashooter(context, 84, 360));
				gamefield[i][0] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 84, 360 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				peashooterarray.push(new Peashooter(context, 180, 360));
				gamefield[i][1] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 180, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				peashooterarray.push(new Peashooter(context, 282, 360));
				gamefield[i][2] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 282, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				peashooterarray.push(new Peashooter(context, 377, 360));
				gamefield[i][3] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 377, 360 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				peashooterarray.push(new Peashooter(context, 474, 360));
				gamefield[i][4] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 474, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				peashooterarray.push(new Peashooter(context, 579, 360));
				gamefield[i][5] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 579, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				peashooterarray.push(new Peashooter(context, 673, 360));
				gamefield[i][6] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context,673, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				peashooterarray.push(new Peashooter(context, 767, 360));
				gamefield[i][7] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 767, 360 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				peashooterarray.push(new Peashooter(context, 864, 360));
				gamefield[i][8] = peashooterarray[peashooterarray.length-1];
				peashooterarray[peashooterarray.length - 1].drawPeashooter();
				score = score  - peashooterarray[peashooterarray.length - 1].cost;
				bulletarray.push(new Bullet(context, 864, 360 ));
				flagonclickcanvas = undefined;
				}
	
		}
	 
	}
	
	
	//commander position
	
		 if((flagonclickcanvas == "commander") &&(mouse.x > 38 && mouse.x < 925) &&(mouse.y > 80 && mouse.y < 480)){
		
		//storing the peashooters in the gamefield array
		
		if(mouse.y> 0 && mouse.y <=145)
		{
			var i = 0;
			if((mouse.x > 10 && mouse.x <= 105)&&(!gamefield[i][0])){
				commanderarray.push(new Commander(context, 84, 40));
				gamefield[i][0] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 84, 40 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				commanderarray.push(new Commander(context, 180, 40));
				gamefield[i][1] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 180, 40 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				commanderarray.push(new Commander(context, 282, 40));
				gamefield[i][2] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 282, 40 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				commanderarray.push(new Commander(context, 377, 40));
				gamefield[i][3] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 377, 40 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				commanderarray.push(new Commander(context, 474, 40));
				gamefield[i][4] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 474, 40 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				commanderarray.push(new Commander(context, 579, 40));
				gamefield[i][5] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 579, 40 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				commanderarray.push(new Commander(context, 673, 40));
				gamefield[i][6] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 673, 40));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				commanderarray.push(new Commander(context, 767, 40));
				gamefield[i][7] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 787, 40 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				commanderarray.push(new Commander(context, 864, 40));
				gamefield[i][8] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 864, 40 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 145 && mouse.y <= 231)
		{
			var i = 1;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				commanderarray.push(new Commander(context, 84, 120));
				gamefield[i][0] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context,  84, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				commanderarray.push(new Commander(context, 180, 120));
				gamefield[i][1] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 180, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				commanderarray.push(new Commander(context, 282, 120));
				gamefield[i][2] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 282, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				commanderarray.push(new Commander(context, 377, 120));
				gamefield[i][3] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 377, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				commanderarray.push(new Commander(context, 474, 120));
				gamefield[i][4] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 474, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				commanderarray.push(new Commander(context, 579, 120));
				gamefield[i][5] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 579, 120 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				commanderarray.push(new Commander(context, 673, 120));
				gamefield[i][6] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 673, 120 ));
				flagonclickcanvas = undefined;
				}	
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				commanderarray.push(new Commander(context, 767, 120));
				gamefield[i][7] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 767, 120));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				commanderarray.push(new Commander(context, 864, 120));
				gamefield[i][8] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context,864, 120 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 231 && mouse.y <= 318)
		{
			var i = 2;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				commanderarray.push(new Commander(context, 84, 200));
				gamefield[i][0] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 84, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				commanderarray.push(new Commander(context, 180, 200));
				gamefield[i][1] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 180, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				commanderarray.push(new Commander(context, 282, 200));
				gamefield[i][2] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 282, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				commanderarray.push(new Commander(context, 377, 200));
				gamefield[i][3] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 377, 200));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				commanderarray.push(new Commander(context, 474, 200));
				gamefield[i][4] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 474, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				commanderarray.push(new Commander(context, 579, 200));
				gamefield[i][5] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 579, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				commanderarray.push(new Commander(context, 673, 200));
				gamefield[i][6] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, context, 673, 200 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				commanderarray.push(new Commander(context, 767, 200));
				gamefield[i][7] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 767, 200 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				commanderarray.push(new Commander(context, 864, 200));
				gamefield[i][8] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 864, 200 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 318 && mouse.y <= 400)
		{
			var i = 3;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				commanderarray.push(new Commander(context, 84, 280));
				gamefield[i][0] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 84, 280));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				commanderarray.push(new Commander(context, 180, 280));
				gamefield[i][1] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 180, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				commanderarray.push(new Commander(context, 282, 280));
				gamefield[i][2] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 282, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				commanderarray.push(new Commander(context, 377, 280));
				gamefield[i][3] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 377, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				commanderarray.push(new Commander(context, 474, 280));
				gamefield[i][4] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 474, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				commanderarray.push(new Commander(context, 579, 280));
				gamefield[i][5] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 579, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				commanderarray.push(new Commander(context, 673, 280));
				gamefield[i][6] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 673, 280 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				commanderarray.push(new Commander(context, 767, 280));
				gamefield[i][7] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 767, 280 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				commanderarray.push(new Commander(context, 864, 280));
				gamefield[i][8] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 864, 280 ));
				flagonclickcanvas = undefined;
				}
	
		}

		if(mouse.y> 400 && mouse.y <= 485)
		{
			var i = 4;
			if(mouse.x > 10 && mouse.x <= 105 && !gamefield[i][0]){
				commanderarray.push(new Commander(context, 84, 360));
				gamefield[i][0] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 84, 360 ));
				flagonclickcanvas = undefined;
			}
	
			if( mouse.x > 105 && mouse.x <= 210 && !gamefield[i][1]){
				commanderarray.push(new Commander(context, 180, 360));
				gamefield[i][1] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 180, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 210 && mouse.x <= 315 && !gamefield[i][2]){
				commanderarray.push(new Commander(context, 282, 360));
				gamefield[i][2] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 282, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 315 && mouse.x <= 420 && !gamefield[i][3]){
				commanderarray.push(new Commander(context, 377, 360));
				gamefield[i][3] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 377, 360 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 420 && mouse.x <= 525 && !gamefield[i][4]){
				commanderarray.push(new Commander(context, 474, 360));
				gamefield[i][4] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 474, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 525 && mouse.x <= 630 && !gamefield[i][5]){
				commanderarray.push(new Commander(context, 579, 360));
				gamefield[i][5] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 579, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 630 && mouse.x <= 735 && !gamefield[i][6]){
				commanderarray.push(new Commander(context, 673, 360));
				gamefield[i][6] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context,673, 360 ));
				flagonclickcanvas = undefined;
				}
	
			if( mouse.x > 735 && mouse.x <= 840 && !gamefield[i][7]){
				commanderarray.push(new Commander(context, 767, 360));
				gamefield[i][7] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 767, 360 ));
				flagonclickcanvas = undefined;
				}
		
			if( mouse.x > 840 && mouse.x <= 945 && !gamefield[i][8]){
				commanderarray.push(new Commander(context, 864, 360));
				gamefield[i][8] = commanderarray[commanderarray.length-1];
				commanderarray[commanderarray.length - 1].drawCommander();
				score = score  - commanderarray[commanderarray.length - 1].cost;
				commanderbulletarray.push(new CommanderBullet(context, 864, 360 ));
				flagonclickcanvas = undefined;
				}
	
		}
	 
	}
	 
	 if((flagonclickcanvas == "sunflower") &&(mouse.x > 38 && mouse.x < 925) &&(mouse.y > 80 && mouse.y < 480)){
		sunflowerarray.push(new Sunflower(context, mouse.x - 25, mouse.y - 25));
		sunarray.push(new Sun(context, mouse.x, mouse.y - 25));
		//console.log(sunflowerarray[sunflowerarray.length - 1]);
		sunflowerarray[sunflowerarray.length - 1].drawSunflower();
		score = score - sunflowerarray[sunflowerarray.length - 1].cost;
		sunarray[sunarray.length - 1].drawSun();
		flagonclickcanvas = undefined;
	 
	 }
	 }

 };
 
 
//the area for the game 
class Gameworld{
	constructor(context){
		this.context = context
		this.width = 945;
		this.height = 501;
		this.img = new Image()
		this.img.src = "images/Front_Lawn.png";
		this.img.onload=()=>{	
		this.context.drawImage(this.img,0,0, this.width, this.height);

		}
		
	}

	drawBackground(context){
		
				this.context.drawImage(this.img,0,0, this.width, this.height);
				this.context.font="50px Georgia";
				this.context.fillText("Suns : "+ score,  845, 50, 100, 100);
				this.context.fillStyle = "brown";

	}
}

class Gameover{
	constructor(context){
		this.context = context
		this.width = 945;
		this.height = 601;
		this.img = new Image()
		this.img.src = "images/gameover.png";
		this.img.onload=()=>{	
		this.context.drawImage(this.img,0,0, this.width, this.height);

		}
		
	}

	drawBackground(context){
		
				this.context.drawImage(this.img,0,0, this.width, this.height);
	}
}

let gameover = new Gameover(context);
//peashooter class
class Peashooter{
	constructor(context, x ,y){
		this.context = context;
		this.x = x;//30;
		this.y = y;//100;
		this.width = 80;
		this.height = 80;
		this.cost = 50;
		this.peashooterimg = new Image(); //document.createElement('img');
		this.peashooterimg.src = "images/PeashooterHD.png";
		this.peashooterimg.onload = () =>{this.context.drawImage(this.peashooterimg, this.x, this.y,this.width, this.height);}
	}
	
	drawPeashooter(){
		this.context.drawImage(this.peashooterimg, this.x, this.y,this.width, this.height);
		}
}

//bullets of the peashooter
class Bullet{
	constructor(context, x, y){
	this.context = context;
	this.x = x + 75;
	this.y = y +20;
	this.width = 10;
	this.height = 10;
	this.dx = 0.5;
	this.radius = 10;
	this.start = Date.now();
	this.countbullet = 0;
	this.ticks = 0;
	}
	
	updatePosition(){
		this.context.beginPath();
		this.context.arc(this.x,this.y,this.radius,0, Math.PI*2);
		this.context.fill();
		this.x+=this.dx
		this.context.closePath();
	
	}
	
	bulletCollision(ob1, ob2){
			//console.log(ob1.x);
		if(bulletarray.length > 0 ){	
			if ((ob1.x + ob1.width > ob2.x)&&(ob1.y == ob2.y + 20 )){
				return true;
				//console.log(true);
				}
			else{
				//console.log(false);
				return false;
				}
			}
		
	}
	
}

class Commander{
	constructor(context, x ,y){
		this.context = context;
		this.x = x;//30;
		this.y = y;//100;
		this.width = 80;
		this.height = 80;
		this.cost = 100;
		this.commanderimg = new Image(); //document.createElement('img');
		this.commanderimg.src = "images/commander.png";
		this.commanderimg.onload = () =>{this.context.drawImage(this.commanderimg, this.x, this.y,this.width, this.height);}
	}
	
	drawCommander(){
		this.context.drawImage(this.commanderimg, this.x, this.y,this.width, this.height);
		}
}


class CommanderBullet{
	constructor(context, x, y){
	this.context = context;
	this.x = x + 75;
	this.y = y +20;
	this.width = 20;
	this.height = 20;
	this.dx = 0.5;
	this.radius = 20;
	this.start = Date.now();
	this.countcommanderbullet = 0;
	}
	
	updatePosition(){
		this.context.beginPath();
	
		this.context.arc(this.x,this.y,this.radius,0, Math.PI*2);
		this.context.fill();
		this.x+=this.dx
		this.context.closePath();
	
	}
	
	bulletCollision(ob1, ob2){
			//console.log(ob1.x);
		if(commanderbulletarray.length > 0 ){	
			if ((ob1.x + ob1.width > ob2.x)&&(ob1.y == ob2.y + 20 )){
				return true;
				//console.log(true);
				}
			else{
				//console.log(false);
				return false;
				}
			}
		
	}
	
}

//sunflower class
class Sunflower{
	constructor(context, x, y){
		this.context = context;
		this.x = x;
		this.y = y;
		this.width = 50;
		this.height = 50;
		this.cost = 25;
		this.sunflowerimg = new Image();
		this.sunflowerimg.src = "images/SunflowerHD.png";
		this.sunflowerimg.onload =() => {this.context.drawImage(this.sunflowerimg, this.x, this.y, this.width, this.height);}
	}
	
	drawSunflower(){
		this.context.drawImage(this.sunflowerimg, this.x, this.y, this.width, this.height);
	}
		
}

class Sun{
	constructor(context, x, y){
		this.context = context;
		this.x = x;
		this.y = y;
		this.width = 25;
		this.height = 25;
		this.cost = -50;
		this.dy = -0.5;
		this.suncount = 0;
		this.sunimg = new Image();
		this.sunimg.src = "images/SunHD.png";
		this.sunimg.onload=() => {this.context.drawImage(this.sunimg, this.x, this.y, this.width, this.height);}
	}
	
	drawSun(){
		this.context.drawImage(this.sunimg, this.x , this.y += this.dy, this.width, this.height);
	}
}

//zombie class
class Zombie{
	constructor(context){
		this.context = context;
		this.x = 1050;
		
		//random generation of the zombies
		switch( Math.floor(Math.random()*5)){
			case 0 :
				this.y = 40;
				break;
			case 1:
				this.y = 120;
				break;
			case 2:
				this.y = 200;
				break;
			case 3:
				this.y = 280;
				break;
			case 4:
				this.y = 360;
				break;
		}
		//this.y = 360;
		this.width = 80;
		this.height = 80;
		this.dx = -0.4;
		this.hits = 0;
		this.lastzombie = Date.now();
		this.zombieimage = new Image();
		this.zombieimage.src = "images/zombieHD.png";
		this.zombieimage.onload=() => {this.context.drawImage(this.zombieimage, this.x, this.y,this.width, this.height);}
		
	}
	
	updatePosition(){
		this.context.drawImage(this.zombieimage, this.x += this.dx, this.y,this.width, this.height);
		if(((Date.now()-(zombiearray[zombiearray.length -1].lastzombie)) > 5000)){
			zombiearray.push(new Zombie(context));
	//console.log(zombiearray.length);
			}
		}
		
		UpdatePositionZombiewave(){
		this.context.drawImage(this.zombieimage, this.x += this.dx, this.y,this.width, this.height);
		if(((Date.now()-(zombiearray[zombiearray.length -1].lastzombie)) > 1500)){
			zombiearray.push(new Zombie(context));
			}
		}
		
		zombieCollision(ob1, ob2){
			if(zombiearray.length > 0 ){	
			if ((ob1.x < ob2.x + ob2.width)&&(ob1.y == ob2.y )){
				return true;
				}
			else{
				return false;
				}
			}
		}
}



class Optionpane{
	constructor(context){
		this.context = context;
		this.x = 0;
		this.y = 501;
		this.width = 945;
		this.height = 100;
		this.peashooterimg = new Image();
		this.peashooterimg.src = "images/PeashooterHD.png";
		this.peashooterimg.onload = () =>{this.context.drawImage(this.peashooterimg, this.x, this.y,80, 80);}
		this.sunflowerimg = new Image();
		this.sunflowerimg.src = "images/SunflowerHD.png";
		this.sunflowerimg.onload =() => {this.context.drawImage(this.sunflowerimg, this.x + 100, this.y, 80, 80);}
		this.commanderimg = new Image();
		this.commanderimg.src = "images/commander.png";
		this.commanderimg.onload =() => {this.context.drawImage(this.commanderimg, this.x + 200, this.y, 80, 80);}
	}
	
	drawOptionpane()
	{
	
		this.context.beginPath();
		this.context.rect(this.x, this.y, this.width, this.height);
		this.context.fill();
		this.context.closePath();

		
	}	
	drawOptions(){
			this.context.drawImage(this.peashooterimg, this.x, this.y,80, 80);
			this.context.drawImage(this.sunflowerimg, this.x + 100, this.y, 80, 80);
			this.context.drawImage(this.commanderimg, this.x + 200, this.y, 80, 80);
		}
		
	
	
}



//creating objects to test if they are correctly created
let gameworld = new Gameworld(context);


let zombie;// = new Zombie(context);
//zombiearray.push(zombie);

let optionpane = new Optionpane(context);
optionpane.drawOptionpane();
optionpane.drawOptions();

var alpha = 1.0;
var beta = 1.0;
//main animation function	
function animate(){
	context.clearRect(0,0, canvas.width, canvas.height);
	gameworld.drawBackground();
	for(var i = 0; i < zombiearray.length; i++){
		//update the position of the zombie
		if((zombiearray.length > 0)&&((Date.now() - gamestart < 60000))){ //||(Date.now() - gamestart >90000))){
			zombiearray[i].updatePosition();
			
			if(zombiearray[i].x < -80){
				zombiecount += 1 
				zombiearray.splice(i, 1);
				}

			}
			if((Date.now() - gamestart > 60000)){ 
				zombiearray[i].dx = -0.4;
				zombiearray[i].UpdatePositionZombiewave();
				context.font="80px Georgia";
				context.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
				alpha = alpha - 0.001;
				context.fillText("Zombie Wave",  50, 80, 500, 80);
				if (alpha < 0) {
					context.fillText (" ",0,0,0,0);
					context.fillStyle = "brown";
				}
			zombiearray[i].UpdatePositionZombiewave();
				
			if(zombiearray[i].x < -80){
				zombiecount += 1 
				zombiearray.splice(i, 1);
				}
				
		}
		
		for(var k = 0; k < commanderarray.length; k++){
			if(commanderarray.length > 0 ){
				commanderarray[k].drawCommander();
				}
				
				if(zombiearray.length > 0){
			if(zombiearray[i].zombieCollision(zombiearray[i], commanderarray[k])){
				//zombiearray[i].dx = 0;
				var xpos;
				var ypos;
				
				//determining the position of the peashooter in the gamefield
				
				if(commanderarray[k].y == 40){
					if(commanderarray[k].x == 84){ xpos = 0; ypos = 0}
					if(commanderarray[k].x == 180){ xpos = 0; ypos = 1}
					if(commanderarray[k].x == 282){ xpos = 0; ypos = 2}
					if(commanderarray[k].x == 377){ xpos = 0; ypos = 3}
					if(commanderarray[k].x == 474){ xpos = 0; ypos = 4}
					if(commanderarray[k].x == 579){ xpos = 0; ypos = 5}
					if(commanderarray[k].x == 673){ xpos = 0; ypos = 6}
					if(commanderarray[k].x == 767){ xpos = 0; ypos = 7}
					if(commanderarray[k].x == 864){ xpos = 0; ypos = 8}
				}
				if(commanderarray[k].y == 120){
					if(commanderarray[k].x == 84){ xpos = 1; ypos = 0}
					if(commanderarray[k].x == 180){ xpos = 1; ypos = 1}
					if(commanderarray[k].x == 282){ xpos = 1; ypos = 2}
					if(commanderarray[k].x == 377){ xpos = 1; ypos = 3}
					if(commanderarray[k].x == 474){ xpos = 1; ypos = 4}
					if(commanderarray[k].x == 579){ xpos = 1; ypos = 5}
					if(commanderarray[k].x == 673){ xpos = 1; ypos = 6}
					if(commanderarray[k].x == 767){ xpos = 1; ypos = 7}
					if(commanderarray[k].x == 864){ xpos = 1; ypos = 8}
				}
				if(commanderarray[k].y == 200){
					if(commanderarray[k].x == 84){ xpos = 2; ypos = 0}
					if(commanderarray[k].x == 180){ xpos = 2; ypos = 1}
					if(commanderarray[k].x == 282){ xpos = 2; ypos = 2}
					if(commanderarray[k].x == 377){ xpos = 2; ypos = 3}
					if(commanderarray[k].x == 474){ xpos = 2; ypos = 4}
					if(commanderarray[k].x == 579){ xpos = 2; ypos = 5}
					if(commanderarray[k].x == 673){ xpos = 2; ypos = 6}
					if(commanderarray[k].x == 767){ xpos = 2; ypos = 7}
					if(commanderarray[k].x == 864){ xpos = 2; ypos = 8}
				}
				if(commanderarray[k].y == 280){
					if(commanderarray[k].x == 84){ xpos = 3; ypos = 0}
					if(commanderarray[k].x == 180){ xpos = 3; ypos = 1}
					if(commanderarray[k].x == 282){ xpos = 3; ypos = 2}
					if(commanderarray[k].x == 377){ xpos = 3; ypos = 3}
					if(commanderarray[k].x == 474){ xpos = 3; ypos = 4}
					if(commanderarray[k].x == 579){ xpos = 3; ypos = 5}
					if(commanderarray[k].x == 673){ xpos = 3; ypos = 6}
					if(commanderarray[k].x == 767){ xpos = 3; ypos = 7}
					if(commanderarray[k].x == 864){ xpos = 3; ypos = 8}
				}
				if(commanderarray[k].y == 360){
					if(commanderarray[k].x == 84){ xpos = 4; ypos = 0}
					if(commanderarray[k].x == 180){ xpos = 4; ypos = 1}
					if(commanderarray[k].x == 282){ xpos = 4; ypos = 2}
					if(commanderarray[k].x == 377){ xpos = 4; ypos = 3}
					if(commanderarray[k].x == 474){ xpos = 4; ypos = 4}
					if(commanderarray[k].x == 579){ xpos = 4; ypos = 5}
					if(commanderarray[k].x == 673){ xpos = 4; ypos = 6}
					if(commanderarray[k].x == 767){ xpos = 4; ypos = 7}
					if(commanderarray[k].x == 864){ xpos = 4; ypos = 8}
				}
				
				commanderarray.splice(k,1);
				gamefield[xpos].splice(ypos, 1);
				commanderbulletarray.splice(k,1);
				
				
				}
			}
				
		}
		
		
		//commanderbullet
		
		for(var j = 0 ; j < commanderbulletarray.length; j++){
			//update the position of the bullet
			commanderbulletarray[j].updatePosition();
			
			if((commanderbulletarray[j].bulletCollision(commanderbulletarray[j], zombiearray[i])) || (commanderbulletarray[j].x > 945)){
				commanderbulletarray[j].countcommanderbullet += 1;
				if(commanderbulletarray[j].bulletCollision(commanderbulletarray[j], zombiearray[i])){
					zombiearray[i].hits += 1;
					if(zombiearray[i].hits > 1){
						zombiearray.splice(i,1);
					}
				}
								
				if(commanderarray[j]) {
					commanderbulletarray[j].x = commanderarray[j].x + 75
				}
				
				if(commanderbulletarray[j].countcommanderbullet > 10){
					var xpos;
					var ypos;
				
				//determining the position of the peashooter in the gamefield
				
					if(commanderarray[j].y == 40){
						if(commanderarray[j].x == 84){ xpos = 0; ypos = 0}
						if(commanderarray[j].x == 180){ xpos = 0; ypos = 1}
						if(commanderarray[j].x == 282){ xpos = 0; ypos = 2}
						if(commanderarray[j].x == 377){ xpos = 0; ypos = 3}
						if(commanderarray[j].x == 474){ xpos = 0; ypos = 4}
						if(commanderarray[j].x == 579){ xpos = 0; ypos = 5}
						if(commanderarray[j].x == 673){ xpos = 0; ypos = 6}
						if(commanderarray[j].x == 767){ xpos = 0; ypos = 7}
						if(commanderarray[j].x == 864){ xpos = 0; ypos = 8}
						}
					if(commanderarray[j].y == 120){
						if(commanderarray[j].x == 84){ xpos = 1; ypos = 0}
						if(commanderarray[j].x == 180){ xpos = 1; ypos = 1}
						if(commanderarray[j].x == 282){ xpos = 1; ypos = 2}
						if(commanderarray[j].x == 377){ xpos = 1; ypos = 3}
						if(commanderarray[j].x == 474){ xpos = 1; ypos = 4}
						if(commanderarray[j].x == 579){ xpos = 1; ypos = 5}
						if(commanderarray[j].x == 673){ xpos = 1; ypos = 6}
						if(commanderarray[j].x == 767){ xpos = 1; ypos = 7}
						if(commanderarray[j].x == 864){ xpos = 1; ypos = 8}
						}
					if(commanderarray[j].y == 200){
						if(commanderarray[j].x == 84){ xpos = 2; ypos = 0}
						if(commanderarray[j].x == 180){ xpos = 2; ypos = 1}
						if(commanderarray[j].x == 282){ xpos = 2; ypos = 2}
						if(commanderarray[j].x == 377){ xpos = 2; ypos = 3}
						if(commanderarray[j].x == 474){ xpos = 2; ypos = 4}
						if(commanderarray[j].x == 579){ xpos = 2; ypos = 5}
						if(commanderarray[j].x == 673){ xpos = 2; ypos = 6}
						if(commanderarray[j].x == 767){ xpos = 2; ypos = 7}
						if(commanderarray[j].x == 864){ xpos = 2; ypos = 8}
						}
					if(commanderarray[j].y == 280){
						if(commanderarray[j].x == 84){ xpos = 3; ypos = 0}
						if(commanderarray[j].x == 180){ xpos = 3; ypos = 1}
						if(commanderarray[j].x == 282){ xpos = 3; ypos = 2}
						if(commanderarray[j].x == 377){ xpos = 3; ypos = 3}
						if(commanderarray[j].x == 474){ xpos = 3; ypos = 4}
						if(commanderarray[j].x == 579){ xpos = 3; ypos = 5}
						if(commanderarray[j].x == 673){ xpos = 3; ypos = 6}
						if(commanderarray[j].x == 767){ xpos = 3; ypos = 7}
						if(commanderarray[j].x == 864){ xpos = 3; ypos = 8}
						}
					if(commanderarray[j].y == 360){
						if(commanderarray[j].x == 84){ xpos = 4; ypos = 0}
						if(commanderarray[j].x == 180){ xpos = 4; ypos = 1}
						if(commanderarray[j].x == 282){ xpos = 4; ypos = 2}
						if(commanderarray[j].x == 377){ xpos = 4; ypos = 3}
						if(commanderarray[j].x == 474){ xpos = 4; ypos = 4}
						if(commanderarray[j].x == 579){ xpos = 4; ypos = 5}
						if(commanderarray[j].x == 673){ xpos = 4; ypos = 6}
						if(commanderarray[j].x == 767){ xpos = 4; ypos = 7}
						if(commanderarray[j].x == 864){ xpos = 4; ypos = 8}
						}
				
					commanderarray.splice(j,1);
					gamefield[xpos].splice(ypos, 1);
					commanderbulletarray.splice(j,1);
				
				
					}
				}
				
			}
		
		
		
		//peashooter splice and collision
		for(var k = 0; k < peashooterarray.length; k++){
			if(peashooterarray.length > 0 ){
				peashooterarray[k].drawPeashooter();
				}
			if(zombiearray.length > 0){
			if(zombiearray[i].zombieCollision(zombiearray[i], peashooterarray[k])){
				
				var xpos;
				var ypos;
				
				//determining the position of the peashooter in the gamefield
				
				if(peashooterarray[k].y == 40){
					if(peashooterarray[k].x == 84){ xpos = 0; ypos = 0}
					if(peashooterarray[k].x == 180){ xpos = 0; ypos = 1}
					if(peashooterarray[k].x == 282){ xpos = 0; ypos = 2}
					if(peashooterarray[k].x == 377){ xpos = 0; ypos = 3}
					if(peashooterarray[k].x == 474){ xpos = 0; ypos = 4}
					if(peashooterarray[k].x == 579){ xpos = 0; ypos = 5}
					if(peashooterarray[k].x == 673){ xpos = 0; ypos = 6}
					if(peashooterarray[k].x == 767){ xpos = 0; ypos = 7}
					if(peashooterarray[k].x == 864){ xpos = 0; ypos = 8}
				}
				if(peashooterarray[k].y == 120){
					if(peashooterarray[k].x == 84){ xpos = 1; ypos = 0}
					if(peashooterarray[k].x == 180){ xpos = 1; ypos = 1}
					if(peashooterarray[k].x == 282){ xpos = 1; ypos = 2}
					if(peashooterarray[k].x == 377){ xpos = 1; ypos = 3}
					if(peashooterarray[k].x == 474){ xpos = 1; ypos = 4}
					if(peashooterarray[k].x == 579){ xpos = 1; ypos = 5}
					if(peashooterarray[k].x == 673){ xpos = 1; ypos = 6}
					if(peashooterarray[k].x == 767){ xpos = 1; ypos = 7}
					if(peashooterarray[k].x == 864){ xpos = 1; ypos = 8}
				}
				if(peashooterarray[k].y == 200){
					if(peashooterarray[k].x == 84){ xpos = 2; ypos = 0}
					if(peashooterarray[k].x == 180){ xpos = 2; ypos = 1}
					if(peashooterarray[k].x == 282){ xpos = 2; ypos = 2}
					if(peashooterarray[k].x == 377){ xpos = 2; ypos = 3}
					if(peashooterarray[k].x == 474){ xpos = 2; ypos = 4}
					if(peashooterarray[k].x == 579){ xpos = 2; ypos = 5}
					if(peashooterarray[k].x == 673){ xpos = 2; ypos = 6}
					if(peashooterarray[k].x == 767){ xpos = 2; ypos = 7}
					if(peashooterarray[k].x == 864){ xpos = 2; ypos = 8}
				}
				if(peashooterarray[k].y == 280){
					if(peashooterarray[k].x == 84){ xpos = 3; ypos = 0}
					if(peashooterarray[k].x == 180){ xpos = 3; ypos = 1}
					if(peashooterarray[k].x == 282){ xpos = 3; ypos = 2}
					if(peashooterarray[k].x == 377){ xpos = 3; ypos = 3}
					if(peashooterarray[k].x == 474){ xpos = 3; ypos = 4}
					if(peashooterarray[k].x == 579){ xpos = 3; ypos = 5}
					if(peashooterarray[k].x == 673){ xpos = 3; ypos = 6}
					if(peashooterarray[k].x == 767){ xpos = 3; ypos = 7}
					if(peashooterarray[k].x == 864){ xpos = 3; ypos = 8}
				}
				if(peashooterarray[k].y == 360){
					if(peashooterarray[k].x == 84){ xpos = 4; ypos = 0}
					if(peashooterarray[k].x == 180){ xpos = 4; ypos = 1}
					if(peashooterarray[k].x == 282){ xpos = 4; ypos = 2}
					if(peashooterarray[k].x == 377){ xpos = 4; ypos = 3}
					if(peashooterarray[k].x == 474){ xpos = 4; ypos = 4}
					if(peashooterarray[k].x == 579){ xpos = 4; ypos = 5}
					if(peashooterarray[k].x == 673){ xpos = 4; ypos = 6}
					if(peashooterarray[k].x == 767){ xpos = 4; ypos = 7}
					if(peashooterarray[k].x == 864){ xpos = 4; ypos = 8}
				}
				
				peashooterarray.splice(k,1);
				gamefield[xpos].splice(ypos, 1);
				bulletarray.splice(k,1);
				
				
			}
		}
		} //for statement for peashooter
		
		for(var j = 0 ; j < bulletarray.length; j++){
			//update the position of the bullet
			//if(((Date.now() - bulletarray[j].start) % 2000) == 0){bulletarray[j].updatePosition();}
			bulletarray[j].updatePosition();
			
			if((bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i]) == false) && (bulletarray[j].x > 945)){
				bulletarray[j].x = peashooterarray[j].x + 75;
				
			
			}
			if((bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i]) == true) && (bulletarray[j].x < 945)){
				bulletarray[j].countbullet += 1;
				if(bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i])){
					zombiearray[i].hits += 1;
					if(zombiearray[i].hits > 4){
						zombiearray.splice(i,1);
					}
				}
				/*if(zombiearray[i].x < -80){
					zombiearray.splice(i, 1);
					}*/
				
				if(peashooterarray[j]){
						bulletarray[j].x = peashooterarray[j].x + 75;
				}
				
				if(bulletarray[j].countbullet > 15){
					var xpos;
					var ypos;
				
				//determining the position of the peashooter in the gamefield
				
					if(peashooterarray[j].y == 40){
						if(peashooterarray[j].x == 84){ xpos = 0; ypos = 0}
						if(peashooterarray[j].x == 180){ xpos = 0; ypos = 1}
						if(peashooterarray[j].x == 282){ xpos = 0; ypos = 2}
						if(peashooterarray[j].x == 377){ xpos = 0; ypos = 3}
						if(peashooterarray[j].x == 474){ xpos = 0; ypos = 4}
						if(peashooterarray[j].x == 579){ xpos = 0; ypos = 5}
						if(peashooterarray[j].x == 673){ xpos = 0; ypos = 6}
						if(peashooterarray[j].x == 767){ xpos = 0; ypos = 7}
						if(peashooterarray[j].x == 864){ xpos = 0; ypos = 8}
						}
					if(peashooterarray[j].y == 120){
						if(peashooterarray[j].x == 84){ xpos = 1; ypos = 0}
						if(peashooterarray[j].x == 180){ xpos = 1; ypos = 1}
						if(peashooterarray[j].x == 282){ xpos = 1; ypos = 2}
						if(peashooterarray[j].x == 377){ xpos = 1; ypos = 3}
						if(peashooterarray[j].x == 474){ xpos = 1; ypos = 4}
						if(peashooterarray[j].x == 579){ xpos = 1; ypos = 5}
						if(peashooterarray[j].x == 673){ xpos = 1; ypos = 6}
						if(peashooterarray[j].x == 767){ xpos = 1; ypos = 7}
						if(peashooterarray[j].x == 864){ xpos = 1; ypos = 8}
						}
					if(peashooterarray[j].y == 200){
						if(peashooterarray[j].x == 84){ xpos = 2; ypos = 0}
						if(peashooterarray[j].x == 180){ xpos = 2; ypos = 1}
						if(peashooterarray[j].x == 282){ xpos = 2; ypos = 2}
						if(peashooterarray[j].x == 377){ xpos = 2; ypos = 3}
						if(peashooterarray[j].x == 474){ xpos = 2; ypos = 4}
						if(peashooterarray[j].x == 579){ xpos = 2; ypos = 5}
						if(peashooterarray[j].x == 673){ xpos = 2; ypos = 6}
						if(peashooterarray[j].x == 767){ xpos = 2; ypos = 7}
						if(peashooterarray[j].x == 864){ xpos = 2; ypos = 8}
						}
					if(peashooterarray[j].y == 280){
						if(peashooterarray[j].x == 84){ xpos = 3; ypos = 0}
						if(peashooterarray[j].x == 180){ xpos = 3; ypos = 1}
						if(peashooterarray[j].x == 282){ xpos = 3; ypos = 2}
						if(peashooterarray[j].x == 377){ xpos = 3; ypos = 3}
						if(peashooterarray[j].x == 474){ xpos = 3; ypos = 4}
						if(peashooterarray[j].x == 579){ xpos = 3; ypos = 5}
						if(peashooterarray[j].x == 673){ xpos = 3; ypos = 6}
						if(peashooterarray[j].x == 767){ xpos = 3; ypos = 7}
						if(peashooterarray[j].x == 864){ xpos = 3; ypos = 8}
						}
					if(peashooterarray[j].y == 360){
						if(peashooterarray[j].x == 84){ xpos = 4; ypos = 0}
						if(peashooterarray[j].x == 180){ xpos = 4; ypos = 1}
						if(peashooterarray[j].x == 282){ xpos = 4; ypos = 2}
						if(peashooterarray[j].x == 377){ xpos = 4; ypos = 3}
						if(peashooterarray[j].x == 474){ xpos = 4; ypos = 4}
						if(peashooterarray[j].x == 579){ xpos = 4; ypos = 5}
						if(peashooterarray[j].x == 673){ xpos = 4; ypos = 6}
						if(peashooterarray[j].x == 767){ xpos = 4; ypos = 7}
						if(peashooterarray[j].x == 864){ xpos = 4; ypos = 8}
						}
				
					peashooterarray.splice(j,1);
					gamefield[xpos].splice(ypos, 1);
					bulletarray.splice(j,1);
				
				
					}
				}
				//bulletarray.splice(j,1);
			}
			
		
		
	}
	optionpane.drawOptionpane();
	optionpane.drawOptions();

	
	for (var i = 0; i < sunflowerarray.length; i++){	
		if(sunflowerarray){
			sunflowerarray[i].drawSunflower();
			sunarray[i].drawSun();
			//console.log(xclick);
			
			if(((xclick - sunarray[i].x >10) && (xclick - sunarray[i].x < 30)) && ((yclick - sunarray[i].y > 15 )  && (yclick - sunarray[i].y < 35))){
				sunarray[i].y = sunflowerarray[i].y
				score = score - sunarray[i].cost;
				sunarray[i].suncount += 1;
				if(sunarray[i].suncount > 4){
					sunarray.splice(i,1);
					sunflowerarray.splice(i, 1);
				}
				xclick = undefined;
				yclick = undefined;
				//console.log(xclick);
				//console.log(yclick);
			}
			if(sunarray[i]){
			if(sunarray[i].y < -25){	// || (((xclick - sunarray[i].x >10) && (xclick - sunarray[i].x < 30)) && ((yclick - sunarray[i].y > 15 )  && (yclick - sunarray[i].y < 35)))){
			sunarray[i].y = sunflowerarray[i].y;
			sunarray[i].suncount += 1;
			if(sunarray[i].suncount > 4){
					sunarray.splice(i,1);
					sunflowerarray.splice(i, 1);
				}
			}
			}
		//sunarray[i].drawSun();
		}
	}

	xclick = undefined;
	yclick = undefined;
	if(zombiecount <2){
	requestAnimationFrame(animate);
	}
	else{
		
		replay();
	}
}
//animate();


function replay(){
	peashooterarray = [];
	bulletarray = [];
	commanderarray = [];
	commanderbulletarray = [];
	sunflowerarray = [];
	sunarray = [];
	zombiearray = [];
	
	

		
				for(var cols = 0; cols < 9; cols++){
					gamefield[cols] = [];
				}
			
			
			
		context.clearRect(0,0, canvas.width, canvas.height);
		gameover.drawBackground(context);
		playagain.style.display = "block";
		var replay = document.createElement("button");
		replay.innerHTML="Play Again";
		replay.style.left = "450px";
		replay.style.width = "113px";
		replay.style.height = "41px";
		replay.style.background = "url('images/button.png')";
		replay.style.position = "absolute";
		replay.style.left = "400px";
		playagain.appendChild(replay);
		
		 
		replay.onclick = function(){
			zombiecount=0;
			gameload();
		}
	}



