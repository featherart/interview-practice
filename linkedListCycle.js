/*
You have a singly-linked list ↴ and want to check if it contains a cycle.
*/

function Node(value) {
  this.value = value
  this.next = null
}

function LinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}

// this will never make a cycle, but it will allow duplicate values
LinkedList.prototype.add = function(value) {
  var node = new Node(value)
  this.length++
  if (!this.head) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = node
    this.tail = node
  }
}

LinkedList.prototype.addCyclic = function(value) {
  var node = new Node(value)
  if (!this.head) {
    this.head = node
    this.tail = node
  } else {
    this.tail.next = this.head // makes it cyclic
    this.tail = node
  }
}

// returns true if LL contains cycle, undefined otherwise
// uses O(n) time & space, so maybe not best answer
LinkedList.prototype.containsCycle = function() {
  var seenBefore = new Set()
  var current = this.head
  while (current) {
    if (seenBefore.has(current.value)) return true
    if (!current.value) return false
    else {
      seenBefore.add(current.value)
    }
    current = current.next
  }
}

LinkedList.prototype.containsCycle2 = function() {
  var slowRunner = this.head
  var fastRunner = this.head
  while (fastRunner && fastRunner.next) {
    slowRunner = slowRunner.next
    fastRunner = fastRunner.next.next
    if (fastRunner === slowRunner) return true // we have a loop!
  }
  return false
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

let linky = new LinkedList()
linky.add(5)
linky.add(25)
linky.add(100)
linky.add(400)
linky.add(800)
linky.add(5)
linky.print()
console.log(linky.containsCycle())
console.log(linky.containsCycle2())
