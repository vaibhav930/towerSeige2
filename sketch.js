const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, world



function setup() {
createCanvas(1000,500);
engine = Engine.create()
world=engine.world  

ground = new Ground(400,400,200,20)
ground2 = new Ground(800,200,200,20)
box1 = new Box(840,180,20,20)
box2 = new Box(800,180,20,20)
box3 = new Box(760,180,20,20)
box4 = new Box(800,180,20,20)
box5 = new Box(800,180,20,20)

box6 = new Box(780,180,20,20)
box7 = new Box(780,180,20,20)
box8 = new Box(800,180,20,20)
box9 = new Box(820,180,20,20)
box10 = new Box(820,180,20,20)

box11 = new Box(440,380,20,20)
box12 = new Box(400,380,20,20)
box13 = new Box(360,380,20,20)
box14 = new Box(400,380,20,20)
box15 = new Box(400,380,20,20)

box16 = new Box(380,380,20,20)
box17 = new Box(380,380,20,20)
box18 = new Box(400,380,20,20)
box19 = new Box(420,380,20,20)
box20 = new Box(420,380,20,20)



polygon = new Ball()
slingshot = new SlingShot(polygon.polygon,{x:100,y:200});
}

function draw() {
  background("brown"); 
  mouseX = console.log()
  mouseY = console.log()
  Engine.update(engine)

ground.display();
ground2.display();
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()




polygon.display()
slingshot.display()
}
function mouseDragged(){
Matter.Body.setPosition(polygon.polygon,{x:mouseX,y:mouseY})

}
function mouseReleased()
{
slingshot.fly()
}

function keyPressed(){
if(keyCode === 32){
slingshot.attach(polygon.polygon)
}
}











