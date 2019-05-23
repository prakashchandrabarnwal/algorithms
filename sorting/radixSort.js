/**
 *  For numbers 
 * */

const getDigit=(num,pos)=>{
    return  Math.floor(Math.abs(num)/(Math.pow(10,pos)))%10;
}

const getDigitCount = (num) => {
    if(!num) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;
}

const mostDigits = (nums) =>{
    let maxDigits = 0;
    for(let i = 0; i < nums.length ; i++){
        maxDigits = Math.max(maxDigits,getDigitCount(nums[i]))
    }
    return maxDigits;
}

const radixSort = (nums) =>{
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount ; k++){
        let digiBuckets = Array.from({length:10},()=>[]);
        for(let i = 0; i < nums.length ; i++){
            let digit = getDigit(nums[i],k);
            digiBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digiBuckets);
    }
    return nums;
}   

//console.log(getDigit(12345,2))
//console.log(getDigitCount(23));

console.log(radixSort([10,2,4,6,7,3]))