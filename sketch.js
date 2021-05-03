var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
//var trajectoryLength=100;
var score =0;
var part;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=800; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 80; k <=800; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/4, 10, divisionHeight));
  }

  //create 1st row of plinko objects
  for (var j = 55; j <=width; j=j+48) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 30; j <=width-10; j=j+48) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
for (var j = 55; j <=width-20; j=j+48)
{
  plinkos.push(new Plinko(j,275));
}
  
  //create 4th row of plinko objects
  for (var j = 30; j <=width-10; j=j+48) 
  {
    plinkos.push(new Plinko(j,375));
  }


  //create particle objects
  if(frameCount%30 === 0){ 
    for(var a = 0; a <=height-10; a++){
   particles.push(new Particles(600,a))
}
    //particles.push(new Particles(random(width/2-10, width/2+10), 10, 10))        
} 
 

}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();
  }
 
}

//function loop(){
   
//}