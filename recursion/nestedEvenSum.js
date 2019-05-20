const nestedEvenSum = (obj) => {
    let sum=0;
    const helper = ( innerObj ) => {
    for(let i in innerObj){
        if(typeof innerObj[i]==="object"){
            helper(innerObj[i]);
        }else if(!isNaN(innerObj[i]) && typeof innerObj[i]==="number" && innerObj[i]%2==0){
            sum+=innerObj[i];
        }
    }
}
helper(obj);
return sum;
}


var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  }

  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
console.log(nestedEvenSum(obj1))