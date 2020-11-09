
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Plinkos = [];
var Particles = [];
var Divisions = [];
var divisionHeight = 300;
var width = 480;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(240,800,500,10);
	wall1 = new Ground(0,400,10,800);
	wall2 = new Ground(240,0,500,10);
	wall3 = new Ground(480,400,10,800);
	
	
	for(var k = 0;k<=width;k+=80){
		Divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
	}
	for(var j = 40;j<=width;j += 50){
		Plinkos.push(new plinko(j,75))
	}
	for(var j = 15;j<=width;j += 50){
		Plinkos.push(new plinko(j,175))
	}
	for(var j = 40;j<=width;j += 50){
		Plinkos.push(new plinko(j,275))
	}
	for(var j = 15;j<=width;j += 50){
		Plinkos.push(new plinko(j,375))
	}








	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
    fill("yellow");
	ground.display();
	fill("brown");
	wall1.display();
	wall2.display();
	wall3.display();

	
	for(k = 0;k < Divisions.length;k++){
		Divisions[k].display();
	}
	for (var i = 0; i < Particles.length; i++) {
		Particles[i].display();
	}
	if (frameCount % 60 == 0) {
		Particles.push(new particle(random(width/2-10, width/2+10), 10, 10))
	}
	for(j = 0;j < Plinkos.length;j++){
		Plinkos[j].display();
	}

	

  drawSprites();
 
}



