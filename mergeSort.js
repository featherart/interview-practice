/* sort left half and right half then merge ... */
/*
mergesort(array) {
  mergesort(array's left)
  mergesort(array's right)
  merge
}

faster than QS on average but less memory efficient
*/
const mergeSort = function(input) {
  if (input.length < 2) return input

  let middle = Math.floor(input.length/2)
  let left = input.slice(0, middle)
  let right = input.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = function(left, right) {
  let holder = []
  while(left.length && right.length) {
    if (left[0] < right[0]) holder.push(left.shift())
    else holder.push(right.shift())
  }
  return holder.concat(left).concat(right)
}

var nums = [3, 5, 2, 6, 7, 21, 0]
var nums2 = [34, 234, 6, 4, -2, 1, 0, 89, 324, 5, 89, 23, 45, 65, 18.5, .0003]
var letters = ['b', 'd', 's', 'c', 'p', 'm']

var sorted = mergeSort(nums)
console.log('mergeSorted: ', sorted)

var sorted2 = mergeSort(nums2)
console.log('mergeSorted2: ', sorted2)

var sorted3 = mergeSort(letters)
console.log('mergeSorted3', sorted3)


/*
function mergeSort(input) {
  if (input.length < 2) return input

  let middle = Math.floor(input.length / 2)
  let left = input.slice(0, middle)
  let right = input.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let holder = []

  while(left.length && right.length) {
    if (left[0] < right[0]) holder.push(left.shift())
    else holder.push(right.shift())
  }
  return holder.concat(left.slice()).concat(right.slice())
}
*/
