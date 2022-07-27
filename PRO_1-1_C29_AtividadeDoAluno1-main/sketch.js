const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var corda;
let engine;
let world;
var ground;
var fruta
var ligacao
function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
 corda=new Rope(6,{x:245,y:30});
 var restricao_options={
 density:0.001
 }
fruta=Bodies.circle(300,300,20,restricao_options);
Matter.Composite.add(corda.body,fruta);
ligacao=new Link(corda,fruta);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  ground.show();
  corda.show();
  ellipse(fruta.position.x,fruta.position.y,20,20);
  Engine.update(engine);
  

 
   
}
