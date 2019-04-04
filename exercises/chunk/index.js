// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const chunked =[];
//     for(let element of array){
//         const last = chunked[chunked.length-1];
//         //If last element does not exists
//         //or if its length is equal to chunk size
//         if(!last || last.length===size){
//             //push a new chunk into chunked with current element
//             chunked.push([element]);
//             //else add current element into the chunk
//         }else{
//             last.push(element)
//         }
//     }
//     return chunked;
// }

//slice() first argument is starting point, second is upto which index. NOT how many
function chunk(array, size) {
    const chunked =[];
    let index=0;
    //checks that we are not at the end of array
    while(index<array.length){
        //cuts slice of array from index start point to specified size param
        //and pushes to array
        chunked.push(array.slice(index, index+size))
        //increases index by size
        index+=size;
    }
    return chunked;
}

module.exports = chunk;
