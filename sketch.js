const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1;

function setup() 
{
  createCanvas(1536,600);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(650,500,400,20);
  box1 = new Box(650,450,20,50);
}

function draw() 
{
  background(210,105,30); 
  Engine.update(engine);

  ground.display();
  box1.display();
  
}