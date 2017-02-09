# js-quadtree
A QuadTree implementation in JavaScript

## Interactive QuadTree

https://ahvonenj.github.io/js-quadtree/

## AABB

The QuadTree works with [Axis-Aligned Bounding Boxes](https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box), 
hence the separate AABB-class.

### Supported methods (9.2.2017)

- AABB.ContainsPoint
- AABB.IntersectsAABB

More to follow if needed (http://clb.demon.fi/MathGeoLib/docs/AABB_summary.php).

## QuadTree

Implementation based on [this wikipedia article](https://en.wikipedia.org/wiki/Quadtree).

### Supported methods (9.2.2017)

- QuadTree.Insert
- QuadTree.QueryRange

### To be implemented

- QuadTree.Remove
- (QuadTree.RemoveRange)

## Tests

![](https://github.com/ahvonenj/js-quadtree/blob/master/other/jasmine_report.PNG?raw=true)
