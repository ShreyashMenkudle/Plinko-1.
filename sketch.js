const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions = [];
var divisionHeight = 300;
var particles =[];
var plinkos = [];
var ground;



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,500,10);

for (var i=0; i<=width;i=i+80 ){
     divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));

}

for (var j=40; j<=width;j=j+40 ){
  plinkos.push(new Plinkos(j,70));
}

for (var j=15; j<=width-10;j=j+40 ){
  plinkos.push(new Plinkos(j,175));
}

for (var j=40; j<=width;j=j+40 ){
  plinkos.push(new Plinkos(j,275));
}

for (var j=15; j<=width-10;j=j+40 ){
  plinkos.push(new Plinkos(j,375));
}
}

function draw() {
  background("black");  
  Engine.update(engine);
  
  ground.display();
  
for (var i=0; i < divisions.length;i++ ){
  divisions[i].display();
}

if (frameCount %60 === 0) {
   particles.push(new Particle(random(width/2-30,width/2+30),10,10));
}

for (var h=0; h < particles.length;h++ ){
  particles[h].display();
}

for (var j=0; j < plinkos.length;j++ ){
  plinkos[j].display();
}

} 