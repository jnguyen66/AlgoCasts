// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


//This solution is better
// function capitalize(str) {
//     //create empty array
//     const words = []
//     //loop thru array of str split by space. i.e words.
//     for(let word of str.split(' ')){
//         //push, uppercase first letter, and add the rest of the word to empty array
//         words.push(word[0].toUpperCase()+word.slice(1))
//     }
//     return words.join(' ')
// }


function capitalize(str) {
    //sets results to first letter uppercase
    let result = str[0].toUpperCase();
    //loop thru string one letter at a time
 for (i=1;i<str.length;i++){
     //if there is a space to the left
    if(str[i-1]===" "){
        //capitalize and add to result
        result+=str[i].toUpperCase();
    }else{
        //otherwise just add to result
        result+=str[i];
    }
 }
 return result;
}

module.exports = capitalize;
