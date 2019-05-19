/**
 * fn should check whether the characters in the first string appear somewhere
 * in the second string whithout changing their order.
 * 
 * isSubsequence("abc","adfjbksc") // true
 * isSubsequence("sing","sting") // true
 */


const isSubsequence=(str1,str2)=>{
    let j=0;
    let i=0;

    if(!str1) return true;
    
    while(j<str2.length){
        if(str1[i]==str2[j]) 
        {
            i++;
           
        }
        if(i==str1.length)
            return true;
            j++;
    }

    return false;
}

console.log(isSubsequence("sing","sting"))