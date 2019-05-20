const collectStrings = (obj) => {
    let result = [];
    for(let i in obj){
      if(typeof obj[i]==='string'){
          result=[...result,obj[i]];
      }else if(typeof obj[i]==='object' && !Array.isArray(obj[i])){
          result = [...result,...collectStrings(obj[i])]
      }
    }
    return result;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])