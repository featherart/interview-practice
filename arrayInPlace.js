/*
Write a function for doing an in-place ↴ shuffle of an array.
The shuffle must be "uniform," meaning each item in the original array must have the same probability of
ending up in each spot in the final array.

Assume that you have a function getRandom(floor, ceiling) for getting a random integer
that is >= floor and <= ceiling.
*/

var nums = [4, 6, 3, 9, 8, 1]

function shuffleArray(numbers) {
  var limit = numbers.length - 1
  var indices = new Set()
  var done = false
  var holder = null

  while(!done) {
    var index = getRandom(0, limit) // this isn't completely random, it has to start randomly too
    indices.add(index)
    if (indices.size === limit) done = true
  }

  var indicesIter = indices.values()
  for (var i = 0; i < numbers.length; i++) {
    holder = numbers[indicesIter.next().value]
    numbers[indicesIter.next().value] = numbers[i]
    numbers[i] = holder
  }
  console.log(numbers)
}

shuffleArray(nums)

function swap(elementA, elementB) {
  console.log('in here', elementA, elementB)
  var holder = elementA
  elementA = elementB
  elementB = holder
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// Fisher-Yates shuffle, right way
function shuffle(theArray) {
  if (theArray.length <= 1) return

  for (var beginning = 0; beginning < theArray.length - 1; beginning++) {

    var randomChoice = getRandom(beginning, theArray.length - 1)

    if (randomChoice !== beginning) {
      var value = theArray[beginning]  // here's the swap I was doing
      theArray[beginning] = theArray[randomChoice]
      theArray[randomChoice] = value
    }
  }
  console.log('otherway: ', theArray)
}

var nums2 = [4, 6, 3, 9, 8, 1]
shuffle(nums2) // yup, shuffled
