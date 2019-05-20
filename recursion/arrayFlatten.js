
/*
const arrayFlatten = (arr) => {

    let result=[];

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result= [...result,...arrayFlatten(arr[i])]
        }else{
            result = [...result,arr[i]];
        }
    }

    return result;

}
*/
/*
const arrayFlatten = (arr)=>{
    let newArr = []; 
    function callIt(arr) {
        if (arr.length === 0) return;
        
        if (Array.isArray(arr[0]) ){
            callIt(arr[0]);
        } else {
            newArr.push(arr[0]);
        }
        arr.shift();
        callIt(arr);
    }
    callIt(arr);
    return newArr;
}
*/

const arrayFlatten = (arr) =>{
    let result = [];
    if(arr.length==0) return result;
    if(Array.isArray(arr[0])){
        result= [...result, ...arrayFlatten(arr[0])]
    }else{
        result = [...result,arr[0]];
    }
    return [...result,...arrayFlatten(arr.slice(1))]
}
console.log(arrayFlatten([ 6,[[[9],5]] ,[8]]))







