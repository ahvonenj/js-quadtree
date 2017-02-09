var AABBVisualizer =
{

}

AABBVisualizer.Draw = function(aabb)
{
	var div = document.createElement("div");

	div.style.left = aabb.x + 'px';
	div.style.top = aabb.y + 'px';
	div.style.width = aabb.halfDimension * 2 + 'px';
	div.style.height = aabb.halfDimension * 2 + 'px';

	div.style.border = '1px solid black';
	div.style.position = 'absolute';

	document.body.appendChild(div);
}