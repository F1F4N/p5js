function preload(){
  putin=loadImage('p.png');
  szojgu=loadImage('s.png');
  lavrov=loadImage('l.png');
  mos=loadImage('moskwa.png');
}


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(mos);
  translate(200,200);
  rotate(-90)
  
  let hr=hour();
  let mn=minute();
  let sc=second();
  
  fill(255);
  noStroke()
  textSize(20)
  text(hr + ":" + mn + ":" + sc,100,200)
  
  strokeWeight(8)
  noFill()
  stroke(255,100,150);
  let secondAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,secondAngle);
  
  stroke(150,100,255);
  let minuteAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,minuteAngle);
  
  stroke(150,255,150);
  let hourAngle = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hourAngle);

  push()
  rotate(secondAngle+95)
  stroke(255);
  image(szojgu,-50,-150,100,150)
  pop()
  
   push()
  rotate(minuteAngle+95)
  stroke(255);
  image(lavrov,-50,-150,100,150)
  pop()
  
  push()
  rotate(hourAngle+95)
  stroke(255);
  image(putin,-50,-150,100,150)
  pop()
}