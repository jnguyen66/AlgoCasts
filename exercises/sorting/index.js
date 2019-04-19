// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0;i<arr.length;i++){
        for(let j=0; j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
               arr[j]=arr[j+1]
               arr[j+1]=temp;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    //loop thru array
    for(let i=0; i<arr.length; i++){
        //set indexofmin to i
        let indexofMin=i;
    //loop thru array starting at next index
        for(let j=i+1; j<arr.length; j++){
            //if indexofmin is greater than current index
            if(arr[indexofMin]>arr[j]){
                //set current index equal to min
                indexofMin=j;
            }
        }
        //if at the end of the iteration, min is not equal to i
        if(indexofMin!==i){
            //swap min with i
               let temp=arr[i];
               arr[i]=arr[indexofMin]
               arr[indexofMin]=temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length===1){
        return arr;
    }
    //find center index of array
    const center=Math.floor(arr.length/2);
    //slice everything takes everything upto but not including second parameter
    const left=arr.slice(0,center)
    //take the rest of array
    const right=arr.slice(center)

    return merge( mergeSort(left), mergeSort(right));

}

function merge(left, right) {
    const results =[];

    //while there is still something in each array
    while(left.length && right.length){
        //if right is bigger
        if(left[0]<right[0]){
            //push left into results
            results.push(left.shift())
        }else{
            //vice versa
            results.push(right.shift())
        }
    }

    //return results and what ever is left of the arrays
  return [...results, ...left, ...right]
      
    
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
