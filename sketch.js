const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var color;

function preload() {
  bg = loadImage("icon.png");
}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1000, 600, 1000, 20);
  

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1500,550,300);
  monster1 = new Monster1(1300,550,300);

  // color="white";
  box2 = new Box(950, 100, 70, 70);
  box3 = new Box(950, 100, 70, 70);
  box4 = new Box(950, 100, 70, 70);
  box5 = new Box(950, 100, 70, 70);
  box6 = new Box (950, 100, 70, 70);

  // color="green";
  box10 = new Box (800, 200, 70, 70);
  box11 = new Box (800, 200, 70, 70);
  box12 = new Box (800, 200, 70, 70)  
  box13 = new Box (800, 200, 70, 70);
  box14 = new Box (800, 200, 70, 70);
   

  // color="red";
    box15 = new Box (700, 300, 70, 70);  
    box16 = new Box (700, 300, 70, 70);
    box17 = new Box (700, 300, 70, 70);
    box18 = new Box (700, 300, 70, 70);
    box19 = new Box (700, 300, 70, 70);
    box20 = new Box (700, 300, 70, 70);


    // color="blue";
    box1 = new Box(600, 100, 70, 70);
    box22 = new Box(600, 100, 70, 70);
    box23 = new Box(600, 100, 70, 70);
    box24 = new Box(600, 100, 70, 70);
    box25 = new Box(600, 100, 70, 70);
    box26 = new Box(600, 100, 70, 70);
    box27 = new Box(600, 100, 70, 70);
    
  
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  text("Please make the zoom of your browser 75%",300,30);
  textSize(35)
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();





  hero.display();
  rope.display();
  //monster.display();
  monster1.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

