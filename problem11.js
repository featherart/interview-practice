/*
I'm making a search engine called MillionGazillion™.
I wrote a crawler that visits web pages, stores a few keywords in a database, and follows links to other web pages. I noticed that my crawler was wasting a lot of time visiting the same pages over and over, so I made a set, visited, where I'm storing URLs I've already visited. Now the crawler only visits a URL if it hasn't already been visited.

Thing is, the crawler is running on my old desktop computer in my parents' basement (where I totally don't live anymore), and it keeps running out of memory because visited is getting so huge.

How can I trim down the amount of space taken up by visited?
*/
// this feels like a trie problem since it's kind of a tree but with words and word roots

// what if we used approach of separating out shared prefixes recursively?

// yes this is a Trie
/* TODO learn basic trie operations */

function Trie() {
  this.rootNode = {}
}

Trie.prototype.checkPresentAndAdd = function(word) {
  var currentNode = this.rootNode
  var isNewWord = false

  // work downwards through the trie
  for (var i = 0; i < word.length; i++) {
    var char = word[i]

    if (!currentNode.hasOwnProperty(char)) {
      isNewWord = truecurrentNode[char] = {}
    }
    currentNode = currentNode[char]
  }

  // explicitly mark the end of a word
  if (!currentNode.hasOwnProperty("End of Word")) {
    isNewWord = true
    currentNode["End of Word"] = {}
  }
  return isNewWord
}
