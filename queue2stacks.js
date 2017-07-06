/*
  Implement a queue ↴ with 2 stacks ↴ . Your queue should have an enqueue and a dequeue function
  and it should be "first in first out" (FIFO).
  Optimize for the time cost of mm function calls on your queue. These can be any mix of enqueue and dequeue calls.

  Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
*/
function Stack(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.index = 0
}

Stack.prototype.push = function(value) {
  if (this.index >= this.capacity) throw new Error('max capacity reached')
  this.storage[this.index] = value
  this.index++
}

Stack.prototype.pop = function() {
  if (!this.index) throw new Error('nothing left to remove!')
  let item = this.storage[this.index--]
  delete this.storage[this.index]
  return item
}


function Queue(capacity) {
  this.capacity = capacity
  this.inBox = new Stack(capacity)
  this.outBox = new Stack(capacity)
}

Queue.prototype.enqueue = function(value) {
  this.inBox.push(value)
}

Queue.prototype.dequeue = function() {
  while (this.inBox.index > 1) {
    this.outBox.push(this.inBox.pop())
  }
  this.outBox.pop()
}

let stack = new Stack(7)
stack.push(5)
stack.push(90)
stack.push(8)
console.log(stack)
stack.pop()
console.log(stack)
let q = new Queue(7)
q.enqueue('803')
q.enqueue('bonjovi')
console.log(q)
q.dequeue()
console.log(q)
for (prop in q) {
  console.log(prop)
}
