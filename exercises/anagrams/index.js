// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//Solution 1
// function anagrams(stringA, stringB) {
//     const aCharMap =buildCharMap(stringA);
//     const bCharMap =buildCharMap(stringB);
//     //checks if number of keys in object are not the same. If so return false
//     if(!Object.keys(aCharMap).length===Object.keys(bCharMap).length){
//         return false
//     }
//     //iterate thru acharmap, and if at anypoint it does not equal bchar[char]
//     //return false because it is not a anagram
//     for (let char in aCharMap){
//         if (aCharMap[char]!==bCharMap[char]){
//             return false;
//         }else{
//             return true
//         }
//     }
// }

// function buildCharMap(str){
//     const charMap ={};

//     //removes any punctuation and spaces. Replaces with a ''. Also makes lowercase
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         //places letter as key, and increases count by 1 or makes 1 if doesnt exists
//         charMap[char]=charMap[char]+1 || 1;
//     }
//     return charMap;
// }


function anagrams(stringA, stringB){
    //compare, if the same return true
    return !cleanString(stringA)===cleanString(stringB)
}


function cleanString(str){
    //g-Retain the index of the last match, allowing subsequent searches to start from the end of the previous match.
    //Without the global flag, subsequent searches will return the same match.

    //w-Matches any word character (alphanumeric & underscore). Only matches low-ascii characters (no accented or non-roman characters). Equivalent to [A-Za-z0-9_]

    //[^\w]-Match any character that is not in the set.
    
    //replace(this, withThat)
    //remove punctuation and spaces, make lowercase, conver to array, sort, join into string
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}
module.exports = anagrams;
