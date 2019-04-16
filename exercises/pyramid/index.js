// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midpoint = Math.floor((2*n-1)/2);
//     for (let row =0; row<n; row++){
//         let level = '';

//         for (let column=0; column<2*n-1; column++){
//             //current column is within range of pyramid range
//             if(midpoint-row<=column && midpoint+row>=column){
//                 level +="#";
//             }else{
//                 level +=' '
//             }
//         }
//         console.log(level);
//     }
// }

function pyramid(n, row=0, level='') {
     //check for base case. if n = row
     if(row===n){
        return;
    }

    //if n is equal to the column calculation. Console log current level and move on to next row
    if (level.length===2*n-1){
        console.log(level);
        return pyramid(n, row+1);
      
    }

    //compare to length to determine column
    const midpoint =Math.floor((2*n-1)/2);
    let add;
    if(midpoint-row<=level.length && midpoint+row>=level.length){
        add="#";
    }else{
        add=' '
    }

    //call pyramid again. not changing row because we are in the middle of a row
    pyramid(n, row, level+ add);
}


module.exports = pyramid;
