// same group of letter forms different words
// e.g. cinema and iceman

const anagram = (str1,str2) => {

    if(str1.length !== str2.length){
        return false;
    }

    const freq1={};
    const freq2={};

    for(let i of str1){
        freq1[i]= (freq1[i]||0) +1;
    }

    for(let i of str2){
        freq2[i]= (freq2[i]||0) +1;
    }

    for(let i in freq1){
        if(freq1[i] !== freq2[i]){
            return false
        }
    }
    return true;
}

console.log(anagram("qwerty","ytrewq"));