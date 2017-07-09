/*
I have an array of n + 1n+1 numbers. Every number in the range 1..n1..n appears once
except for one number that appears twice.
Write a function for finding the number that appears twice.
*/

// first the Set way
function findDupe(input) {
  var seenBefore = new Set()
  for(var val of input) {
    if (seenBefore.has(val)) return val
    seenBefore.add(val)
  }
}

var nums = [5, 4, 54, 6, 7, 8, 4, 3]

var result = findDupe(nums)
console.log(result) // 4


// wait the input looks more like this [4, 5, 6, 7, 8, 8, 9, 10]
// using math of triangle numbers:
// series of numbers 1...n the total sum is going to be (n^2 + n)/2
// we can diff the triangle sum and our results to find repeated number!


var series = [1, 2, 3, 4, 5, 5, 6, 7]

function findExtra(nums) {
  var n = nums[nums.length-1] // 7
  var triangleSum = ((n * n) + n) / 2
  var numSum = nums.reduce(function(a, b) { return a + b })
  console.log('math way: ', numSum - triangleSum)
}

// just out of curiosity does it work?
console.log('first way: ', findDupe(series))

findExtra(series)
