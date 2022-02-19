
// Node used to create a list with nodes
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

// LinkedList class with a head and length property and methods to add, remove, and get values
class LinkedList {
  constructor(){
    this.head = null;
    this.length = null
  }
  // add a node to the end of the list
  insert(value){
    // create a new node
    let node = new Node(value);
    // if the list is empty, set the head to the new node
    if(!this.head){
      this.head = node;
      this.length = 1;
    }else{ // otherwise, find the last node in the list
      let current = this.head;
      // loop through the list until you find the last node
      while(current.next){
        // set the current node to the next node
        current = current.next;
      }
      // set the next property of the last node to the new node
      current.next = node;
      // increment the length of the list
      this.length++;
    }
  }

  transversalNode(){
    let list = [];
    let current = this.head;
    while(current){
      list.push(current.value);
      current = current.next;
    }
    return list;
  }

  insertAt({value, index} ){
    // create a new node
    let node = new Node(value);
    // if the index is 0, set the head to the new node
    if(index === 0){
      node.next = this.head;
      this.head = node;
    }else{
      // otherwise, find the node at the given index
      let current = this.head;
      let previous;
      let counter = 0;
      while(counter < index){
        previous = current;
        current = current.next;
        counter++;
      }
      // set the next property of the node before the index to the new node
      previous.next = node;
      // set the next property of the new node to the node at the index
      node.next = current;
    }
    // increment the length of the list
    this.length++;
  }

  removeAt({index}){
    // if the index is 0, set the head to the next node
    if(index === 0){
      this.head = this.head.next;
    }else{
      // otherwise, find the node at the given index
      let current = this.head;
      let previous;
      let counter = 0;
      while(counter < index){
        previous = current;
        current = current.next;
        counter++;
      }
      // set the next property of the node before the index to the node after the index
      previous.next = current.next;
    }
    // decrement the length of the list
    this.length--;
  }
}

const list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);
list.insert(4);
list.insert(5);
list.insert(6);

console.log(JSON.stringify(list.head));
console.log(list.transversalNode());
list.insertAt({index : 3, value: 7});
console.log(list.transversalNode());
list.removeAt({index: 3});
console.log(list.transversalNode());