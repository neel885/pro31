const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drop;

function preload(){
    
}

function setup(){
var canvas = createCanvas(1000,625);
engine = Engine.create();
world = engine.world;

drop = new Drops(100,200,3)
    
}

function draw(){
background("black");
Engine.update(engine);

drop.display();



//Engine.run(engine);


}   

