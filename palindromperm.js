/*
Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome ↴ .
You can assume the input string only contains lowercase letters.

Examples:

"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
*/
function palindromePerm(input) {
  console.log('input: ', input)
  var chars = new Set()
  var uniqueCount = input.length - 1

  input.split('').forEach(function(char) {
    if (chars.has(char)) {
      --uniqueCount
    } else {
      chars.add(char)
    }
  })
  console.log('uniqueCount: ', uniqueCount)
  if (uniqueCount <= 2) return true
  else return false
}

palindromePerm("civic")
palindromePerm('nooose')
palindromePerm('gohangasalami')
palindromePerm('bob')
palindromePerm('ladal')
palindromePerm('tattarrattat')
