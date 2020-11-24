class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1.
			}
			this.image = loadImage("images/mango.png")
		this.x=x;
		this.y=y;
		this.r=r
		
		World.add(world, this.body);

	}
	display()
	{
			
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			imageMode(CENTER);
			image(this.image, 0)
			pop()
			
	}

}