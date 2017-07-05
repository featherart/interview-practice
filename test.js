/*
 * A command line application for generating powers of two
 * from 2^0 through 2^32.
 */
for (var x = 1, i = 0; i <= 32; i += 1) {
    //console.log('2^%d = %d', i, x);
    x += x;
}

function getProductsOfAllIntsExceptAtIndex(input) {
  let results = []
  let productNow = 1
  for (let i = 0; i < input.length; i++) {
    results[i] = productNow
    productNow *= input[i]
  }
  productNow = 1 // reset
  for (let j = input.length-1; j >= 0; j--) {
    console.log('pn: ', productNow)
    results[j] *= productNow
    productNow *= input[j]

  }
  return results
}

let serializedNodes = 'asdfasdfasdf';
let lastTwoCharacters = serializedNodes.substr(serializedNodes.length-2);
let repeatition = serializedNodes.includes(lastTwoCharacters + nextCharacter);


const nums = [1, 7, 3, 4]
const answer = getProductsOfAllIntsExceptAtIndex(nums)
console.log(answer)
