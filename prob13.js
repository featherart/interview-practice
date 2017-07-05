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
// serialized should read ABCDEBDE
function Node(data) {
  this.data = data
  this.left = null // these are both nodes
  this.right = null
}

function Tree() {
  this.root = null
}

Tree.prototype.serialize = function() {
  if (!this.root) {
    console.log('ouch, your tree is empty')
  }
  var queue = [this.root]
  
  var treeString = ''
  while (queue.length) {
    var node = queue.shift()
    treeString += node.data
  }
  console.log(treeString)
}


let tree = new Tree()
tree.root = new Node('A')
tree.root.left = new Node('B')
tree.root.right = new Node('C')
tree.root.right.right = new Node('B')
tree.root.right.right.right = new Node('E')
tree.root.right.right.left = new Node('D')
tree.root.left.left = new Node('D')
tree.root.left.right = new Node('E')
tree.root.right.left = new Node('D')
tree.root.right.right = new Node('E')
console.log(tree)
tree.serialize() // should say ABCDEBDE
