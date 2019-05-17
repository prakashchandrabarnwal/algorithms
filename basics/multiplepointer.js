// function sumZero , accepts a sorted array finds the 
// first pair where sum is zero
// return both values id sum is 0 else returns undefined.


/*
// O(n^2)
const sumZero = (arr) => {
    let result;
    //arr.forEach((element,i) => {
    for(let i = 0;i<arr.length;i++){
        for(let k=i+1; k<arr.length;k++){
                if(!(arr[i] + arr[k])){
                    result= [arr[i],arr[k]];
                    return result;
                }
        }
    }
   // });
}
*/

//O(n)
const sumZero = (arr) => {

   let left=0;
   let right=arr.length-1;

   while(right>left){
       if(!(arr[left]+arr[right])){
           return [arr[left],arr[right]];
       }else if(arr[left]+arr[right]>0){
            right-- ;
       }else{
           left++ ;
       }
   }

}

console.log(sumZero([-5,-2,-1,0,1,32,3]));