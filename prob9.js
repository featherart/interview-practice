/*
  write a fn to determine that a binary tree is a valid binary search tree
*/
// thoughts: it just has to have every node smaller on the left and bigger on the right
// traverse whole tree & check each #?
// Or: push everything into a stack and compare min/max?

function Tree(value) {
  this.value = value
  this.left = 0
  this.right = 0
}

Tree.prototype.add = function(value) {
  if (value <= this.value) {
    if (this.left) this.left.add(value)
    else this.left = new Tree(value)
  } else {
    if (this.right) this.right.add(value)
    else this.right = new Tree(value)
  }
  return this
}

Tree.prototype.traverseInOrder = function(fn) {
  if (!this.left && !this.right) {
    return fn(this)
  }
  if (this.left) this.left.traverseInOrder(fn)
  fn(this)
  if (this.right) this.right.traverseInOrder(fn)

}

Tree.prototype.traversePostOrder = function() {

}

Tree.prototype.traverseRootOrder = function() {

}

Tree.prototype.serializeToString = function() {

}


let printNode = function(value) {
  console.log(value.value)
}

// "tests"
let tree = new Tree(8)
console.log(tree)
tree.add(9)
tree.add(4)
tree.add(11)
tree.add(1)
tree.add(10)
tree.add(3)
console.log(tree)

let vals = []
tree.traverseInOrder(function(value) { // this shows that all the values will be in descending order for a BST
  console.log(value.value)
  vals.push(value.value)
})

let checkForOrder = function(vals) {
  for (let i = 0; i < vals.length - 1; i++) {
    if (vals[i] > vals[i+1]) return false
  }
  return true
}
console.log(checkForOrder(vals))

let vals2 = [3, 6, 2, 66, 21, 0]
console.log(checkForOrder(vals2))

// this works but is O(n) + O(n)
