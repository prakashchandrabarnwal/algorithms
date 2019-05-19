const sumRange=(n)=>{
    if(n==1) return n;
    return n + sumRange(--n)
}

console.log(sumRange(12500));
