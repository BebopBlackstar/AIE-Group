var Powerup = function(x, y, type)
{
	this.height = 50;
	this.width = 50; 
	this.type = 0;
	this.type = type;
	
	this.width = 32;
	this.height = 32;
	
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.timer = 0;
	
	this.potions = document.createElement("img");

	
	switch (type)
	{
		case 0:
			this.potions.src = "firepotion.png";
		break;
		case 1:
		break;
		case 2:
		
		break;
		
		case 3:
		
		break;
	}

}

Powerup.prototype.draw = function()
{
	
	context.drawImage(this.potions, this.position.x - this.width - camera.worldOffsetX, this.position.y - this.height)
}