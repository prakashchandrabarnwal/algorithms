const stringifyNumber = (obj)=> {
    const result = {};
    for(let i in obj){
            if(typeof obj[i]==="number" && !isNaN(obj[i])){
                result[i] = obj[i].toString();
            }
            else if(typeof obj[i]==="object" && !Array.isArray(obj[i])){
                result[i]=stringifyNumber(obj[i]);
            }else{
                result[i]=obj[i]
            }
        }
    
    return result;
}
console.log(stringifyNumber({a:2,d:[1],c:{d:2}}))