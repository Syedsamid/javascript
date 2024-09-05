/*
append
prepend
show


*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    //create a new node
    let newNode = new Node(data);

    //it can be a first node, list is empty
    if (!this.head) {
      this.head = newNode;
      return;
    }

    //it can be new node, list already exist
    let current = this.head;
    while (current.next) {
      //
      current = current.next;
    }
    current.next - newNode;
  }
  prepend(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  show() {
    let current = this.head;

    const ll = [];
    while (current.next) {
      ll.push(current.data); // push data to array
      current = current.next; //update the nex node
    }
    console.log(ll);
  }
}

let l1 = new LinkedList();
l1.append(1);
l1.append(2);
l1.append(3);
l1.prepend(0);
l1.prepend(-1);
l1.show(); // [1, 2, 3]

/*

Linked List

Array
0  1 2
[1,2,3]

push
0  1 2 3
[1,2,3,4]

unshift -1
 0  1 2 3 4
[-1,1,2,3,4]


*/
