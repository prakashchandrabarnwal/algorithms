const collectOdd = (arr) => {

    let newArr=[];

    if(arr.length==0){
        return newArr;
    }

    if(arr[0]%2!==0){
        newArr=[arr[0]];
    }

    newArr=newArr.concat(collectOdd(arr.slice(1)));

    return newArr;

}
console.log(collectOdd([1,2,3,4,5,6]))