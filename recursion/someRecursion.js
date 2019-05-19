/**
 * write a recursive fn called someRecursive which accepts an array and a callback.
 * The fn returns true if a single value in the array returns true when passed to the
 * callback. Otherwise returns false. 
 * */

 const someRecursive = (arr,cb)=>{
     if(arr.length == 0) return false;
     if(cb(arr[0])) return true;
     return someRecursive(arr.slice(1,arr.length),cb);
 }

 console.log(someRecursive([4,6,8,9,11],(val)=> val > 10 ))