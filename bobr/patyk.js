class patyki{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  draw() {
    push()
    imageMode(CENTER,CENTER)
    image(zdjecie,this.x, this.y,50,80);
    pop()
  }
}