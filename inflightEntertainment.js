/*
You've built an inflight entertainment system with on-demand movie streaming.
Users on longer flights like to start a second movie right when their first one ends, but they complain
that the plane usually lands before they can see the ending.
So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths
(in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

Assume your users will watch exactly two movies
Don't make your users watch the same movie twice
Optimize for runtime over memory
*/

// O(n) time & space, wheee

let flightLength = 3.5
let movieLengths = [1.5, 2, 1.25, 1.15, 1.6]

function checkMovies(movieLengths, flightLength) {
  var movieLengthsSeen = new Set()

  for (var i = 0; i < movieLengths.length; i++) {
    var firstMovieLength = movieLengths[i]
    console.log('firstMovieLength: ', firstMovieLength)

    var matchingSecondMovieLength = flightLength - firstMovieLength
    console.log('2nd movie length: ', matchingSecondMovieLength)
    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
      return true // built in Set has constant lookup time!!!!
    }

    movieLengthsSeen.add(firstMovieLength)
  }
  return false
}

let results = checkMovies(movieLengths, flightLength)
console.log('3.5 hour flight? ', results)
