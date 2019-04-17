// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    //if noone passes anything for next it will default to null
    constructor(data, next=null){
        this.data= data;
        this.next=next;
    }
}

class LinkedList {
    //head equals null by default
    constructor(){
        this.head=null
    }

    insertFirst(data){
        //if its null it will be assigned to head anyways
            this.head=new Node(data, this.head);
       
    }
    size(){
        let node = this.head
        let counter=0
        //while there is something in node
        while(node){
            //increase counter then look at next node
            counter++
            node=node.next
        }
        return counter;
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        if(!this.head){
            return null;
        }
        //asign node head
        let node = this.head
        //while node is truthy
        while(node){
            //if its next is null, means you are at the tail
            if(!node.next){
                //return node
                return node;
            }
            //iterate to next node
            node=node.next
        } 
    }

    clear(){
        this.head=null;
    }

    removeFirst(){
        if(!this.head){
            return;
        }
        this.head=this.head.next
    }


    removeLast(){
        //if there is no nodes return
        if(!this.head){
            return;
        }
         //if there is only one node, remove that node
         if(!this.head.next){
            return this.head=null;
        }
         //assign node head to previous and next node to node
         let previous = this.head
         let node = this.head.next
         
         //while node.next is truthy
         while(node.next){
             //iterate to next node for prev and node
             node=node.next
             previous=previous.next
         } 
          //if its next is null, means you are at the tail
        //assign previous.next to null to remove node
           previous.next=null;

    }

    insertLast(data){
        const newNode=new Node(data);
        //fetch last node
        const last=this.getLast()
        //if there is no nodes, set newNode to head
        if(!last){
            this.head=newNode;
        }else{
            //else set newNode to last
            last.next=newNode;
        }
    }

    getAt(index){
        //if there is no node return null
        if(!this.head){
            return null;
        }
        //create counter and assign head to node
        let counter=0
        let node=this.head
            while(node){
                //if the index and counter are equal return the current node
                if(index===counter){
                    return node;
                }
                //increment counter and go to next node
                counter++
                node=node.next
            }  
            //if not found return null
        return null;
    }


    removeAt(index){
        //if there is no node return null
        if(!this.head){
            return;
        }
        //if index is 0 delete head node
        if(index===0){
            this.head=this.head.next;
            return;
        }
        //get node right before index
       let previous=this.getAt(index-1);
       if(!previous.next){
        return;
       }
       //assign previous to next next node to skip index node
       previous.next=previous.next.next;
    }

    insertAt(data, index){
        //if linked list is empty
        if(!this.head){
            this.insertFirst(data);
        }
       
        //if index is 0 make it first and make head the next
        if(index===0){
            this.insertFirst(data, this.head);
             return;
        }
        //get previous, if index does not exist get last
        let previous=this.getAt(index-1)|| this.getLast();
        //create new node with data and next pointed at previous.next
        let insert =new Node(data, previous.next);
        //make insert previous next
        previous.next=insert;

    }

    forEach(fn){
        if(!this.head){
            return;
        }
        let node=this.head
        while(node){
            fn(node);
            node=node.next
        }
        return;
    }


    *[Symbol.iterator](){
        let node=this.head
        while(node){
            yield node;
            node=node.next;
        }
    }

    
    
}

module.exports = { Node, LinkedList };
