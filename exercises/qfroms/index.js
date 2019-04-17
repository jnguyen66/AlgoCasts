// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    //create two stacks 
    constructor(){
        this.stack1=new Stack(),
        this.stack2=new Stack()
    }

    //add the element to the first stack
    add(n){
        this.stack1.push(n);
    }

    //create a variable holder. while stack1 has items, pop them into stack 2 to reverse the order.
    //store the last element into variable
    //then reverse everything while stack 2 is no null so that you have an ordered stack again
    remove(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }

        const removed= this.stack2.pop()

        if(this.stack2.peek()){
            while(this.stack2.peek()){
                this.stack1.push(this.stack2.pop());
            }
        }
        return removed;
    }

//reverse order to see whats next to be popped from a queue perspective.
//then reverse back
    peek(){
        while(this.stack1.peek()){
            this.stack2.push(this.stack1.pop());
        }

        const peeked= this.stack2.peek()
        
        if(this.stack2.peek()){
            while(this.stack2.peek()){
                this.stack1.push(this.stack2.pop());
            }
        }
        return peeked;
    }
}

module.exports = Queue;
