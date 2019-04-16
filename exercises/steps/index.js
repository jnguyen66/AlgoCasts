// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//solution 1
// function steps(n) {
//    for(let i=0; i<n; i++){
//        //for each iteration of outer loop make a new string
//     let stair =''
//        for(let j=0; j<n; j++){
//            //in the inner array, check to see if j is less than or equal to outer loop index
//            if(j<=i){
//                //if so, add a hash symbol
//             stair+='#'
//            }else{
//                //if not add a space
//             stair= stair.concat(' ');
//            }  
//        }
//        //console log the result at each outloop iteration
//        console.log(stair);
//    }
// }


function steps(n, row=0, stair='') {
    //check for base case. if n = row
    if(n===row){
        return;
    }

    //if n is equal to length
    if (n===stair.length){
        console.log(stair);
        steps(n, row+1);
        return;
    }

    //if stair.length less than row
    if(stair.length<=row){
        stair+="#";
    }else{
        stair +=' '
    }

    //call steps again
    steps(n, row, stair);
 }
module.exports = steps;
