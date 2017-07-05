/**
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of
the two subtrees of every node never differ by more than 1.
*/

// traverse tree DFS and look for parent node with a left left but no right, or the inverse

function TreeNode(data) {
  this.data = data
  this.left = this.right = null
}

TreeNode.prototype.add = function(data) {
  if (!this.data) {
    this.data = data
  }
  if (data < this.data) {
    if (this.left) {
      this.left.add(data)
    } else {
      this.left = new TreeNode(data)
    }
  } else {
    if (this.right) this.right.add(data)
    else {
      this.right = new TreeNode(data)
    }
  }
}

TreeNode.prototype.serializeToString = function(fn) {
  if (this.data) fn(this.data)
  if (this.left) this.left.serializeToString(fn)
  if (this.right) this.right.serializeToString(fn)
}

TreeNode.prototype.printInOrder = function(fn) {
  if (this.left) this.left.printInOrder(fn)
  if (this.data) fn(this.data)
  if (this.right) this.right.printInOrder(fn)
}

TreeNode.prototype.printToString = function() {
  var queue = [this.data]
  console.log(queue.length)
  var str = ''
  while (queue) {
    var node = queue.shift()
    str += node
  }
  console.log(str)
}

const stringify = function(value) {
  let str = '|'
  console.log(str.concat(value))
}

var isBalanced = function(root) {
  return findDepth(root) === -1 ? false : true
}

function findDepth(root) {
  if (!root) {
    return 0
  }
  var leftDepth = findDepth(root.left)

  if (leftDepth === -1) return -1

  var rightDepth = findDepth(root.right)

  if (rightDepth === -1) return -1

  if (Math.abs(leftDepth - rightDepth) > 1) {
    return -1
  }
  return Math.max(leftDepth, rightDepth) + 1
}


var tree = new TreeNode(5)
tree.add(3)
tree.add(6)
tree.add(8)
tree.add(4)
tree.add(2)
tree.add(5.5)
// tree.add(1)
console.log(tree)
tree.printInOrder(stringify)
//tree.serializeToString(stringify)
//tree.printToString()
console.log('tree is balanced: ')
console.log(isBalanced(tree))
