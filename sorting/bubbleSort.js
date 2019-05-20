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
    for(let i=arr.length-1 ; i>=0; i--){
        noSwaps=true;
        for(let j = 0; j < i ;j++){
            if(arr[j]>arr[j+1]){
                noSwaps=true
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

 console.log(bubbleSort([2,3,1,2]));