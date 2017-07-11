// practice O(n lg n) sorting
const quickSort = function(input) {
  if (input.length < 2) return input

  let pivot = input[0]
  let left = []
  let right = []
  for(var i = 1; i < input.length; i++) {
    if (input[i] < pivot) left.push(input[i])
    else right.push(input[i])
  }
  return quickSort(left).concat(pivot, quickSort(right))
}
var nums = [3, 5, 2, 6, 7, 21, 0]
var nums2 = [34, 234, 6, 4, -2, 1, 0, 89, 324, 5, 89, 23, 45, 65, 18.5, .0003]
var letters = ['b', 'd', 's', 'c', 'p', 'm']

var sorted = quickSort(nums)
console.log('quickSorted: ', sorted)

var sorted2 = quickSort(nums2)
console.log('quickSorted with weird numbers', sorted2)

var sorted3 = quickSort(letters)
console.log('letters?', sorted3) // whoa! that works


/*
const quickSort = function(input) {
  if (input.length < 2) return input

  let pivot = input[0]
  let left = []
  let right = []
  for (let i = 1; i < input.length; i++) {
    if (input[i] < pivot) left.push(input[i])
    else right.push(input[i])
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

another variation but less memory efficient as you are creating a new array

const quickSort = function(input) {
  if (input.length < 2) return input
  let pivot = input[0]
  let left = []
  let right = []

  input = input.slice(1, input.length)
  for (let elem of input) {
    if (elem < pivot) left.push(elem)
    else right.push(elem)
  }
  return quickSort(left).concat(pivot, quickSort(right))
}

*/
