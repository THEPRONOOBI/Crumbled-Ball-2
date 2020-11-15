
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin;
function preload()
{
	dustbin = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (50,100,40)
	ground = new Ground(400,height,800,20)

	leftSide = new Dustbin(500,600,20,100)
		

	
    
	rightSide = new Dustbin(700,600,20,100)
		

	
	

	bottomSide = new Dustbin(600,640,200,20)

		

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper.display();
  ground.display();
 leftSide.display();
 rightSide.display();
 bottomSide.display();
 imageMode(CENTER)
 image(dustbin,600,580,240,250)
}
function keyPressed() {
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


