/*
Write a recursive function for generating all permutations of an input string. Return them as a set.
Don't worry about time or space complexity—if we wanted efficiency we'd write an iterative version.

To start, assume every character in the input string is unique.

Your function can have loops—it just needs to also be recursive.
*/
// funtion needs to return all permutations
// e.g. 'foe' has 3! permutations, or 6
// subproblem is to find all permuations of 'fo' then 'foe'

// function permuations(input) {
//   var subProblem = input.slice(0, 1)
//
//   var solveSub = function(subString, char) {
//     subString.split('').forEach(function(char) {
//
//     })
//   }
// }


function permuations(input) {
  let arr = input.split('')
  console.log(input)
  if (arr.length === 0) {
    return
  } else {
    return arr.shift() + permuations(input.slice(0, input.length-2))
  }
}

// let results = permuations('foe')
// console.log(results)


function getPermutations(input) {   // 'cat'
  if (input.length <= 1) return new Set(input)
  var allCharsExceptLast = input.slice(0, -1) // 'ca'
  var lastChar = input[input.length - 1]  // 't'

  var permutationsExceptLast = getPermutations(allCharsExceptLast) // getPermutations('ca') / getPermutations('c')
  var permutations = new Set()
  permutationsExceptLast.forEach(function(perm) { // 'ca'
    for (var position = 0; position <= perm.length; position++) {
      var thisPerm = perm.slice(0, position) + lastChar + perm.slice(position)
      console.log(perm.slice(0, position), lastChar, perm.slice(position))
      permutations.add(thisPerm) // add to Set, which doesn't accept dupes
    }
  })
  console.log('number of permutations, should be n!: ', permutations.size)
  return permutations
}

var seti = new Set()
seti = getPermutations('clown')
console.log(seti)
seti = getPermutations('cat')
console.log(seti)
seti = getPermutations('i')
console.log(seti)
seti = getPermutations('foof')
console.log(seti)
//seti = getPermutations('cyanide') // don't do this, it's 5040 permutations
//console.log(seti)
