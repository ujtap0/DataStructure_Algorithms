// piece of data = val
// reference to next node = next

// var first = new Node("Hi");
// first.next = new Node("there")
// first.next.next = new Node("How")
// first.next.next.next = new Node("Are")
// first.next.next.next.next = new Node("You")

class Node{
  constructor(val){
    this.var = val;
    this.next = null;
  }
}

class SignlyLinkedList {
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){
    var newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val){
    var newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++
    return this;
  }
  //GET: RETREIVING A NODE BY IT'S POSITON IN THE LINKED LIST
  //this function should accept an index
  //edge case: 인덱스가 0보다 작거나 length보다 크면 return null
  //Loop through the list until you reach the index and return th enode at that specific index => COUNTER VARIABLE
  get(index){
    if(index < 0 || index >= this.length) return null;
    var count = 0;
    var current = this.head;
    while(count !== index){
      current = current.next;
      count++
    }
    return current;
  }
  //SET: CHANGING THE VALUE OF A NDOE BASED ON IT'S POSITION IN THE LINKED LIST
  //this function should accept a value and an index
  //use get function to find the specific node
  //if the node is not found, return false
  //if the node is found, set the value of that node to be the value passed to the function and return true
  set(idx, val){
    const foundNode = this.get(idx);
    if(foundNode){
      foundNode.val = val;
      return true
    }
    return false;
  }
  //INSERT: ADDING A NODE TO THE LIKED LIST AT A SPECIFIC POSITION
  //if the index is less than zero or greater than the length, return false
  //if the index is the same as the length, push a nuew node to the end of the list
  //if the index is 0, unshift a new node to the start of the list
  //otherwise, using the get method, access the node at the index -1
  //set the next property on that node to be the new node
  //set the next property on the new node th be the previous next
  //increment the length
  //return true
  insert(idx, val){
    if(idx < 0 || idx > this.length) return false
    if(idx === this.length){
      this.push(val);
      return true;
    }
    if(idx === 0){
      this.unshift(val);
      return true;
    }
    const prevNode = this.get(idx-1);
    const newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    length++;
    return true;
  }
  //REMOVE: REMOVING A NODE FROM THE LINKED LIST AT A SPECIFIC POSITION
  //if the index is less than zero or greater than the length, return undefined
  //if the index is the same as the length-1, pop
  //if the index is 0, shift
  //otherwise, using the get method, access the node at the index-1
  //set the next property on that node to be the next of the next node
  //decrement the length
  //return the value of the node removed
  remove(idx){
    if(idx < 0 || idx >= this.length) return undefined;
    if(idx === this.length-1) return this.pop();
    if(idx === 0) return this.shift();
    const prevNode = this.get(idx-1);
    const foundNode = this.get(idx);
    prevNode.next = foundNode.next;
    this.length--;
    return foundNode;
  }
  //REVERSE: REVERSING THE LINKED LIST IN PLACE
  //swap the head and tail
  //create a variable called next
  //create a variable called prev
  //create a variable called node and initialize it to the head property
  //loop through the list
  //set next to be the next property on whatever node is
  //set the next property on the node to be whatever prev is
  //set prev to be the value of the node variable
  //set the node variable to be the value of the next variable
  print(){
    //to sew what's going on
    const arr = [];
    const current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse(){
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for(let i = 0; i < this.length; i++){
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this
  }
}

var list = new SignlyLinkedList()