// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//iterative solution
// function fib(n) {
//     //manully enter the first two numbers of fib seq
//     const results = [0, 1];
//     //start at index 2
//     for (let i=2; i<=n; i++){
//         //set index equal to the sum of the previous two indexes
//         results[i]=results[i-1]+results[i-2]
//     }
//     return results[n];
    
// }

//recursive solution
// function fib(n) {
//     if(n<2){
//         return n;
//     }
//     return fib(n-1)+fib(n-2);
    
// }

function memoize(fn){
    //store computed results
    const cache = {};
    //args to allow for multiple arguments
return function(...args){
    //if exist in cache return value
    if(cache[args]){
        return cache[args];
    }
    //set result equal to original function call with its arguments
    const result = fn.apply(this, args);
    //set arg of cache equal to result
    cache[args]=result;

    return result;
}
}

function fib(n) {
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

fib = memoize(fib)
module.exports = fib;
