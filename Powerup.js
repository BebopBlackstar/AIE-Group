var Powerup = function(x, y, type)
{
	this.height = 50;
	this.width = 50; 
	this.type = 0;
	this.type = type;
	
	this.width = 36;
	this.height = 48;
	
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.timer = 0;
	
     var potions=document.getElementById("powerups.png");

	switch (type)
	{
		case 0:
		
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
	switch (type)
	{
		case 0:
		context.drawImage(powerup, this.x - this.width, this.y - this.width)

		break;
		case 1:
		
		break;
		case 2:
		
		break;
		
		case 3:
		
		break;
	}
}