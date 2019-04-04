// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// function reverse(str) {
// return str.split('').reverse().join('');    
// }


// function reverse(str) {
//     let reversed = '';

//     for (let character of str){
//         reversed= character + reversed;
//     }
    

//     //  for (let i=0; i<str.length; i++){
//     //     reversed= str[i] + reversed;
//     //  }


//      return reversed;
//     }



function reverse(str) {
    //reduce, reduces array to a single value. It executes a provided function on each value of the array from left to right.
    //the return value of the function is stored in an accumulator(reversed)
    //reversed is the accumulator, charcter is each element of the array
    return str.split('').reduce((reversed, character)=>{
        return reversed= character + reversed;
    },'')
}
module.exports = reverse;
