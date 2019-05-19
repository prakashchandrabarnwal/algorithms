/** 
 * Write a fn which accepts an array of integers and a number called n. The
 * fn should calculate the max sum of n consicutive elements in the array.
 **/

 // maxSum([1,2,3,5,6,7,4,5],2) //13

/*
O(n^2)
 const maxSum = (arr,n) => {
     if(arr.length < n) return null;
     let max = -Infinity;
     for(let i=0; i<arr.length-n+1; i++){
        let temp=0;
        for(let j=0;j<n;j++){
            temp += arr[i+j]
        }
        if(temp>max){
            max=temp
        }
     }
     return max;
 }
 */
const maxSum=(arr,n)=>{
    if(arr.length < n) return null;
    let maxSum=0;
    for(let i=0;i<n;i++){
        maxSum+=arr[i];
    }
    let temp=maxSum;
    for(let i=n;i<arr.length;i++){
        temp=temp+arr[i]-arr[i-n];
        maxSum=Math.max(temp,maxSum);
    }
    return maxSum;
}

 console.log(maxSum([1,2,3,5,6,7,7,4,5,12],3))