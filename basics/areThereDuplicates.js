const areThereDuplicates = (...args)=>{

    /*const sorted= args.sort();
    for(let i=0; i<sorted.length; i++){
        if(sorted[i] === sorted[i+1]){
            return true;
        }
    }
    return false;
*/

    const freq={};

    for(let i=0; i<args.length;i++){
        freq[args[i]]=(freq[args[i]]||0)+1;
    }

    for(let i in freq){
        if(freq[i]>1){
            return true;
        }
    }
    return false;
}

console.log(areThereDuplicates('a','b','v','a'));