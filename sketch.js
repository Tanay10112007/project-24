
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground;
var part1, part2, part3;
function preload()
{
    
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(150,100, 50);
    ground = new Ground(400,570,810,25);
    part1 = createSprite(480,520,15,50);
    part1.shapeColor = "white";
    part2 = createSprite(670,520,15,50);
    part2.shapeColor = "white";
    part3 = createSprite(575,550,175,15);
    part3.shapeColor = "white";
	  Engine.run(engine);
    
}


function draw() {
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  
  drawSprites();
 }

 function keyPresssed(){
   if(keyCode === UP_ARROW){
     paper.applyForce(paper.body, paper.body.position, {x:85, y:-85});
   }
 }