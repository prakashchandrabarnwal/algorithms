const reverse = (str) => (str.length==1) ? 
                 str : str.slice(str.length-1) + reverse(str.slice(0,str.length-1))



console.log(reverse("hello"));