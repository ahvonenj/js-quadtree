(function()
{
	var AABB = window.AABB;

	function QuadTree(aabb_boundary, capacity)
	{
		this.boundary = aabb_boundary;
		this.capacity = capacity;
		
		this.elements = [];
		
		this.topLeft = null;
		this.topRight = null;
		this.bottomLeft = null;
		this.bottomRight = null;
	}

	// Subdivide this QuadTree into four quads
	QuadTree.prototype.Subdivide = function()
	{
		var self = this;

		self.topLeft = new QuadTree
		(
			new AABB
			(
				{ 
					x: self.boundary.center.x - self.boundary.quarterDimension, 
					y: self.boundary.center.y - self.boundary.quarterDimension
				}, 
				self.boundary.quarterDimension
			),
			self.capacity
		);	
		
		self.topRight = new QuadTree
		(
			new AABB
			(
				{ 
					x: self.boundary.center.x + self.boundary.quarterDimension, 
					y: self.boundary.center.y - self.boundary.quarterDimension
				}, 
				self.boundary.quarterDimension
			),
			self.capacity
		);	
		
		self.bottomLeft = new QuadTree
		(
			new AABB
			(
				{ 
					x: self.boundary.center.x - self.boundary.quarterDimension, 
					y: self.boundary.center.y + self.boundary.quarterDimension
				}, 
				self.boundary.quarterDimension
			),
			self.capacity
		);	
		
		self.bottomRight = new QuadTree
		(
			new AABB
			(
				{ 
					x: self.boundary.center.x + self.boundary.quarterDimension, 
					y: self.boundary.center.y + self.boundary.quarterDimension
				}, 
				self.boundary.quarterDimension
			),
			self.capacity
		);	
	}

	// "e" must have properties .x and .y
	QuadTree.prototype.Insert = function(e)
	{
		if
		(
			typeof e.x === 'undefined' || 
			typeof e.y === 'undefined' ||
			e.x === null || 
			e.y === null
		)
		{
			return false;
		}

		if(!this.boundary.ContainsPoint({ x: e.x, y: e.y }))
			return false;
			
		if(this.elements.length < this.capacity)
		{
			this.elements.push(e);
			return true;
		}
		
		if(this.topLeft === null)
			this.Subdivide();

		if (this.topLeft.Insert(e)) return true;
	    if (this.topRight.Insert(e)) return true;
	    if (this.bottomLeft.Insert(e)) return true;
	    if (this.bottomRight.Insert(e)) return true;
		
		return false;
	}

	QuadTree.prototype.QueryRange = function(aabb_range)
	{
		var elementsInRange = [];
		
		if(!this.boundary.IntersectsAABB(aabb_range))
		{
			return elementsInRange;
		}
		
		for(var i = 0; i < this.elements.length; i++)
		{
			var point = 
			{
				x: this.elements[i].x,
				y: this.elements[i].y
			}
			
			if(aabb_range.ContainsPoint(point))
			{
				elementsInRange.push(elements[i]);
			}
		}

		if(this.topLeft == null)
			return elementsInRange;

	    elementsInRange.concat(this.topLeft.QueryRange(aabb_range));
	    elementsInRange.concat(this.topRight.QueryRange(aabb_range));
	    elementsInRange.concat(this.bottomLeft.QueryRange(aabb_range));
	    elementsInRange.concat(this.bottomRight.QueryRange(aabb_range));

	    return pointsInRange;
	}

	if(typeof module !== 'undefined' && module.exports)
	{
		module.exports = QuadTree;
	}
	else
	{
		if(typeof window !== 'undefined')
		{
			window.QuadTree = QuadTree;
		}
	}
})();