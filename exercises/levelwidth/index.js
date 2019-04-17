// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    //create array to hold the nodes as we iterate
    const arr = [root, 's'];
    //create an array to keep track of counters
    const counters = [0];
    //while there is more than just the s element in the array
    while(arr.length>1){
        //take out the first element from the array
        const node=arr.shift()
        //if that node equals s
        if(node==='s'){
            //create a new row counter by pushing 0 to counter
            counters.push(0);
            //put back s into the array
            arr.push('s')
        }else{
            //else push all of the nodes children into the array
            arr.push(...node.children);
            //increase the counter by 1
            counters[counters.length-1]++
        } 
    }
    return counters;
}

module.exports = levelWidth;
