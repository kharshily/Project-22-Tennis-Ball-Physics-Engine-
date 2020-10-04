const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var ground_options = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,50,10,ground_options);
  World.add(myworld,ground);

  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  var ball_options = {
    restitution : 0.5
  }

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(myworld,ball);
  
}

function draw() {
  background(0);  

  Engine.update(myengine);

  fill("green");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}