if(mouse.y> 0 && mouse.y <=145)
{
	var i = 0;
	if(mouse.x > 10 && mouse.x <= 105){
		peashooterarray.push(new Peashooter(context, 84, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
	}
	
	if( mouse.x > 105 && mouse.x <= 210){
		peashooterarray.push(new Peashooter(context, 180, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 210 && mouse.x <= 315){
		peashooterarray.push(new Peashooter(context, 282, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 315 && mouse.x <= 420){
		peashooterarray.push(new Peashooter(context, 377, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 420 && mouse.x <= 525){
		peashooterarray.push(new Peashooter(context, 474, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 525 && mouse.x <= 630){
		peashooterarray.push(new Peashooter(context, 579, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 630 && mouse.x <= 735){
		peashooterarray.push(new Peashooter(context, 673, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 735 && mouse.x <= 840){
		peashooterarray.push(new Peashooter(context, 467, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
		
	if( mouse.x > 840 && mouse.x <= 945){
		peashooterarray.push(new Peashooter(context, 864, 40));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
}

if(mouse.y> 145 && mouse.y <= 231)
{
	var i = 1;
	if(mouse.x > 10 && mouse.x <= 105){
		peashooterarray.push(new Peashooter(context, 84, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
	}
	
	if( mouse.x > 105 && mouse.x <= 210){
		peashooterarray.push(new Peashooter(context, 180, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 210 && mouse.x <= 315){
		peashooterarray.push(new Peashooter(context, 282, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 315 && mouse.x <= 420){
		peashooterarray.push(new Peashooter(context, 377, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 420 && mouse.x <= 525){
		peashooterarray.push(new Peashooter(context, 474, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 525 && mouse.x <= 630){
		peashooterarray.push(new Peashooter(context, 579, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 630 && mouse.x <= 735){
		peashooterarray.push(new Peashooter(context, 673, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 735 && mouse.x <= 840){
		peashooterarray.push(new Peashooter(context, 467, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
		
	if( mouse.x > 840 && mouse.x <= 945){
		peashooterarray.push(new Peashooter(context, 864, 120));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
}

if(mouse.y> 231 && mouse.y <= 318)
{
	var i = 2;
	if(mouse.x > 10 && mouse.x <= 105){
		peashooterarray.push(new Peashooter(context, 84, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
	}
	
	if( mouse.x > 105 && mouse.x <= 210){
		peashooterarray.push(new Peashooter(context, 180, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 210 && mouse.x <= 315){
		peashooterarray.push(new Peashooter(context, 282, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 315 && mouse.x <= 420){
		peashooterarray.push(new Peashooter(context, 377, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 420 && mouse.x <= 525){
		peashooterarray.push(new Peashooter(context, 474, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 525 && mouse.x <= 630){
		peashooterarray.push(new Peashooter(context, 579, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 630 && mouse.x <= 735){
		peashooterarray.push(new Peashooter(context, 673, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 735 && mouse.x <= 840){
		peashooterarray.push(new Peashooter(context, 467, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
		
	if( mouse.x > 840 && mouse.x <= 945){
		peashooterarray.push(new Peashooter(context, 864, 200));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
}

if(mouse.y> 318 && mouse.y <= 400)
{
	var i = 3;
	if(mouse.x > 10 && mouse.x <= 105){
		peashooterarray.push(new Peashooter(context, 84, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
	}
	
	if( mouse.x > 105 && mouse.x <= 210){
		peashooterarray.push(new Peashooter(context, 180, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 210 && mouse.x <= 315){
		peashooterarray.push(new Peashooter(context, 282, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 315 && mouse.x <= 420){
		peashooterarray.push(new Peashooter(context, 377, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 420 && mouse.x <= 525){
		peashooterarray.push(new Peashooter(context, 474, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 525 && mouse.x <= 630){
		peashooterarray.push(new Peashooter(context, 579, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 630 && mouse.x <= 735){
		peashooterarray.push(new Peashooter(context, 673, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 735 && mouse.x <= 840){
		peashooterarray.push(new Peashooter(context, 467, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
		
	if( mouse.x > 840 && mouse.x <= 945){
		peashooterarray.push(new Peashooter(context, 864, 280));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
}

if(mouse.y> 400 && mouse.y <= 485)
{
	var i = 4;
	if(mouse.x > 10 && mouse.x <= 105){
		peashooterarray.push(new Peashooter(context, 84, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
	}
	
	if( mouse.x > 105 && mouse.x <= 210){
		peashooterarray.push(new Peashooter(context, 180, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 210 && mouse.x <= 315){
		peashooterarray.push(new Peashooter(context, 282, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 315 && mouse.x <= 420){
		peashooterarray.push(new Peashooter(context, 377, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 420 && mouse.x <= 525){
		peashooterarray.push(new Peashooter(context, 474, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 525 && mouse.x <= 630){
		peashooterarray.push(new Peashooter(context, 579, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 630 && mouse.x <= 735){
		peashooterarray.push(new Peashooter(context, 673, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
	if( mouse.x > 735 && mouse.x <= 840){
		peashooterarray.push(new Peashooter(context, 767, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
		
	if( mouse.x > 840 && mouse.x <= 945){
		peashooterarray.push(new Peashooter(context, 864, 360));
		gamefield[i][0].push(peashooterarray[peashooterarray.length-1]);
		peashooterarray[peashooterarray.length - 1].drawPeashooter();
		score = score  - peashooterarray[peashooterarray.length - 1].cost;
		bulletarray.push(new Bullet(context, mouse.x - 25, mouse.y - 25 ));
		flagonclickcanvas = undefined;
		}
	
}



/*for(var i = 0; i<zombiearray.length; i++){
	if(zombiearray.length > 0){
		zombiearray[i].updatePosition();
		if(zombiearray[i].x < -80){
			zombiearray.splice(i, 1);
			}
		}
	
	}
		for(var i = 0; i< bulletarray.length ; i++){
				if(bulletarray.length >0){
				bulletarray[i].bulletCollision(bulletarray[i], zombiearray[i])
				}
				
			
		}*/
		
		
		
		
		
		
		if((bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i])) || (bulletarray[j].x > 945)){
				
				if(bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i])){
					zombiearray[i].hits += 1;
					if(zombiearray[i].hits > 4){
						zombiearray.splice(i,1);
					}
				}
				/*if(zombiearray[i].x < -80){
					zombiearray.splice(i, 1);
					}*/
				
				if(peashooterarray[j]) {
					bulletarray[j].x = peashooterarray[j].x + 75
				}
				//bulletarray.splice(j,1);
			}
			
			
			
			
			
			for(var j = 0 ; j < bulletarray.length; j++){
			//update the position of the bullet
			bulletarray[j].updatePosition();
			//var lastbullet = bulletarray[j].start;
			//if((bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i])) || ((Date.now() - bulletarray[j].start ) > 3000)){
				/*if ((peashooterarray[j]) && ((Date.now() - bulletarray[j].start ) > 5000)){
					bulletarray.push(new Bullet(context, peashooterarray[j].x , peashooterarray[j].y));
					
				}*/
				if(bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i])){	//&&((Date.now() - bulletarray[j].start ) > 3000))){
					zombiearray[i].hits += 1;
					//bulletarray[j].start = Date.now();
					//bulletarray[j].x = peashooterarray[j].x + 75;
					if(peashooterarray[j] && ((Date.now() - bulletarray[j].start) > 300)){
						bulletarray.push(new Bullet(context, peashooterarray[j].x , peashooterarray[j].y));
					}
					bulletarray.splice(j,1);
					
					if(zombiearray[i].hits > 4){
						zombiearray.splice(i,1);
					}
				}
				/*if(zombiearray[i].x < -80){
					zombiearray.splice(i, 1);
					}*/
				
				if((peashooterarray[j])&& (bulletarray[j])){
					if(bulletarray[j].x > 945) {
					//bulletarray[j].x = peashooterarray[j].x + 75;
					bulletarray.splice(j,1);
					bulletarray.push(new Bullet(context, peashooterarray[j].x , peashooterarray[j].y));
					}
					//bulletarray[j].start = Date.now();
				}
				//bulletarray.splice(j,1);
			//}
			
		}
		
		
		
		
		
		
		
		
		
		
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
				if (Date.now() - gamestart > 90000)
				{	zombiearray[i].dx = -0.8;
					context.font="80px Georgia";
					context.fillStyle = "rgba(255, 0, 0, " + beta + ")";
					beta = beta - 0.001;
					context.fillText("Next Level",  50, 80, 500, 80);
					if (beta < 0) {
						context.fillText (" ",0,0,0,0);
						context.fillStyle = "brown";
					}
				}
			}
			if((Date.now() - gamestart > 60000)&& (Date.now() - gamestart <90000)){
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
				/*if(zombiearray[i].x < -80){
					zombiearray.splice(i, 1);
					}*/
				
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
				//bulletarray.splice(j,1);
			}
		
		
		
		//peashooter splice and collision
		for(var k = 0; k < peashooterarray.length; k++){
			if(peashooterarray.length > 0 ){
				peashooterarray[k].drawPeashooter();
				}
			if(zombiearray.length > 0){
			if(zombiearray[i].zombieCollision(zombiearray[i], peashooterarray[k])){
				//zombiearray[i].dx = 0;
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
					if(zombiearray[i].x - peashooterarray[j].x < 500){
					 if((Date.now() - bulletarray[j].start)< 1000){
						bulletarray[j].x = -1000;
						
						}
					}
					else{bulletarray[j].x = peashooterarray[j].x + 75; //bulletarray[j].start = Date.now();}
					//if (bulletarray[j].bulletCollision(bulletarray[j], zombiearray[i])){
						//console.log("bullets bullets");
						//setTimeout(bulletarray[j].updatePosition(), 1000);
						//bulletarray[j].x = peashooterarray[j].x + 75;
					//}
					//else{
						//bulletarray[j].x = peashooterarray[j].x + 75;
						//bulletarray[j].updatePosition();
					//}
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
	if(zombiecount <=5){
	requestAnimationFrame(animate);
	}
	else{
	context.font="150px Georgia";
	//context.clearRect(0,0, canvas.width, canvas.height);
	context.fillText("Zombies Ate Everything",  50, 200, 800, 400);
	context.fillText("YOU LOST!!",  50, 400, 800, 400);
	context.fillStyle = "Black";
	}
}
