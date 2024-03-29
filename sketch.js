var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite=createSprite(width/2, 657.5, width, 25);
	groundSprite.shapeColor=color("lightgray");


	engine = Engine.create();
	world = engine.world;

	box1 = new Catcher(400, 385, 200, 20);
	box2 = new Catcher(315, 350, 20, 100);
	box3 = new Catcher(485, 350, 20, 100);


	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution: 1, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic: true} );
	 World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //packageSprite.collide(box1);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.show();
  box2.show();
  box3.show();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody, false);
  }
}



