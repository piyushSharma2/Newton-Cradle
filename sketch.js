
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob;
var bgImg;
var roof;
var chain;
var rope1,rope2,rope3,rope4,rope5;
var bob2,bob3,bob4,bob5;

function preload()
{
	bgImg=loadImage("newton.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob=new Bob(280,300)
bob2=new Bob(340,300)
bob3=new Bob(400,300)
bob4=new Bob(460,300)
bob5=new Bob(520,300)

roof=new Roof(400,70,280,40)


rope1=new Rope(bob3.body,roof.body,0,0)
rope2=new Rope(bob4.body,roof.body,55,0)
rope3=new Rope(bob5.body,roof.body,110,0)
rope4=new Rope(bob2.body,roof.body,-55,0)
rope5=new Rope(bob.body,roof.body,-110,0)


	Engine.run(engine);    

	
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
  bob.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

text(mouseX +','+mouseY,10,45)
  
  roof.display();
 
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===38){
    Matter.Body.applyForce(bob.body,bob5.body.position,{x:-215,y:215})

  }
}

