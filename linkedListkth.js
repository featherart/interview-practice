/*
You have a linked list ↴ and want to find the kth to last node.
Write a function kthToLastNode() that takes an integer k and the headNode of a singly linked list,
and returns the kkth to last node in the list.
*/

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// my solution - simpler but fails to throw error for k > linkedList.length
function kthToLastNode(k, head) {
  var counter = -1
  var current = head
  while (current) {
    if (counter === k) return current
    current = current.next
    counter++
  }
  return 'no can do, k > linkedList length' // not found
}

function kthToLastNode2(k, head) {
  if (k < 1) {
    throw new Error('no can do')
  }
  var leftNode = head
  var rightNode = head
  // move rightNode to kth node
  for (var i = 0; i < k - 1; i++) {
    if (!rightNode.next) {
      throw new Error('k larger than linked list ', k)
    }
    rightNode = rightNode.next
  }

  while (rightNode.next) {
    leftNode = leftNode.next
    rightNode = rightNode.next
  }
  return leftNode
}

let item = kthToLastNode(2, a)
console.log(item)
let error = kthToLastNode(6, a)
console.log(error)

let item2 = kthToLastNode2(2, a)
console.log('2nd: ', item2)
