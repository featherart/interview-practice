/*
  Delete a node from a singly-linked list ↴ , given only a variable pointing to that node.
  The input could, for example, be the variable b below:

    function LinkedListNode(value) {
      this.value = value;
      this.next = null;
  }

  var a = new LinkedListNode('A');
  var b = new LinkedListNode('B');
  var c = new LinkedListNode('C');

  a.next = b;
  b.next = c;

  deleteNode(b);
*/
// can't you just do a.next = a.next.next ?

// basically, yes
// except you actually just copy over the data and pointer to the "deleted" node
// this could introduce side effects and might be a very bad idea IRL
function LinkedListNode(value) {
  this.value = value
  this.next = null
}

var a = new LinkedListNode('A')
var b = new LinkedListNode('B')
var c = new LinkedListNode('C')

a.next = b
b.next = c

deleteNode(b)

function deleteNode(node) {
  var nextNode = node.next

  if (nextNode) {
    node.value = nextNode.value
    node.next = nextNode.next
  } else {
    throw new Error('cannot delete last node')
  }
}
