/**
 * O(log(n))
 * @param {array} arr 
 * @param {value} value 
 */

const binarySearch = (arr,value) => {

    let left = 0;
    let right = arr.length-1;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if( value === arr[mid] ){
            return mid;
        }else if(value > arr[mid]){
            left = mid+1;
        }else{
            right = mid-1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5],5))