let dolar;
let radius =100;
let curentradius=100;
let x = 200;
let y = 400;
let score= 0;
let theme;
let clikc;

function preload(){
  dolar= loadImage("i.png");
  theme=loadSound("Ba.mp3");
  clikc=loadSound("M.mp3")
}

function setup() {
  createCanvas(400, 600);

}

function draw() {
  if(theme.isPlaying()==false){
    theme.play()
  }
  background("black");
  coin()
  textAlign(CENTER);
  fill("white");
  textSize(40);
  text(score,width/2,60)
}

function coin(){
  image(dolar, x-100,y-100,curentradius*2,curentradius*2)
}

function mouseClicked() {
  var distance = dist(x, y, mouseX, mouseY);
  if (distance <= radius) {
    currentRadius = 100;
    score++;
  }
}