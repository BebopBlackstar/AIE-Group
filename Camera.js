var Camera = function()
{
	this.width = canvas.width;
	this.height = canvas.height;
	
	this.origin = new Vector2();
	this.origin.set(0, 0);
	
	this.worldOffsetX = 0;
	
	this.speed = 3;
}

Camera.prototype.generateMap = function()
{
	// first if statement stops the camera moving at the end of the level.
	if (this.origin.x <= MAP.tw*TILE-this.width)
	{
		// speeds up camera if player is moving to the right at the edge of screen
		if (player.position.x - this.origin.x > 600)
		{
			this.speed = 6;
		}
		else
		{
			this.speed = 4;	
		}
	this.origin.x += this.speed;
	}
	
	var maxTiles = Math.floor(SCREEN_WIDTH / TILE) + 2;
	var tileX = pixelToTile(this.origin.x);
	var offsetX = TILE + Math.floor(this.origin.x%TILE);
	startX = tileX;// - Math.floor(maxTiles / 2);
	
	if(startX < -1)
	{
		startX = 0;
		offsetX = 0;
	}
	
	if(startX > MAP.tw - maxTiles)
	{
		startX = MAP.tw - maxTiles + 1;
		offsetX = TILE;
	}
		
		this.worldOffsetX = startX * TILE + offsetX;
		
	for( var layerIdx=0; layerIdx < LAYER_COUNT; layerIdx++ )
	{
		for( var y = 0; y < level1.layers[layerIdx].height; y++ )
		{
			var idx = y * level1.layers[layerIdx].width + startX;
			for( var x = startX; x < startX + maxTiles; x++ )
			{
				if( level1.layers[layerIdx].data[idx] != 0 )
				{
					// the tiles in the Tiled map are base 1 (meaning a value of 0 means no tile),
					// so subtract one from the tileset id to get the
					// correct tile
					var tileIndex = level1.layers[layerIdx].data[idx] - 1;
					var sx = TILESET_PADDING + (tileIndex % TILESET_COUNT_X) *(TILESET_TILE + TILESET_SPACING);
					var sy = TILESET_PADDING + (Math.floor(tileIndex / TILESET_COUNT_X)) * (TILESET_TILE + TILESET_SPACING);
					context.drawImage(tileset, sx, sy, TILESET_TILE, TILESET_TILE, (x-startX)*TILE - offsetX, (y-1)*TILE + TILE, TILESET_TILE, TILESET_TILE);
				}
				idx++;
			}
		}
	}
		context.rect(this.origin.x, this.origin.y, this.width - 5, this.height - 5);

}