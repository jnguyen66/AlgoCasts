// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    //if max is not null and node is right than max return false
    if (max !== null && node.data > max) {
        return false;
      }
    //same comparison for min
      if (min !== null && node.data < min) {
        return false;
      }
      //if there is aleft node, call validate again with left node and a max of the current node
      //if it returns true it flips and the whole expression returns false
      if (node.left && !validate(node.left, min, node.data)) {
        return false;
      }
    //if there is a right node, call validate again with right node and a min of the current node
      //if it returns true it flips and the whole expression returns false
      if (node.right && !validate(node.right, node.data, max)) {
        return false;
      }
    
      return true;
    
 


}

module.exports = validate;
