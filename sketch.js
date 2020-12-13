
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var ground,paperObject,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	 
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	 

	 paperObject =new Paper(240,600,45);
	 ground =new Ground(0,650,1650,20);
	 dustbin1 =new Dustbin(630,630,160,20);
	 dustbin2 =new Dustbin(551,618,20,45);
	 dustbin3 =new Dustbin(710,615,20,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:110,y:132});
	}
}

