class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     
      this.image=loadImage("images/tree.png")
      this.x = x ; 
      this.y = y;
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x , pos.y) ; 
      imageMode(CENTER);
			image(this.image, 0,1050,580) ; 
      pop();
     }
  };
