let bubble1;
let ryba;
var speedx = 5;

function setup() {
  ryba= loadImage("r.png");
  createCanvas(400, 400);
  ryba1 = new Rba()
  bubble1 = new Bubble()
  bubble2 = new Bubble()
  bubble3 = new Bubble()
  bubble4 = new Bubble()
  bubble5 = new Bubble()
  bubble6 = new Bubble()
  bubble7 = new Bubble()
  bubble8 = new Bubble()
  bubble9 = new Bubble()
  bubble10 = new Bubble()
  bubble11 = new Bubble()
  bubble12 = new Bubble()
  bubble13 = new Bubble()
  bubble14 = new Bubble()
  bubble15 = new Bubble()
  bubble16 = new Bubble()
  bubble17 = new Bubble()
  bubble18 = new Bubble()
  bubble19 = new Bubble()
  bubble20 = new Bubble()
  bubble21 = new Bubble()
  bubble22 = new Bubble()
  bubble23 = new Bubble()
  bubble24 = new Bubble()

}

function draw() {
  background(0);
  ryba1.rshow();
  bubble1.show();
  bubble1.move()
  bubble2.show();
  bubble2.move();
  bubble3.show();
  bubble3.move()
  bubble4.show();
  bubble4.move()
  bubble5.show();
  bubble5.move()
  bubble6.show();
  bubble6.move()
  bubble7.show();
  bubble7.move()
  bubble8.show();
  bubble8.move()
  bubble9.show();
  bubble9.move()
  bubble10.show();
  bubble10.move()
  bubble11.show();
  bubble11.move()
  bubble12.show();
  bubble12.move()
  bubble13.show();
  bubble13.move()
  bubble14.show();
  bubble14.move()
  bubble15.show();
  bubble15.move()
  bubble16.show();
  bubble16.move()
  bubble17.show();
  bubble17.move()
  bubble18.show();
  bubble18.move()
  bubble19.show();
  bubble19.move()
  bubble20.show();
  bubble20.move()
  bubble21.show();
  bubble21.move()
  bubble22.show();
  bubble22.move()
  bubble23.show();
  bubble23.move()
  bubble24.show();
  bubble24.move()
}

class Rba{
  constructor(){
    this.x=1500;
    this.y=random(100,200);
    }
  rshow(){
    this.rmove()
    image(ryba,this.x,this.y);
    
  }
  rmove(){
    this.x = this.x + speedx;
    if(this.x>-100){
      speedx = -5;
    }
    
    if(this.x<-400){
      speedx = 5
      this.x = 1400;
      this.y=random(0, 240);
    }
  }
}

class Bubble{
  constructor(x,y){
    this.x= random(1,400);
    this.y= random(30,900);
  }
  show(){
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x ,this.y,24,24);
  }
  move(){
    this.x = this.x + random(-5,5);
    this.y = this.y + -5;
     
    if(this.y<-24){
      this.y=random(height+200,height+45);
    }
  }
}