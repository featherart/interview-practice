/*
Given an undirected graph ↴ with maximum degree ↴ DD, find a graph coloring ↴ using at most D+1D+1 colors.
For example:

.
This graph's maximum degree (DD) is 3, so we have 4 colors (D+1). Here's one possible coloring:

.
Graphs are represented by an array of node objects, each with a label, a set of neighbors, and a color:

  function GraphNode(label) {
    this.label = label;
    this.neighbors = new Set();
    this.color = null;
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];
*/
