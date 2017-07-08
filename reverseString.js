/*
Write a function to reverse a string in-place ↴ .
Since strings in JavaScript are immutable ↴ , first convert the string into an array of characters,
do the in-place reversal on that array, and re-join that array into a string before returning it.
This isn't technically "in-place" and the array of characters will cost O(n)O(n) additional space,
but it's a reasonable way to stay within the spirit of the challenge.
If you're comfortable coding in a language with mutable strings, that'd be even better!
*/

var str = 'gohangasalami'

function reverseString(str) {
  var arr = str.split()
  for (var i = arr.length; i > 1; i--) {
    arr[i] += arr[i-1]
  }
  console.log(arr.join())
}

reverseString(str)

function reverseString2(str) {
  return str.split().reduceRight(function(a, b) { return a + b })
}

console.log('reduceRight way: ', reverseString2(str))
