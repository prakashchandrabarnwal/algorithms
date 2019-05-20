const stringifyNumbers = (obj) => {
    let result = {};
    const helper = (innerObj)=>{
        for(let i in innerObj){
            if(typeof innerObj[i]==="object"){
                helper(innerObj[i]);
            }else if(typeof innerObj[i]==="number" && !isNaN(innerObj[i])){
                result = { ...result,[i]:innerObj[i].toString()}
            }
        }
    }
    helper(obj);
    return result;
}

console.log(stringifyNumbers({a:2,b:3,c:{d:4,f:5}})) // { a: '2', b: '3', d: '4', f: '5' } 