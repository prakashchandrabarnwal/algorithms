/**
 * best case at almost sorted array
 */
/*
 const bubbleSort = (arr) => {
    let swap = true;
    while(swap){
        swap = false;
        for(let i=0;i<arr.length;i++){
            console.log(arr)
            if(arr[i]>arr[i+1]){
                swap=true;
                let temp=arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp
            }
        }
    }
    return arr;
 }
*/
const bubbleSort = (arr) => {
    let noSwaps;
    let c=0;
    for(let i = arr.length ; i > 0; i--){
        noSwaps=true;
        for(let j = 0; j < i-1; j++){
            console.log(c++);
            if(arr[j]>arr[j+1]){
                noSwaps=false;
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

 console.log(bubbleSort(Array.apply(null,{length:100000}).map(Function.call,Math.random)));