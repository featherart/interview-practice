/*
Write a function to find the 2nd largest element in a binary search tree ↴ .
*/
// this will be on the right side if its a BST, so we should be able to do this in O(log n) time
// you only need to search 1/2 of the tree
// UNLESS there are only 2 nodes: the root and it's left child
// easy way: keep track of depth as you are adding

function BinarySearchTree(value) {
  this.value = value
  this.right = null
  this.left = null
  this.depth = 0
}

BinarySearchTree.prototype.insert = function(value) {
  this.depth++
  if (!this.value) {
    this.value = value
    return
  } else {
    if (value > this.value) {
      if (this.right) {
        this.right.insert(value)
      } else {
        this.right = new BinarySearchTree(value)
        return
      }
    } else {
      if (this.left) {
        this.left.insert(value)
      } else {
        this.left = new BinarySearchTree(value)
        return
      }
    }
  }
}

BinarySearchTree.prototype.findSecondLargest = function(fn) {
  if (!this.root || !(this.root.right && this.root.left)) {
    return 'not enough nodes'
  }
  if (this.depth === 2 && !this.right) {
    return fn(this.left)
  }
  else if (this.right.right) {
    this.right.findSecondLargest(fn)
  } else {
    return fn(this)
  }
}


let tree = new BinarySearchTree(9)
//console.log(tree)
tree.insert(5)
tree.insert(7)
tree.insert(10)
tree.insert(20)
tree.insert(1)
tree.insert(40)
//console.log(tree)


let printNodes = function(value) {
  console.log(value.value)
}

tree.findSecondLargest(function(val) {
  console.log(val.value)
})
