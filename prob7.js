/*
You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max,
Min, Mean and Mode Temperature Guarantee™.
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns a mode ↴ of all temps we've seen so far
Optimize for space and time. Favor speeding up the getter functions getMax(), getMin(),
getMean(), and getMode() over speeding up the insert() function.

Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit,
so we can assume they'll all be in the range 0..1100..110.

If there is more than one mode, return any of the modes.
*/

function TempStack() {
  this.minTemp = null
  this.maxTemp = null
  this.totalTemp = 0
  this.index = 0
  this.occurences = new Array(110).fill(0, 0, 110) // make a holder array of 0s for each temp
  this.maxOccurences = 0
  this.modeTemp = 0
}

TempStack.prototype.insert = function(temp) {
  this.totalTemp += temp
  this.occurences[temp]++
  this.index++
  if (this.maxOccurences < this.occurences[temp]) {
    this.maxOccurences = this.occurences.indexOf(this.occurences[temp])
  }
  if (this.maxTemp === null || this.maxTemp < temp) {
    this.maxTemp = temp
  } else if (this.minTemp === null || this.minTemp > temp) {
    this.minTemp = temp
  }
  return this.index
}

TempStack.prototype.getMax = function() {
  return this.maxTemp
}

TempStack.prototype.getMin = function() {
  return this.minTemp
}

TempStack.prototype.getMean = function() {
  return parseFloat(this.totalTemp/this.index)
}

TempStack.prototype.getMode = function() {
  return this.maxOccurences
}

let tempy = new TempStack()
tempy.insert(87)
tempy.insert(89)
tempy.insert(87)
tempy.insert(60)
console.log(tempy.insert(40))

console.log('max: ', tempy.getMax())
console.log('min: ', tempy.getMin())
console.log('mean: ', tempy.getMean())
console.log('mode: ', tempy.getMode())
