/*
  Check if a Binary Tree contains duplicate subtrees of size 2 or more
  Given a Binary Tree, check whether the Binary tree contains a duplicate sub-tree of size 2 or more.
  Note : Two same leaf nodes are not considered as subtree size of a leaf node is one.

  Input :  Binary Tree
                 A
               /    \
             B        C
           /   \       \
          D     E       B
                       /  \
                      D    E
  Output : Yes
*/
// Modifying for the Cracking the Code question: find out if a smaller binary tree is a subtree of a larger binary tree

// thoughts: serialize tree using in-order traversal, then check tree string for a duplicate pattern
// this would work if there are no gaps in the tree as the elements that are skipped will not be recorded
// could also put X in where empty nodes are, so you can see the pattern in the string

/* TODO this problem has a lot of hidden complexity and haven't found a good answer for it yet in JS */

function Tree(data) {
  this.data = data
  this.left = this.right = null
}

Tree.prototype.add = function(data) {
  if (!this.data) this.data = new Tree(data)
  if (data < this.data) {
    if (this.left) this.left.add(data)
    else this.left = new Tree(data)
  } else {
    if (this.right) this.right.add(data)
    else this.right = new Tree(data)
  }
}

function containsTree(tree1, tree2) {
  if (!tree2) return true
  return subTree(tree1, tree2)
}

const subTree = function(tree1, tree2) {
  console.log('in subtree: ', tree1.data, tree2.data)
  if (!tree1) {
    return false
  } else if (tree1.data === tree2.data && matchTree(tree1, tree2)) {
    console.log('in here ', tree1.data, ' ', tree2.data)
    return true
  }
  if (tree1.left && tree1.right) {
    return subTree(tree1.left, tree2) || subTree(tree1.right, tree2)
  }
  else return false
}

const matchTree = function(tree1, tree2) {
  if (!tree1 && !tree2) return true
  else if (!tree1 || !tree2) {
    return false
  } else if (tree1.data !== tree2.data) {
    return false
  } else {
    console.log('in else')
    return matchTree(tree1.left, tree2.left) && matchTree(tree1.right && tree2.right)
  }
}

let one = new Tree(5)
one.add(4)
one.add(6)
console.log(one)

let two = new Tree(8)
two.add(9)
two.add(7)
two.add(6)
two.add(4)
console.log(two)

let results = containsTree(one, two)
console.log(results)
