/*
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

Here's a sample binary tree node class:

  function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

// thought: this is a DFS problem so basically a MinStack and a MaxStack
*/

function BinaryTreeNode(value) {
  this.value = value
  this.left = null
  this.right = null
  this.minValue = null
  this.maxValue = null
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value)
  return this.left
}

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value)
  return this.right
}

BinaryTreeNode.prototype.minValue = function(value) {
  // while (value < this.value) {
  //   if (this.right && this.left) {
  //
  //   }
  // }
}

function isBalanced(treeRoot) {
  if (!treeRoot) {
    return true // no leaves === superbalanced
  }

  let depths = []

  let nodes = []
  nodes.push([treeRoot, 0])

  while(nodes.length) {
    let nodePair = nodes.pop()
    let node = nodePair[0]
    let depth = nodePair[1]

    // we found a leaf
    if (!node.left && !node.right) {
       if (depths.indexOf(depth) < 0) {
         depths.push(depth)

         // two ways we could have unbalanced tree
         if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
           return false
         }
       }
    } else {
      if (node.left) {
        nodes.push([node.left, depth + 1])
      }
      if (node.right) {
        nodes.push([node.right, depth + 1])
      }
    }
  }
  return true
}
