const capitalizeFirst = (arr) =>{
    let result=[];
    if(arr.length == 0) return result;

    result= [...result,arr[0].charAt(0).toUpperCase()+arr[0].slice(1)]

    return [...result,...capitalizeFirst(arr.slice(1))]
}

console.log(capitalizeFirst(["abc","def"]))