/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.
*/
function topThreeProduct(input) {
  let tops = findTopThree(input)
  return tops[0] * tops[1] * tops[2]
}

function findTopThree(input) {
  let currentMax = input[0]
  let topThree = []
  let topIndex = 0

  for (let i = 0; i < input.length; i++) {
     currentMax = Math.max(currentMax, input[i])
     if (input[i] === currentMax) {
       topIndex = i
     }
  }
  topThree.push(currentMax)

  input.splice(topIndex, 1)
  currentMax = input[0]
  for (let j = 0; j < input.length; j++) {
    currentMax = Math.max(currentMax, input[j])
    if (input[j] === currentMax) {
      topIndex = j
    }
  }
  topThree.push(currentMax)

  input.splice(topIndex, 1)
  currentMax = input[0]
  for (let k = 0; k < input.length; k++) {
    currentMax = Math.max(currentMax, input[k])
  }
  topThree.push(currentMax)
  return topThree
}

let nums = [4, 2, 8, 9, 3]
let bigMulti = topThreeProduct(nums)
console.log(bigMulti)

let nums2 = [6, 8, 1, 7, 9, 13, 0, 2]
let result = topThreeProduct(nums2)
console.log(result)

// negative nums?
let negs = [4, -3, -5, -2, 1]
let resultNeg = topThreeProduct(negs)
console.log(resultNeg)

// big O time O(3N) = O(N) 3 for loops & 3N
// memory O(2N) = O(N) 2 arrays

// More efficient approach
function highestProduct(nums) {

  if (nums.length < 3) {
    return 'sorry, not enough numbers'
  }
  let highest = Math.max(nums[0], nums[1])
  let lowest = Math.min(nums[0], nums[1])
  let highestProductOf2 = nums[0] * nums[1]
  let highestProductOf3 = highestProductOf2 * nums[2]

  let lowestProductOf2 = nums[0] * nums[1]

  for (let i = 2; i < nums.length; i++) {
    let current = nums[i]

    highestProductOf3 = Math.max(highestProductOf3, current * highestProductOf2, current * lowestProductOf2)

    highestProductOf2 = Math.max(highestProductOf2, current * highest, current * lowest)

    lowestProductOf2 = Math.min(lowestProductOf2, current * highest, current * lowest)

    highest = Math.max(highest, current)
    lowest = Math.min(lowest, current)
  }
  return highestProductOf3
}

let nums3 = [4, 2, 8, 9, 3]
let bigMulti2 = highestProduct(nums3)
console.log('2nd one: ', bigMulti)

let nums4 = [6, 8, 1, 7, 9, 13, 0, 2]
let result2 = highestProduct(nums4)
console.log('2nd one: ', result2)

// negative nums?
let negs2 = [4, -3, -5, -2, 1]
let resultNeg2 = highestProduct(negs2)
console.log('2nd one: ', resultNeg2)
