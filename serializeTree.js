function BinarySearchTree(data) {
  this.root = data
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.add = function(data) {
  var node = new BinarySearchTree(data)
  if(!this.root) {
    this.root = node
  } else {
    var current = this.root
    while (current) {
      if (data < current) {
        if (!this.left) {
          this.left = node
          return
        } else {
          this.left = current.left
        }
      } else {
        if (!this.right) {
          this.right = node
          return
        } else {
          this.right = current.right
        }
      }
    }
  }
}

function printIt(value) {
  console.log(value)
}

BinarySearchTree.prototype.traverseDepthFirstInOrder = function(fn) {
  if (!this.left && !this.right) return fn(this)
  if (this.left) this.left.traverseDepthFirstInOrder(fn)
  fn(this)
  if (this.right) this.right.traverseDepthFirstInOrder(fn)
}

BinarySearchTree.prototype.traverseDepthFirstPostOrder = function(fn) {
  if (this.right) this.right.traverseDepthFirstPostOrder(fn)
  if (this.left) this.left.traverseDepthFirstPostOrder(fn)
  fn(this)
}

BinarySearchTree.prototype.traverseDepthFirstPreOrder = function(fn) {
  fn(this)
  if (this.left) this.left.traverseDepthFirstPreOrder(fn)
  if (this.right) this.right.traverseDepthFirstPreOrder(fn)
}

BinarySearchTree.prototype.traverseBreadthFirst = function(fn) {
  var queue = [this]
  while (queue.length) {
    var node = queue.shift()
    fn(node)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
}

var tree = new BinarySearchTree(7)
tree.add(5)
tree.add(8)
tree.add(4)
console.log(tree)
tree.traverseDepthFirstInOrder(printIt)
console.log('++++++++++++++++++++++')
tree.traverseDepthFirstPostOrder(printIt)
console.log('----------------------')
tree.traverseDepthFirstPreOrder(printIt)
console.log('~~~~~~~~~~~~~~~~~~~~~~')
tree.traverseBreadthFirst(printIt)
