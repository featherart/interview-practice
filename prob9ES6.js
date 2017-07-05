/*
  write a fn to determine that a binary tree is a valid binary search tree
*/
// thoughts: it just has to have every node smaller on the left and bigger on the right
// traverse whole tree & check each #?
// Or: push everything into a stack and compare min/max?

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor(value) {
    this.root = value
    this.depth = 0
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value)
      return
    }
    let (current = this.root)
    while (current) {
      if (value < current.value) {
        if (current.left) {
          current = current.left
        } else {
          current.left = new Node(value)
          return
        }
      } else {
        if (current.right) {
          current = current.right
        } else {
          current.right = new Node(value)
          return
        }
      }
    }
  }
}


// "tests"
let tree = new Tree(8)
console.log(tree)
