/**
 * Given a sorted array of integers and a target average. Determine if there
 * is a pair of values in the array where the pairs equals the target avegrage.  
 */
const averagePair=(arr,num)=>{
    let left=0;
    let right=arr.length-1;

    while(right>left){
        let avg = (arr[left]+arr[right])/2;
        if(avg === num){
            return true;
        }
        (avg>num) ? right--:left++;
    }
    return false;
}

console.log(averagePair([],4.1))