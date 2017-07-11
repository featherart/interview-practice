/*
Fun with Graphs
this is an adjacency matrix
Practicing BFS/DFS
*/

function Graph() {
  this.vertices = []
  this.edges = []
  this.numberOfEdges = 0
}


Graph.prototype.addVertex = function(vertex) {
  this.vertices.push(vertex)
  this.edges[vertex] = [] // basically the graph looks like [[]]
}

Graph.prototype.addEdge = function(vertex1, vertex2) {
  if (this.edges[vertex1]) this.edges[vertex1].push(vertex2)
  if (this.edges[vertex2]) this.edges[vertex2].push(vertex1)
  this.numberOfEdges++
}

Graph.prototype.traverseBFS = function(vertex, fn) {
  if(!~this.vertices.indexOf(vertex)) {
    return 'Vertex not found'
  }
  var queue = []
  queue.push(vertex)
  var visited = []
  visited[vertex] = true

  while(queue.length) {
    vertex = queue.shift()
    fn(vertex)
    for(var i = 0; i < this.edges[vertex].length; i++) {
      if (!visited[this.edges[vertex][i]]) {
        visited[this.edges[vertex][i]] = true
        queue.push(this.edges[vertex][i])
      }
    }
  }
}

Graph.prototype.traverseDFS = function(vertex, fn) {
  if(!~this.vertices.indexOf(vertex)) return 'vertex not found'
  var visited = []
  this._traverseDFS(vertex, visited, fn)
}

Graph.prototype._traverseDFS = function(vertex, visited, fn) {
  visited[vertex] = true
  if(this.edges[vertex]) fn(vertex)
  for (var i = 0; i < this.edges[vertex].length; i++) {
    if (!visited[this.edges[vertex][i]]) this._traverseDFS(this.edges[vertex][i], visited, fn)
  }
}

function printIt(value) {
  console.log(value)
}

var g = new Graph()
g.addVertex(5)
g.addVertex(7)
g.addEdge(5, 7)
g.addVertex(8)
g.addEdge(7, 8)
g.addEdge(5, 8)
g.addVertex(4)
g.addEdge(4, 8)
console.log(g)
g.traverseBFS(5, printIt)
g.traverseDFS(5, printIt)
