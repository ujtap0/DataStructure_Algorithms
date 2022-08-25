class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// add to the end
// removing from first

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val){
    const node = new Node(val);
    if(!this.first){
      this.first = node;
      this.last = this.first;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
  dequeue(){
    if(this.size === 0) return;
    const target = this.first;
    if(this.first === this.last){
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return target.value;
  }
}
