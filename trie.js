function Node(letter) {
  this.letter = letter
  this.prefixes = 0
  this.isWord = false
  this.children = {}
}

function Trie() {
  this.root = new Node('')
}

Trie.prototype.add = function(word) {
  if (!this.root) return null
  return this._addNode(this.root, word)
}

Trie.prototype._addNode = function(node, word) {
  if (!node || !word) return null

  let letter = word.charAt(0)
  let child = node.children[letter]

  if(!child) {
    child = new Node(letter)
    node.children[letter] = child
  }
  let remainder = word.substring(1)
  if (!remainder) node.isWord = true
  return this._addNode(child, remainder)
}

Trie.prototype.print = function() {
  if (!this.root) return console.log('nope')

  let newLine = new Node('|')
  let queue = [this.root, newLine]
  let string = ''
  while(queue.length) {
    let node = queue.shift()
    string += node.letter.toString() + ' '
    if (node === newLine && queue.length) queue.push(newLine)

    for (let child in node.children) {
      if (node.children.hasOwnProperty(child)) queue.push(node.children[child])
    }
  }
  console.log(string.trim())
}

let trie = new Trie()
trie.add('caramel')
trie.add('car')
trie.add('milk')
trie.add('chocolate')
trie.add('cherry')
//console.log(trie)
trie.print()
