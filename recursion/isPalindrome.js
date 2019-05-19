const isPalindrome = (str) => {
    const reverse = (str)=>{
    if(str.length==1) return str;
    return str.slice(str.length-1) + reverse(str.slice(0,str.length-1));
    }
     return str === reverse(str);
}

/**
 * function isPalindrome(str){

        if(str.length ==1) return true;

        if(str[0] == str[str.length-1]){

            return isPalindrome(str.substring(1,str.length-1));

    
        }
    return false;
} */

console.log(isPalindrome("aba"))