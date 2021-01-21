
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5,roof,chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,100,600,50);
	bob1 = new Bob(200,600,50);
	bob2 = new Bob(300,600,50);
	bob3 = new Bob(400,600,50);
	bob4 = new Bob(500,600,50);
	bob5 = new Bob(600,600,50);

	chain1 = new Chain(bob1.body,roof.body,-200);
	chain2 = new Chain(bob2.body,roof.body,-100);
	chain3 = new Chain(bob3.body,roof.body,0);
	chain4 = new Chain(bob4.body,roof.body,100);
	chain5 = new Chain(bob5.body,roof.body,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(160);

  textSize(30);
  fill("black");
  text("Newton's Cradle",300,50);
  
  drawSprites();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}

function keyPressed(){

	if (keyCode === 49){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-400})
	}
	
	if (keyCode === 50){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-400,y:-400})
	}

	if (keyCode === 51){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-400,y:-400})
	}

	if (keyCode === 52){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:-400,y:-400})
	}

	if (keyCode === 53){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:400,y:400})
	}
	
	if (keyCode === 54){
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:400,y:400})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:400,y:400})
	}

	if (keyCode === 55){
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:400,y:400})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:400,y:400})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:400,y:400})
	}

	if (keyCode === 56){
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:400,y:400})
		Matter.Body.applyForce(bob3.body,bob3.body.position,{x:400,y:400})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:400,y:400})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:400,y:400})
	}

	if (keyCode === 57){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-400,y:-400})
		Matter.Body.applyForce(bob4.body,bob4.body.position,{x:400,y:400})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:400,y:400})
	}

}



