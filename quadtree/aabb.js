(function()
{
	function AABB(center, halfDimension)
	{
		this.center = center;
		this.halfDimension = halfDimension;
		this.quarterDimension = this.halfDimension / 2;
		
		this.x = this.center.x - this.halfDimension;
		this.y = this.center.y - this.halfDimension;
		this.x2 = this.center.x + this.halfDimension;
		this.y2 = this.center.y + this.halfDimension;

		AABBVisualizer.Draw(this);
	}

	AABB.prototype.ContainsPoint = function(point)
	{
		if
		(
			point.x >= this.x &&
			point.x <= this.x2 &&
			point.y >= this.y &&
			point.y <= this.y2
		)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	AABB.prototype.IntersectsAABB = function(aabb)
	{
		if
		(
			this.x < aabb.x2 && 
			this.x2 > aabb.x &&
			this.y < aabb.y2 &&
			this.y2 > aabb.y
		)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	if(typeof module !== 'undefined' && module.exports)
	{
		module.exports = AABB;
	}
	else
	{
		if(typeof window !== 'undefined')
		{
			window.AABB = AABB;
		}
	}
})();