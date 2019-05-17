const charCount= (str) =>{
    const result={}
    for(let i of str){
        let char= i.toLowerCase();
        /*
        if(/[a-z0-9]/.test(char)){
        result[char]=++result[char]||1;
        }
        regex are slow
        */
       if(char.charCodeAt(0)>96 && char.charCodeAt(0)<123 ||
          char.charCodeAt(0)>47 && char.charCodeAt(0)<58
    ){
        result[char]=++result[char]||1;
       }
    }
    return result;
}

console.log(charCount("Hello 11 there!"))