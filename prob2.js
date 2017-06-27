/*
Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

  your function would return:

  [84, 12, 28, 21]

  by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]
*/
// const getProductsOfAllIntsExceptAtIndex3 = function(input) {
//   let results = []
//   let counter = 1
//   let currentAmt = 0
//   if (input.length === 1) {
//     return results
//   }
//   let multiply = function(nums, counter, currentAmt) {
//     nums[counter] *= currentAmt
//
//   }(input)
// }

//runtime 0(n)
//memory 0(n)

const getProductsOfAllIntsExceptAtIndex = function(input) {

  if (input.length < 2) {
    return 'nope'
  }
  var products = []
  var productNow = 1
  for (var i = 0; i < input.length; i++) {
    products[i] = productNow
    productNow *= input[i]
  }

  var productNow = 1
  for (var j = input.length - 1; j >= 0; j--) {
    products[j] *= productNow
    productNow *= input[j]
  }
  return products
}



// no
const getProductsOfAllIntsExceptAtIndex2 = function(input) {
  let results = []
  for (let i = 0; i < input.length; i++) {
    let j = i + 1 // end of array
    let k = i - 1 // beginning of array
    console.log('j here ', j)
    console.log('k here ', k)
    let result
    while (j < input.length && k > 0) {
      console.log('j ', j)
      console.log('k ', k)
      result *= input[j]
      result *= input[k]
      j++
      k--
    }
    results.push(result)
  }
  return results
}
// just no

let nums = [1, 7, 3, 4]

let answer = getProductsOfAllIntsExceptAtIndex(nums)
console.log('answer ', answer)
