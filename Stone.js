class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false , 
          restitution: 0,
          density:1.2,
          friction: 1 
      }
      this.image = loadImage("images/stone.png") ; 
      this.x = x ; 
      this.y = y;
      this.r = r;
      World.add(world, this.body);
    }
  
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x , pos.y) ; 
      imageMode(CENTER);
			image(this.image, 0,235,420) ;  
      pop()
    }
  };