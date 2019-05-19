const sameFrequency = (num1,num2)=>{

        num1=num1.toString();
        num2=num2.toString();
        if(num1.length !== num2.length){
            return false;
        }
        const freq1={};
        const freq2={};
        
        for(let i=0;i<num1.length;i++){
            freq1[num1[i]]=(freq1[num1[i]] || 0)+1;
        }
        for(let i=0;i<num2.length;i++){
            freq2[num2[i]]=(freq2[num2[i]] || 0)+1;
        }

        for(let i in freq1){
            if(freq1[i] !== freq2[i]){
                return false;
            }
        }
        return true;
}

console.log(sameFrequency(34,14))