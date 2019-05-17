/*
    write a fn called same which accepts two arrays.
    The function should return true if every value in the array has its corresponding
    value squared in the second array. The frequency of values must be same.

    same([1,2,3],[4,1,9]) true
    same([1,2,3],[1,9]) false
    same([1,2,1],[4,4,1]) false
*/
/*

// 1st solution O(n^2)
const same=(arr1,arr2)=>{
    if(arr1.length!==arr2.length){
        return false;
    }
    for(let ar1 of arr1){ //O(n)
        let index = arr2.indexOf(ar1**2); //O(n) results O(n^2)
        if( index >-1){
            arr2.splice(index,1);
        }else{
            return false;
        }
    }
    return true;

}
*/

//O(n) better performance
const same = (ar1,ar2) => {
    
    if(ar1.length!==ar2.length){
        return false;
    }

    const freq1 = {};
    const freq2 = {};

    for(let i of ar1){
        freq1[i] = (freq1[i] || 0)+1;
    }

    for(let i of ar2){
        freq2[i] = (freq2[i] || 0)+1;
    }

   for(let key in freq1){
        if(!freq2[key**2]){
            return false;
        }

        if(freq2[key**2] !== freq1[key]){
            return false;
        }

   }

    return true;

}




console.log(same([1,2,1],[4,4,1]))