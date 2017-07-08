/*
You're working with an intern that keeps coming to you with JavaScript code that won't run because the braces,
brackets, and parentheses are off. To save you both some time, you decide to write a braces/brackets/parentheses validator.
Let's say:

'(', '{', '[' are called "openers."
')', '}', ']' are called "closers."
Write an efficient function that tells us whether or not an input string's openers and closers are properly nested.

Examples:

"{ [ ] ( ) }" should return true
"{ [ ( ] ) }" should return false
"{ [ }" should return false
*/

function isProperlyNestedOld(input) {
  var numCurly = 0
  var numParenthesis = 0
  var numSquare = 0
  var output = ''

  //let rest = input.split(' ').filter(function(char) { return (char === '{') })
  var str = input.split(' ')
  str.forEach(function(char) {
    if (str.includes('{') && char === '{') numCurly++
    if (char === '}') numCurly--
    if (str.includes('(') && char === '(') numParenthesis++
    if (char === ')') numParenthesis--
    if (str.includes('[') && char === '[') numSquare++
    if (char === ']') numSquare--
  })
  if (numCurly !== 0) output += ' Curlies are off by ' + numCurly
  if (numParenthesis !== 0) output += ' Parenthesis are off by ' + numParenthesis
  if (numSquare !== 0) output += ' squares are off by ' + numSquare
  if (!output) output = 'everything is ok'
  console.log(output)
}

var str = "{ [ ] ( ) }"
isProperlyNestedOld(str)

isProperlyNestedOld("{ [ ( ] ) }") // oops! it has to be in order

isProperlyNestedOld("{ [ }")


function isProperlyNested(code) {
  var openersToClosers = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  var openers = new Set(['(', '[', '{'])
  var closers = new Set([')', ']', '}'])

  openersStack = []

  for (var i = 0; i < code.length; i++) {
    var char = code.charAt(i);

    if (openers.has(char)) {
      openersStack.push(char)
    } else if (closers.has(char)) {
      if (!openersStack.length) {
        return false
      } else {
        lastUnclosedOpener = openersStack.pop()
      }

      if (openersToClosers[lastUnclosedOpener] !== char) return false // short circuit
    }
  }
  return openersStack.length === 0 // not too different from my solution above
}

console.log(isProperlyNested("{ [ ( ] ) }")) //should be false
