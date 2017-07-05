/*
Write a function fib() that a takes an integer nn and returns the nnth fibonacci ↴ number.

first 20 numbers are:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765,
10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811
*/

// the recursive solution is simple but extremely slow
// can we use a Set to optimise? NOPE use an Object
// obj.hasOwnProperty - takes the string name or symbol of the property to test & returns T/F


// slow way O(2^n)
let fibonacci = function(n) {
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}


// efficient way O(n)
function Fibber() {
  this.memo = {}
}

Fibber.prototype.fib = function(n) {

  if (n < 0) return 'cannot be negative'
  else if (n === 0 || n === 1) return n

  if (this.memo.hasOwnProperty(n)) { // look up n in the memo object
    return this.memo[n]
  }

  var result = this.fib(n - 2) + this.fib(n - 1)
  console.log('result: ', result) // gives a sequence up to the nth fib

  this.memo[n] = result

  return result
}

let fibby = new Fibber()
console.log(fibby.fib(20)) // 6765
