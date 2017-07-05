function Node(data) {
  this.data = data
  this.children = []
}

function Tree(data) {
  let node = new Node(data)
  this.root = node
}

let printNode = function(item) {
  console.log(item)
}

Tree.prototype.traverseBFS = function(fn) {
  let queue = [this.root]
  while(queue.length) {
    let node = queue.shift()
    if(fn) fn(node)
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i])
    }
  }
}

Tree.prototype.findBFS = function(data) {
  var queue = [this.root]
  while(queue.length) {
    var node = queue.shift()
    if (node.data === data) return node
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i])
    }
  }
  return null // not found
}

Tree.prototype.add = function(data, parent) {
  var node = new Node(data)
  if (!this.root) {
    this.root = node
  } else if(parent) {
    var parentNode = this.findBFS(parent)
    parentNode.children.push(node)
  } else {
    return 'Sorry, must specify a parent node.'
  }
}

Tree.prototype.printByLevel = function() {
  if (!this.root) return 'nope'
  var newLine = new Node('\n')
  var line = ''
  var queue = [this.root, newLine]
  while (queue.length) {
    var node = queue.shift()
    line += node.data.toString() + (node.data !== '\n' ? ' ' : '')
    if (node === newLine && queue.length) queue.push(newLine)
    for (var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i])
    }
  }
  console.log(line.trim())
}


let tree = new Tree('A')
console.log('tree: ', tree)
tree.add('B', 'A')
tree.add('C', 'A')
tree.add('D', 'B')
tree.add('E', 'B')
tree.add('B', 'C')
tree.add('D', 'B')
tree.add('E', 'B')
console.log('tree now: ', tree)
tree.traverseBFS(printNode)
console.log('===========================')
tree.printByLevel()
