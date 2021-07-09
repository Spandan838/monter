class Box {
  constructor(x, y, width, height,color) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image=loadImage("70px-Anime_eye.svg.webp");
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
  
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    
    //fill("purple");
    rect(0, 0, this.width, this.height);
    pop();
  }
}