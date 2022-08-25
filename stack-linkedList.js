// function should accept a value
// create a new node with that value
// if there are no nodes in stack => set the first and last property to be the newly created ndoe
// if there is at least one node, create a variable that stores the current first property on the stack
// reset the first property to be the newly created node
// set the next property on the node to be the perviously created variable
// increment the size of the stack by 1

class Node {
  constructor(value){
    this.value = value;
    thie.next = null;
  }
}

class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){
    const newNode = new Node(val);
    if(this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop(){
    if(!this.first) return null;
    const target = this.first;
    if(this.length===this.last){
      this.last = null;
    }
    this.first = target.next;
    this.size;
    return target.value;
  }
}

//BIG O
// Insertion: O(1)
// Removal: O(1)
// Searching: O(N)
// Access: O(N)