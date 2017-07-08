/*
You're working on a secret team solving coded transmissions.
Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault.
The message has been mostly deciphered, but all the words are backwards! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a string message and reverses the order of the words in-place ↴ .

*/
function reverseWords(message) {
  return message.split(' ').reduceRight(function(a, b) { return `${a} ${b}`})
}

var message = 'find you will pain only go you recordings security the into if'

console.log(reverseWords(message))
