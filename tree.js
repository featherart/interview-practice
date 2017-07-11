// n-ary tree
function Tree(data) {
  this.data = data
  this.children = []
}

Tree.prototype.addChild = function(data) {
  var child = new Tree(data)
  this.children.push(child)
  return child
}

var tree = new Tree(1);
var branch1 = tree.addChild(2);
var branch2 = tree.addChild(3);
var branch3 = tree.addChild(4);
branch1.addChild(5);
branch1.addChild(6);
branch3.addChild(7).addChild(8);

Tree.prototype.contains = function(data) {
  if (this.data === data) return true
  for(var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(data)) return true
  }
  return false
}

console.log(tree.contains(3))

Tree.prototype.traverseDepthFirst = function(fn) {
  this.children.forEach(function(child) {
    child.traverseDepthFirst(fn)
  })
  fn(this)
}

function printIt(value) {
  console.log(value.data)
}

tree.traverseDepthFirst(printIt)

Tree.prototype.traverseBreadthFirst = function(fn) {
  var queue = [this]
  while (queue.length) {
    var node = queue.shift()
    fn(node)
    node.children.forEach(function(node) {
      queue.push(node)
    })
  }
}

tree.traverseBreadthFirst(printIt)
