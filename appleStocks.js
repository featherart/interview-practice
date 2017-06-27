/*
Write an efficient function that takes stockPricesYesterday and returns the best profit I
could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

For example:

  var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPricesYesterday);
// returns 6 (buying for $5 and selling for $11)

No "shorting"—you must buy before you sell. You may not buy and sell in the same
time step (at least 1 minute must pass).

considerations: you buy before you sell, so the buying time has to be before the selling time -
if prices go down all day you just try to lose least $$

Big(0) of solution in terms of time/space
*/
var pricesYesterday = [10, 7, 5, 8, 11, 9];
var maxProfit = getMaxProfit(pricesYesterday);
console.log('maxProfit: ', maxProfit);

// what if the best result was still a loss?
// this should return a negative number
var badPrices = [10, 5, 4, 6, 7, 9];
var maxBadProfit = getMaxProfit(badPrices);
console.log('maxProfit, badPrices: ', maxBadProfit);

// what if it were the same price all day?
// should return 0
var samePrices = [10, 10, 10, 10, 10, 10];
var maxSameProfit = getMaxProfit(samePrices);
console.log('samePrices: ', maxSameProfit);

function getMaxProfit2(prices) {

  /* prices are in array format arranged by time, so you can't just sort array
     so, find biggest difference in prices where biggest price comes after smallest

  1. find lowest value that is sooner than the last value
  2. find highest value after the lowest?

  OR
  1. find pairs that have greatest difference and lowest is before highest

  OR
  1. Greedily stash each best pair as it is found
  2. Stop when all pairs have been investigated

  */
  var maxProfit = 0;
  var minPrice = prices[0];

  for( var i = 0; i < prices.length; i++) {
    var currentPrice = prices[i];
    var minPrice = Math.min(minPrice, currentPrice);
    var currentProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  return maxProfit;
}

function getMaxProfit(prices) {
  console.log('in here, ', prices)
  if (prices.length < 2) {
    throw new Error('need at least 2 prices')
  }

  let minPrice = prices[0]
  let maxProfit = prices[1] - prices[0]

  for (let i = 1; i < prices.length; i++) {
    let currentPrice = prices[i]

    let potential = currentPrice - minPrice

    maxProfit = Math.max(maxProfit, potential)

    // update minPrice
    minPrice = Math.min(minPrice, currentPrice)
  }
  return maxProfit
}
