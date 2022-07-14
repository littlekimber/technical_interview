var decodeString = function(s) {
    let stack = [];
    for(let value of s){
        console.log(stack);
        if(value!=']'){
            stack.push(value)
        }else{
            let temp = '';
            let times = '';
            while(stack[stack.length-1]!='['){
                temp += stack.pop();
            }
            stack.pop();
            while(stack.length>0 && !isNaN(stack[stack.length-1])){
                times += stack.pop();
            }
            times = Number.parseInt(times.split('').reverse().join(''));
            temp = temp.split("").reverse().join("").repeat(times);;
            stack.push(temp);
        }
    }   
    
    return stack.join('');
};

decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef");