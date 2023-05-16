
let theme;
let zdjecie;
let bg;
let gra =0;
let bober;
let policjant = [];
let jabka= [];
let punkty = 0;
let ryuk;
let turi;
let przejscie = true;

function preload(){
  theme= loadSound("L.mp3");
  turi= loadSound("Tu.mp3");
  zdjecie=loadImage("a.png");
  ryuk= loadImage("ry.png");
  bg=loadImage("city.jfif");
  jabko = loadImage("ja.png");
}

function setup() { 
  createCanvas(400, 400);
  bober = new bohater(100,300);
  for (let i=0; i<1000; i++){
    policjant.push(new patyki(i * 50 + 300, random(20, 340)));
}
  
}


function menu(){
  if(turi.isPlaying() == false){
    turi.play();
    theme.stop();
  }
  background(227, 254, 255)
  fill("green");
  rect(150,175,100,50)
  fill("black")
  textSize(30);
  text("Graj",175,210)
  if(mouseIsPressed){
    if(przejscie && mouseX>150 && mouseX<250 && mouseY>174 && mouseY<250){
    gra=1;
    }
    przejscie= false;
  }
  else{
    przejscie=true;
  }
}

function koniec(){
  if(turi.isPlaying() == false){
    turi.play();
    theme.stop();
  }
  background(227, 254, 255)
  fill("green");
  rect(100,150,235,100)
  fill("black")
  textSize(30);
  text("Wygrałeś",150,200)
  text("Zagraj ponownie",110,225)
  if(mouseIsPressed){
    if(przejscie && mouseX>99 && mouseX<299 && mouseY>149 && mouseY<250){
    gra=1;
    }
    przejscie = false;
  }
  else{
    przejscie= true;
  }
}

function start(){
  if(theme.isPlaying() == false){
  theme.play();
    turi.stop();
    }
  if(gra==1){
  background(bg);
  fill(130, 79, 43);
  rect(0, height*0.90, width, height*0.10);
  if(keyIsPressed && keyCode==32){
    bober.up()
  }
  else {
    bober.down()
  }
    bober.draw();
  for (var i = 0; i < policjant.length; i++) {
        policjant[i].draw();
        bober.czydotyka(policjant[i])
        policjant [i].x -= 1;
    }  
    for (var j = 0; j < jabka.length; j++) {
        jabka[j].draw();
        bober.czydotyka(jabka[j])
        jabka [j].x -= 1;
    }
    fill("white")
    textSize(20)
  text("Punkty:"+ punkty, 30,30) 
  }
  if(punkty==15){
    gra=2;
  }
  }

function draw(){
  if(gra==0){
    menu()
  }
  if(gra==1){
    start();
  }
  if(gra==2){
    koniec();
  }
}


//https://editor.p5js.org/wojcieh/sketches/UPT52T8al