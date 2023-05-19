let giga;
let obrazgiga;
let sus;
let susi;
let famil;
let famils;
let asus;
let amogus;
let sius;
let siu;

function preload(){
  giga = loadSound("giga-chad-theme.mp3");
  obrazgiga = loadImage("gigachad.gif");
  sus = loadSound("sus-rock.mp3");
  susi = loadImage("sus.gif");
  famils = loadSound("dom-toretto-family.mp3");
  famil = loadImage("family.gif");
  asus = loadImage("asus.gif");
  amogus = loadSound("Amogus Sound Effect.mp3");
  sius = loadSound("cr_suuu.mp3");
  siu = loadImage("su.gif");
}


function setup() {
  createCanvas(900,500);
}
function draw() {
 
  background("grey");
  
  if(mouseIsPressed && mouseY>400 && mouseY<470 && mouseX>550 && mouseX<700){
    if(giga.isPlaying() == false){
    giga.play();
    sus.stop();
    famils.stop();
      amogus.stop();
      sius.stop();
    }
    image(obrazgiga,10,10,750,500);
}
  if(mouseIsPressed && mouseY>400 && mouseY<440 && mouseX>50 && mouseX<250){
    if(sus.isPlaying() == false){
      sus.play();
      giga.stop();
      famils.stop();
     sius.stop();
      amogus.stop();
    }
      image(susi,10,10,750,500)
    
  }
  if(mouseIsPressed && mouseY>400 && mouseY<450 && mouseX>300 &&mouseX<400){
    if(famils.isPlaying() == false){
      famils.play();
      giga.stop();
      sus.stop();
      amogus.stop();
      sius.stop();
    }
      image(famil,10,10,750,500)
  }
  if(mouseIsPressed && mouseY>400 && mouseY<455 && mouseX>425 &&mouseX<525){
    if(amogus.isPlaying() == false){
      amogus.play();
      famils.stop();
      giga.stop();
      sus.stop();
      sius.stop();
    }
    image(asus,10,10,750,500)
  }
  if(mouseIsPressed && mouseY>400 && mouseY<480 && mouseX>770 && mouseX<830){
    if(sius.isPlaying() == false){
      sius.play();
      amogus.stop();
      famils.stop();
      giga.stop();
      sus.stop();
    }
   image(siu,10,10,1000,500)
  }
  fill("lightgrey");
  rect(425,400,100,50)
  rect(50,400,200,50);
  textSize(25);
  fill(0,0,0);
  text("Dziewczyna",80,430);
  fill("lightgrey");
  rect(750,400,100,50)
  rect(300,400,100,50);
  rect(550,400,180,50);
  fill("black");
  text("Programowanie",550,430)
  text("Rodzina",300,430);
  text("SUS",450,430);
  text("SIU",770,430);
  fill("black")
  textSize(50)
  text("Co wybierasz?",250,50);
  
}