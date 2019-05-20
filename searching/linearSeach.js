/**
 * indexOf includes find findIndex
 */

 const linearSearch = (arr,value) => {
    for(let i=0; i<=arr.length-1 ; i++){
        if(arr[i]===value){
            return i;
        }
    }
    return -1;
 }

 console.log(linearSearch([1,2,3,4,5],5))