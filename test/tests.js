function tests()
{
	describe('AABB', function()
	{
		describe('AABB constructor', function()
		{
			it('Should calculate correct value for AABB center', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				expect(aabb.center).toEqual({ x: 100, y: 100});
			});

			it('Should calculate correct value for AABB halfDimension', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				expect(aabb.halfDimension).toEqual(100);
			});

			it('Should calculate correct value for AABB quarterDimension', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				expect(aabb.quarterDimension).toEqual(50);
			});

			it('Should calculate correct value for AABB x', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);
				
				expect(aabb.x).toEqual(0);
			});

			it('Should calculate correct value for AABB y', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);
				
				expect(aabb.y).toEqual(0);
			});

			it('Should calculate correct value for AABB x2', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);
				
				expect(aabb.x2).toEqual(200);
			});

			it('Should calculate correct value for AABB y2', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);
				
				expect(aabb.y2).toEqual(200);
			});
		});

		describe('AABB ContainsPoint', function()
		{
			it('Should be inside the AABB (center)', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var point = { x: 100, y: 100 }
				
				expect(aabb.ContainsPoint(point)).toEqual(true);
			});

			it('Should be inside the AABB (top left)', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var point = { x: 0, y: 0 }
				
				expect(aabb.ContainsPoint(point)).toEqual(true);
			});

			it('Should be inside the AABB (bottom right)', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var point = { x: 200, y: 200 }
				
				expect(aabb.ContainsPoint(point)).toEqual(true);
			});

			it('Should not be inside the AABB (left)', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var point = { x: -1, y: 100 }
				
				expect(aabb.ContainsPoint(point)).toEqual(false);
			});

			it('Should not be inside the AABB (top)', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var point = { x: 100, y: -1 }
				
				expect(aabb.ContainsPoint(point)).toEqual(false);
			});

			it('Should not be inside the AABB (right)', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var point = { x: 201, y: 100 }
				
				expect(aabb.ContainsPoint(point)).toEqual(false);
			});

			it('Should not be inside the AABB (bottom)', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var point = { x: 100, y: 201 }
				
				expect(aabb.ContainsPoint(point)).toEqual(false);
			});
		});

		describe('AABB IntersectsAABB', function()
		{
			it('Should intersect same AABB', function()
			{	
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);
				
				expect(aabb.IntersectsAABB(aabb)).toEqual(true);
			});

			it('Should intersect other AABB', function()
			{	
				var aabb1 = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var aabb2 = new AABB
				(
				
					{
						x: 200,
						y: 200
					},
					50
				);
				
				expect(aabb1.IntersectsAABB(aabb2)).toEqual(true);
			});

			it('Should not intersect other AABB', function()
			{	
				var aabb1 = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var aabb2 = new AABB
				(
				
					{
						x: 400,
						y: 400
					},
					100
				);
				
				expect(aabb1.IntersectsAABB(aabb2)).toEqual(false);
			});
		});
	});

	describe('QuadTree', function()
	{
		describe('QuadTree constructor', function()
		{
			it('Should correctly initialize boundary', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 10);

				expect(qt.boundary).toEqual(aabb);
			});

			it('Should correctly initialize capacity', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 10);

				expect(qt.capacity).toEqual(10);
			});

			it('Should correctly initialize elements', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 10);

				expect(qt.elements).toEqual([]);
			});

			it('Should correctly initialize subtrees', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 10);

				expect(qt.topLeft).toEqual(null);
				expect(qt.topRight).toEqual(null);
				expect(qt.bottomLeft).toEqual(null);
				expect(qt.bottomRight).toEqual(null);
			});
		});

		describe('QuadTree Insert', function()
		{
			it('Should not insert element which is not withing the QuadTree range', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 10);

				var element =
				{
					x: 500,
					y: 500
				}

				expect(qt.Insert(element)).toEqual(false);
			});

			it('Should not insert element which does not have .x or .y -properties', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 10);

				var element =
				{
					a: 1,
					b: "asd",
					c: "xy"
				}

				expect(qt.Insert(element)).toEqual(false);
			});

			it('Should insert element, but not subdivide', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 10);

				var element =
				{
					x: 50,
					y: 50
				}

				expect(qt.Insert(element)).toEqual(true);
				expect(qt.elements.length).toEqual(1);
				expect(qt.topLeft).toEqual(null);
				expect(qt.topRight).toEqual(null);
				expect(qt.bottomLeft).toEqual(null);
				expect(qt.bottomRight).toEqual(null);
			});

			it('Should subdivide and insert in subtree on capacity reached', function()
			{
				var aabb = new AABB
				(
				
					{
						x: 100,
						y: 100
					},
					100
				);

				var qt = new QuadTree(aabb, 1);

				var element1 =
				{
					x: 50,
					y: 50
				}

				var element2 =
				{
					x: 175,
					y: 175
				}

				expect(qt.Insert(element1)).toEqual(true);
				expect(qt.elements.length).toEqual(1);
				expect(qt.topLeft).toEqual(null);
				expect(qt.topRight).toEqual(null);
				expect(qt.bottomLeft).toEqual(null);
				expect(qt.bottomRight).toEqual(null);

				expect(qt.Insert(element2)).toEqual(true);
				expect(qt.elements.length).toEqual(1); // !
				expect(qt.topLeft).not.toEqual(null);
				expect(qt.topRight).not.toEqual(null);
				expect(qt.bottomLeft).not.toEqual(null);
				expect(qt.bottomRight).not.toEqual(null);
			});
		});
	});
}