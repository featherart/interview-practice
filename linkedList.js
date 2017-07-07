/*
  just more practice with LL's
*/

function Node(value) {
  this.value = value
  this.next = null // another Node
}

function LinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}

LinkedList.prototype.add = function(value) {
  var node = new Node(value)
  if (!this.head) {
    this.head = node
    this.tail = node
    this.length++
  } else {
    this.tail.next = node
    this.tail = node
    this.length++
  }
}

LinkedList.prototype.remove = function(value) {
  let previous = this.head
  let current = this.head
  while (current) {
    if (current.value === value) {
      if (current === this.head) this.head = this.head.next
      if (current === this.tail) this.tail = previous
      previous.next = current.next
      this.length--
    } else {
      previous = current
    }
    current = current.next
  }
}

LinkedList.prototype.insertAfter = function(value, nodeData) {
  var current = this.head
  while (current) {
    if (current.value === nodeData) { // found node to insert after
      var node = new Node(value)
      if (current === this.tail) {
        this.tail.next = node
        this.tail = node
      } else {
        node.next = current.next
        current.next = node
      }
      this.length++
    }
    current = current.next
  }
}

LinkedList.prototype.print = function() {
  var current = this.head
  var str = ''
  while (current) {
    str += current.value + ' | '
    current = current.next
  }
  console.log(str.trim())
}

LinkedList.prototype.traverse = function(fn) {
  var current = this.head
  while (current) {
    if (fn) fn(current)
    current = current.next
  }

}

LinkedList.prototype.size = function() {
  return this.length
}

let linky = new LinkedList()
linky.add(5)
linky.add(7)
linky.add(54)
linky.add(90)
linky.add(99)
linky.add(800)
console.log(linky)
linky.remove(7)
console.log(linky)
console.log('-------------------')
linky.print()

linky.insertAfter(900, 54)
linky.print()
linky.traverse(function(val) {
  console.log(val.value += '!!!')
})
