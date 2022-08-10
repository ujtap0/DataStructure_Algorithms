class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = null;
  }
  // 1. create new node
  // 2, if the head is null => set the head and tail to bethe newly created node
  // 3. if not, set the next property on the tail to be that node
  // 4. set the prev proverty on the newly created node to be the tail
  // 5. increment the length
  // 6. return doubly linked lists
  push(val){
    const node = new Node(val)
    if(!this.head){
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++
    return this
  }
  // 1. if there is no head, return undefined
  // 2. store the current tail in a variable to reurn later
  // 3. if the length is 1, set the head and tail to be null
  // 4. update the tail to be the prev node
  // 5. set the newTail's next to null
  // 6. decrement the length
  // 7. return the vvalue removed
  pop(){
    if(!this.head) return undefined;
    const current = this.tail;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.tail = current.prev
      this.tail.next = null;
      current.prev = null;
    }
    this.length--;
    return current;
  }
  
  shift(){
    if(!this.head) return undefined
    const current = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    }else{
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    this.length--;
    return current;
  }

  //unshifting: adding a node to the beginnign of the doubly linked list
  unshift(val){
    const node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = this.head;
    } else {
      this.head.prev = node;
      node.next = this.heas;
      this.head = node
    }
    this.length++;
    return this
  }

  // accessing a node in a doubly linked list by its position
  // if the index is less than 0 or greater or equal to the length, return null
  // if the index is less than or equal to half the length of the list
  // loop though the list starting from the head and loop towards the middle
  // return node once it is found

  // if the inde is greater than half the length of the list
  // loop through the lsit starting from the tail and loop towards the middle
  // return the node once it is found

  get(idx){
    if(idx < 0 || idx >= this.length) return null;
    let count;
    let currentNode;
    if(idx <= this.length/2){
      currentNode = this.head;
      count = 0;
      while(count !== idx){
        currentNode = currentNode.next;
        count++
      }
    } else {
      while(count !== idx){
        currentNode = this.tail;
        count = this.length-1;
        while(count !== idx){
          currentNode = currentNode.prev;
          count--
        }
      }
    }
    return currentNode;
  }
  //replacing the value of a node to the in a doubly linked list
  set(idx, val){
    const foundNode = this.get(idx);
    if(!foundNode){
      return false;
    } else {
      foundNode.val = val;
      return true;
    }
  }
  // adding a node in doubly linked list by a certain position
  // if the index is less than zero or greater than or equal to the length return false
  // if the index is 0, unshift
  // if the index is the same as the length, push
  // use the get method to access the index -1
  // set the next and prev properties on the correct nodes to link everything together
  // increment the length
  // return true
  set(idx, val){
    if(index < 0 || index > this.length) return false
    if(idx === 0) return this.unshift(val);
    if(idx === this.length) return this.push(val);
    const newNode = new Node(val)
    const prevNode = this.get(idx - 1);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }
  // removing a node in a doubly linked list by a certain position
  // if the index is less than zero or greater than or equal to the length return undefined
  // if the index is 0, shift
  // if the index is the same as the length - 1, pop
  // use the get method to retieve the item to be removed
  // update the next and prev properties to remove the found node from the list
  // set next and prev to null on the found node
  // decreament the length
  // return the removed node
  remove(idx){
    if(idx < 0 || idx >= this.length) return undefined;
    if(idx === 0) return this.shift() 
    if (idx === this.length - 1) return this.pop()
    const targetNode = this.get(idx)
    const prevNode = targetNode.prev;
    const nextNode = targetNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    return targetNode;
  }
}