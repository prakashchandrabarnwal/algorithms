// countUniqueValues for sorted array
//[1,1,1,2,2,3,3]

//O(n)
const countUniqueValues = (arr) => {
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!==arr[j]){
            i++;
            arr[i]=arr[j];
        }
       
    }
    return arr.splice(0,i+1).length;

}

console.log(countUniqueValues([]));

