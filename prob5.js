/*
Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=44 (44¢) and denominations=[1,2,3][1,2,3] (11¢, 22¢ and 33¢), your program would
output 44—the number of ways to make 44¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

let coinDenominator = function(cents, coins) {
  let answers = []
  for (let i = 0; i < coins.length; i++) {
    if (divisible(cents, coin)) {
      if (coins[i] === 1) {
        answers[i] = centsArray(cents)
      }
      else if (isMultiple(cents, coin)) {
        answers[i] = multipleCoins(cents, coin)
      }
      else { // find out if there is a sub-multiple
        // calculate amount that divides cleanly and the left over bit
        let subMultiple = findDiff(cents, coin)
      }
    }
    return 'sorry, you need a smaller cents amount'
  }
  return answers
}

let divisible = function(cents, coin) {
  if (coin > cents) {
    return false
  }
}

let isMultiple = function(cents, coin) {
  if (coin % cents === 0) {
    return true
  }
}

let findDiff = function(cents, coin) {
  
}

let multipleCoins = function(cents, coin) {
  let num = cents / coin
  return new Array(num).fill(num, 0, num)
}

let centsArray = function(cents) { // if there is a 1 cent coin return an array of n 1 cent coins
  return new Array(cents).fill(1, 0, cents)
}

let remainder = function(cents, coin) {
  return cents % coin
}

let isPrime = function(cents) {
  if (cents === 2) {
    return true
  } else if (cents % 2 === 0) {
    return false
  } else {
    return true
  }
}

function findPermutations(cents, coins) {

}

function findDiff

let handlePrimes = function(cents, coins) {
  if (isPrime(cents)) {  // only divisible by itself and 1
    for (var i = 0; i < coins.length; i++) {
      if (coins[i] === cents) {
        answers[i] = [cents]
      }
      if (coins[i] === 1) {
        answers[i] = centsArray(cents)
      }
    }
}

let testCents = 3
let testCoins = [1, 2, 3]

let answer = coinDenominator(testCents, testCoins)
console.log(answer)
