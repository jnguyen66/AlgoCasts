// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//solution 1
// function vowels(str) {
//    const  vowel=["a","e","i","o","u"]
//    let vowelNum=0;
//     for (let char of str){
//         for(let vow of vowel){
//             if (char.toLowerCase()===vow){
//                 vowelNum++
//             }
//         }
//     }
//     return vowelNum;
// }


// function vowels(str) {
//     let counter =0;
//     const checker =["a","e","i","o","u"];
//      for (let char of str.toLowerCase()){
//         if(checker.includes(char)){
//             counter++;
//         }
//      }
//      return counter;
//  }


 function vowels(str) {
     //g-do not stop at first match. i-case insenstive. [] anything inside
     //match returns null if nothing is found and an array of what is found.
   const matches= str.match(/[aeiou]/gi);
   //if matches is truthy return its length, if its null return 0
  return  matches ? matches.length:0
 }

module.exports = vowels;
