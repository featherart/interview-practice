/*
Write a function for reversing a linked list ↴ . Do it in-place ↴ .

Your function will have one input: the head of the list.

Your function should return the new head of the list.
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



LinkedList.prototype.reverse = function() {
  // return new head, eeeewww
  if (this.length < 1) return this.tail // nothing to reverse, tail = head
  let holder = new Node()
  let done = false
  while (!done) {
    this.head.next = this.tail.next
    if (this.head.next === this.tail) {
      done = true
    }
  }
  this.head = holder
  this.head = this.tail
  this.tail = holder
  return this.tail
}

function reverse(headOfList) {
  var current = headOfList
  var previous = null
  var nextNode = null

  while (current) {
    // copy pointer to next element
    nextNode = current.next

    // reverse the next pointer
    current.next = previous

    // step forward
    previous = current
    current = nextNode
  }
  return previous
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

var linky = new LinkedList()
linky.add(5)
linky.add(25)
linky.add(100)
linky.add(400)
linky.add(800)
linky.print()
let link2 = reverse(linky)
//linky.reverse() nope
console.log('link2 ', link2)
//link2.print()

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode(1)
var b = new LinkedListNode(2)
var c = new LinkedListNode(3)
var d = new LinkedListNode(4)
var e = new LinkedListNode(5)

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverse(a))
