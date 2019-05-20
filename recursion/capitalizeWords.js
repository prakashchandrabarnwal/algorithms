const capitalizeWords = (arr) => {
    let result = [];
    if(arr.length===0) return result;

       result = [...result, arr[0].toUpperCase()] 


    return [...result, ...capitalizeWords(arr.slice(1))] 
}


console.log(capitalizeWords(["abc","def","nmns"]))