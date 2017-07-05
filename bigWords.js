/*
I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know.
I put each word I didn't know at increasing indices in a huge array I created in memory.
When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the
middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words,
this is an alphabetically ordered array that has been "rotated." For example:

  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

Write a function for finding the index of the "rotation point," which is where I started working from the
beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.
*/
// naive thoughts: find the first word that starts with A and that will be the rotation point
// this solution is O(n) - can I do better? What if the array is 50000 entries long


var words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

function findRotation(words) {
  for (var i = 0; i < words.length; i++) {
    if (words[i].indexOf('a') === 0) console.log('index: ', i)
  }
}

findRotation(words)

// Better idea: the array is mostly ordered, so do a binary search for O(log n) (?) time

let letters = [ 'k','v','a','b','c','d','e','g','i' ]

function binarySearch(letters) {
  let pivot = letters[letters.length/2]
  let left = letters.slice(0, pivot)
  let right = letters.slice(pivot, letters.length-1)
  if (pivot < 'a') {
    for (var i = 0; i < left.length; i++) {
      if (letters[i] === 'a') console.log('index: ', i)
    }
  }
}

function findRotatationPoint(words) {
  const firstWord = words[0]
  var floorIndex = 0
  var ceilingIndex = words.length - 1

  while (floorIndex < ceilingIndex) {
    // guess a halfway point
    var guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2))

    if (words[guessIndex] >= firstWord) {
      // right
      floorIndex = guessIndex
    } else {
      // left
      ceilingIndex = guessIndex
    }

    if (floorIndex + 1 === ceilingIndex) {
      break
    }
  }
  console.log('findRotatationPoint: ', ceilingIndex)
  return ceilingIndex
}

binarySearch(letters)
findRotatationPoint(words)
