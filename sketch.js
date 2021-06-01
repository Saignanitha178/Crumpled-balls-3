
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObj, groundObj, launcher;
var world;


function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;

 
  paperObj = new paper(200, 150, 70);
  groundObj = new ground(width / 2, 670, width, 20);
  dustbinObj = new dustbin(1200, 650); 
  launcher = new Launcher(paperObj.body,{x:100,y:150});
 
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
//Engine.update(engine);

  paperObj.display();
  groundObj.display();
  dustbinObj.display();
launcher.display();

}

//function keyPressed() {
  //	if (keyCode === UP_ARROW) {

  //  	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
//

  //	}
//}

//function mouseDragged(){
 //   Matter.Body.setPosition(paperObj.body, {x: mouseX , y: mouseY});
//}


//function mouseReleased(){
 //   slingshot.fly();
//}





