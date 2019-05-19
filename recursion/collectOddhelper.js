const collectOdd = (arr) =>{
        
    let result=[];

        const helper = (ar)=>{
            if(ar.length==0) return;
            if(ar[0]%2!==0){
                result=[...result,ar[0]];
            }
            helper(ar.slice(1));
        }

    helper(arr);

    return result;
}

console.log(collectOdd([1,2,3,4,5,6,7]));