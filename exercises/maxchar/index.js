// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

//other possible questions
//what is the most common charct in a string
//does a String a have the same characters as string b(anagram)
//does the given string have repeated characters
// function maxChar(str) {
//    const chars = {};
//    let highest =1;
//    mostFreq=null;
//    for (let char of str){
//        chars[char]=chars[char]+1 ||1
//    }
//    for(let char in chars){
//        if(chars[char]>highest){
//            mostFreq=char;
//        }
//    }
//    return mostFreq;
// }


function maxChar(str) {
    const chars = {};
    let max =0;
     let maxChar='';
     //for of is for arrays
    for (let char of str){
        //if it does not exist in object, create and set equal to 1
       if(!chars[char]){
           chars[char]=1;
       }else{
           //else if it does just add 1
           chars[char]++
       }
    }
    //for in is for objects
    for(let char in chars){
        if(chars[char]>max){
            max=chars[char];
            maxChar=char;
        }
    }


    return maxChar;
 }
 

module.exports = maxChar;
