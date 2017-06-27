/*
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal."
More rigorously: each side is parallel with either the x-axis or the y-axis.

They are defined as objects ↴ like this:

  var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

};

Your output rectangle should use this format as well.
*/
let findIntersection = function(x1, y1, w1, l1, x2, y2, w2, l2) {
  if (noIntersection(x1, y1, w1, l1, x2, y2, w2, l2)) {
    return 'no match'
  }
  else { // intersection
    let intersectionWidth = findXOverlap(x1, w1, x2, w2)
    let intersectionHeight = findYOverlap(y1, h1, y2, h2)
    let leftX = findIntersectionX(x1, intersectionWidth, x2)
    let bottomY = findIntersectionY(y1, intersectionHeight, y2)
    }
  }
}


let findXOverlap = function(x1, w1, x2, w2) {
  let side1 = Math.abs(w1 - x1)
  let side2 = Math.abs(w2 - x2)
  return Math.abs(side1 - side2)
}

let findYOverlap = function(y1, h1, y2, h2) {
  let height1 = Math.abs(h1 - y1)
  let height2 = Math.abs(h2 - y2)
  return Math.abs(height1 - height2)
}

let findIntersectionX = function(x1, edgeIntersection, x2) {
  if (x2 >= x1) {
    return x2
  } else {
    return x2 + edgeIntersection
  }
}
