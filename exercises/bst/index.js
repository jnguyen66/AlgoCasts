// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data){
        this.data=data
        this.left=null
        this.right=null
    }

    insert(data){
      //if data is less this the current node and left exists
        if (data < this.data && this.left) {
          //call insert again on the left node with data
            this.left.insert(data);
          } 
          
          else if (data < this.data) {
            //otherwise set left to to a new node with data
            this.left = new Node(data);
            //do the same comparison with the right if data ia greater
          } 
          
          else if (data > this.data && this.right) {
            this.right.insert(data);
          } 
          
          else if (data > this.data) {
            this.right = new Node(data);
          }
    }


    contains(data){  
      //if it is the same as current node return the node
       if (this.data === data) {
        return this;
       }
       //if data is bigger than current and right exists
    if (this.data < data && this.right) {
      //recursive call with right
      return this.right.contains(data);
      //do the same with left
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
//otherwise return null
    return null;
    }
}

module.exports = Node;
