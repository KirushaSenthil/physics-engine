const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myEngine,myWorld;
var ground;
var ball;
var ball1
function setup() {
  createCanvas(800,400);
myEngine = Engine.create();
myWorld =  myEngine.world;
var options = {
  isStatic:true
}
var bounce = {
  restitution:0.9
}
ground = Bodies.rectangle(400,400,800,100,options);
ball= Bodies.circle(400,200,50,bounce)
ball1=Bodies.circle(200,100,30,bounce)
World.add(myWorld,ground);
World.add(myWorld,ball);
World.add(myWorld,ball1);
console.log(ground)
console.log(ground.position.y)
console.log(ball)
}

function draw() {
  background(0);
  Engine.update(myEngine)
  ellipseMode(RADIUS)
  rectMode(CENTER)  
rect(ground.position.x,ground.position.y,800,100)
ellipse(ball.position.x,ball.position.y,50)
ellipse(ball1.position.x,ball1.position.y,30)
}