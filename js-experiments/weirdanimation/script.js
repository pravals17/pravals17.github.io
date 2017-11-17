var c = document.getElementById("mycanvas");
c.style.background = '#073947';
var ctx = c.getContext('2d');

function Circle() {
	this. x = 0;
	this.y = 0;
	this.radius = 10;
	this.maxRadius = 10;
	this.columnOffset = 0;
	this.sizeOffset = 0;



  this.drawCircle = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#fdae78';
    ctx.fill();
    ctx.closePath();
  }

}


function moveCircle(){
	this.rows = 10;
	this.columns = 15;
	this.topPadding = 100;
	this.leftPadding = 50;
	this.phase = 0;
	this.speed = 0.005;
	this.frameCount = 0;
	this.numberOfMatrices = 2;
	var that = this;
	this.circles = [];
	this.circleRow = [];
	this.circleColumn = [];

	this.draw = function() {

		for(var matrix = 0; matrix < this.numberOfMatrices; matrix++) {
			for(var i = 0; i < this.columns; i++) {
				for(var j= 0; j < this.rows; j++) {
					//first column in phase 0
					that.phase = that.phase + (matrix / (this.numberOfMatrices-1) * (Math.PI));
					this.circleColumn[j] = new Circle();
					this.circleColumn[j].columnOffset = (i / (this.columns - 1)) * (Math.PI);
					this.circleColumn[j].x = this.leftPadding + i * 20;
					this.circleColumn[j].y = this.topPadding + Math.sin(that.phase + this.circleColumn[j].columnOffset) * 45 + (j * 12);
					//offset in the circles of each column
					this.circleColumn[j].sizeOffset = (Math.cos(that.phase - (j / this.rows) + this.circleColumn[j].columnOffset) + 1) * 0.5;
					this.circleColumn[j].radius = this.circleColumn[j].sizeOffset * this.circleColumn[j].maxRadius;
					this.circleColumn[j].drawCircle();
				}
				//next row of circles
			this.circleRow[i] = this.circleColumn;
			}
		this.circles[matrix] = this.circleMatrix;
		}
		//phase for next coumn of circles
    this.phase = this.frameCount * this.speed;
    this.frameCount++;
  }
}

var moveCircleObject = new moveCircle();
var myInterval = setInterval(function(){
  ctx.clearRect(0, 0, c.width, c.height);
  moveCircleObject.draw();
}, 10);

