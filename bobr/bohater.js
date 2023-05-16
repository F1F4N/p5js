class bohater {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.patyki = 0;
    this.jabka =0;
  }
  draw() {
    this.y = constrain(this.y,  0, height-50);
    image(ryuk,this.x-30,this.y-40,50,80)
  }
  up() {
    this.y -= 5;
  }
  down() {
    this.y += 5;
  }
  czydotyka(patyk) {
    if (dist(this.x,this.y,patyk.x,patyk.y)<20) 
        {
          patyk.y = 600;
          patyk.x = random(20,360);
          punkty++;
        }
  }
}