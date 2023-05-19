let zdj1,zdj2,kar3,zdj4,zdj5,zdj6,klik,karty_zdj
let mozna = true;
let tablica = [0,0]
let karty = [0,0,0,0]
let punkty=0;


function setup() {
  createCanvas(800, 600);
  
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[0]=new karta(25,12.5,0,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[1]=new karta(225,12.5,1,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[2]=new karta(25,212.5,2,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[3]=new karta(225,212.5,3,karty_zdj[x][0]);
  
  do{  
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[4]=new karta(425,12.5,4,karty_zdj[x][0]);
  
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[5]=new karta(425,212.5,5,karty_zdj[x][0]);
      
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[6]=new karta(25,412.5,6,karty_zdj[x][0]);
     
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[7]=new karta(225,412.5,7,karty_zdj[x][0]);
        
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[8]=new karta(425,412.5,8,karty_zdj[x][0]);
      
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[9]=new karta(625,412.5,9,karty_zdj[x][0]);
      
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[10]=new karta(625,212.5,10,karty_zdj[x][0]);
   
  do{
    x = floor(random(0,6));
  }while(karty_zdj[x][1] == 0)
    
  karty_zdj[x][1]--;
  
  karty[11]=new karta(625,12.5,11,karty_zdj[x][0]);
   
}

function preload(){
  zdj1= loadImage("pop.jfif")
  zdj2= loadImage("shrek.jfif")
  zdj3= loadImage("cap.jpg")
  zdj4= loadImage("shib.jpg")
  zdj5= loadImage("a.jpg")
  zdj6= loadImage("stonk.jpg")
  karty_zdj = [[zdj1,2],[zdj2,2],[zdj3,2],[zdj4,2],[zdj5,2],[zdj6,2]];
}

function draw() {
  background(220);
  if(punkty<6){
  for(let y in karty){
    karty[y].display()
  }
  if(mouseIsPressed){
    klik = true;
  }
  else{
    klik = false;
  }
  textSize(30);
  textAlign(CENTER,CENTER);
  fill(255);
  stroke(0)
  text(punkty,width/2,50);
  }else{
  textSize(80);
  textAlign(CENTER,CENTER);
  fill(255);
  stroke(0);
  strokeWeight(6)
  text("Wygrałeś",width/2,height/2);
  }
}

function wpisz(w1,w2){
  if(tablica[0] == 0){
    tablica[0] = [w1,w2]
    karty[w1].pokaz = true;
  }else if(tablica[1] == 0){
    tablica[1] = [w1,w2]
    karty[w1].pokaz = true;
  }
  if(tablica[1] !== 0){
    
    mozna = false;
    setTimeout(() =>{
      
      mozna = true;
      
      if(tablica[0][1] !== tablica[1][1]){
        karty[tablica[0][0]].pokaz = false;
        karty[tablica[1][0]].pokaz = false;
      }else{
        punkty++;
      }
      
      tablica = [0,0]
      
    },1000);
  }
}