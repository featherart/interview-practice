/*
Write a function that, given a sentence like the one above, along with the position of an opening parenthesis,
finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output
should be 79 (position of the last parenthesis).
*/

var phrase = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

function findCloser(sentence, index) {
  var arr = sentence.split('')
  var parent = arr.indexOf('(')
  var child = arr.lastIndexOf(')')
  return child
}

console.log(findCloser(phrase, 10))
