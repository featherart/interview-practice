/*
You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.
While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

weight: the weight of the cake in kilograms
value: the monetary value of the cake in British pounds

For example:

  // weighs 7 kilograms and has a value of 160 pounds
{weight: 7, value: 160}

// weighs 3 kilograms and has a value of 90 pounds
{weight: 3, value: 90}

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity,
and returns the maximum monetary value the duffel bag can hold.

For example:

  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);
// returns 555 (6 of the middle type of cake and 1 of the last type of cake)

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing
or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous
about keeping our algorithms flexible and comprehensive.
*/

let cakes = [
  {weight: 7, value: 160},
  {weight: 10, value: 130},
  {weight: 5, value: 45},
  {weight: 11, value: 200},
  {weight: 3, value: 90},
  {weight: 1, value: 100},
  {weight: 2, value: 15}]
let maxWeight = 20

function maxDuffelBagValue(cakes, capacity) {
  let currMaxRatio = Math.floor(cakes[0].value/cakes[0].weight)
  let idealCake = cakes[0]
  let challenger = 0

  for (let cake of cakes) {
    challenger = Math.floor(cake.value/cake.weight)
    currMaxRatio = Math.max(challenger, currMaxRatio)
    if (challenger > currMaxRatio) idealCake = cake
    console.log(currMaxRatio)
  }
  console.log('most value: ', (Math.floor(20/idealCake.weight)) * idealCake.value)
}

maxDuffelBagValue(cakes, maxWeight)


// fun with iterators
/*
console.log(cakes[0].hasOwnProperty('weight'))
cakes.forEach(function(cake) {
  console.log(cake)
})

for (let cake of cakes) {
  console.log('for ', cake.weight)
}

do {
  console.log(cakes.shift())
} while (cakes.length > 0)

function maxDuffelBagValueOld(cakes, capacity) {
  // return max$$
  // minimize weight while maximizing value
  maxValue = cakes[0].value
  minWeight = cakes[0].weight
  maxValueCake = cakes[0]
  minWeightCake = cakes[0]

  for(let cake of cakes) {
    maxValue = Math.max(cake.value, maxValue)
    if (cake.value === maxValue) maxValueCake = cake
    minWeight = Math.min(cake.weight, minWeight)
    if (cake.weight === minWeight) minWeightCake = cake
  }
  console.log('maxValue: ', maxValue)
  console.log('minWeight: ', minWeight)
  console.log('maxValueCake: ', maxValueCake)
  console.log('minWeightCake: ', minWeightCake)
  let maxMult = Math.floor(20/maxValueCake.weight)
  console.log('maxMult: ', maxMult)

  let minMult = Math.floor(20/minWeight)
  console.log('minMult: ', minMult)
  let optionA = maxMult * maxValueCake.value
  let optionB = minMult * minWeightCake.value
  console.log('maxValueCake: ', optionA, ', minWeightCake: ', optionB)
}
*/

function maxDuffelBagValueNew(cakes, weightCapacity) {
  var maxValuesAtCapacities = []
  for (var i = 0; i <= weightCapacity; i++) {
    maxValuesAtCapacities[i] = 0
  }

  for (var currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {
    var currentMaxValue = 0

    for (var j = 0; j < cakes.length; j++) {
      var cakeType = cakes[j]

      if (cakeType.weight === 0 && cakeType.value !== 0) return Infinity

      if (cakeType.weight <= currentCapacity) {
        var maxValueUsingCake = cakeType.value + maxValuesAtCapacities[currentCapacity]
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue) // see if it's worth taking
      }
    }
    maxValuesAtCapacities[currentCapacity] = currentMaxValue
  }
  console.log('Real answer: ', maxValuesAtCapacities[weightCapacity])
}

maxDuffelBagValueNew(cakes, maxWeight)
