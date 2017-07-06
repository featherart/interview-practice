/*
  You want to be able to access the largest element in a stack.
*/
// Thoughts: Aww, jeez, really? I'd feel like an idiot if I messed this one up.
function Stack(capacity) {
  this.capacity = capacity
  this.storage = {}
  this.index = 0
}

Stack.prototype.push = function(value) {
  if (this.index >= this.capacity) throw new Error('max capacity reached!')
  this.storage[this.index++] = value
  return this.index
}

Stack.prototype.pop = function() {
  if (!this.index) throw new Error('nothing left to remove')
  this.index--
  let item = this.storage[this.index]
  delete this.storage[this.index]
  return item
}

Stack.prototype.peek = function() {
  if (!this.index) throw new Error('nothing to see here!')
  return this.storage[this.index-1]
}

function MaxStack(capacity) {
  this.maxValue = new Stack(capacity)
  this.previousMaxValues = new Stack(capacity)
}

MaxStack.prototype.push = function(value) {
  if (this.maxValue.index === 0) this.maxValue.push(value)
  if (this.maxValue.index > 0 && value > this.maxValue.peek()) {
    this.previousMaxValues.push(this.maxValue.pop())
    this.maxValue.push(value)
  }
  return this.previousMaxValues.index
}

MaxStack.prototype.pop = function() {
  let item = null
  if (this.maxValue.index > 0) {
    item = this.maxValue.pop()
    this.maxValue.push(this.previousMaxValues.pop())
  } else {
    throw new Error('nothing to remove')
  }
}

MaxStack.prototype.getMax = function() {
  if (this.maxValue.index > 0) return this.maxValue.peek()
}

let stack = new MaxStack(6)
stack.push(5)
stack.push(9)
stack.push(0)
console.log(stack)
stack.pop()
stack.push(20)
stack.push(40)
stack.push(-3)
console.log(stack)
console.log('max: ', stack.getMax())
