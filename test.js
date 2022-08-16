/**
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    let stack = [];
    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(token);
        }else{
            if(token==="+"){
                let firstOpprand = stack.pop();
                let secondOpprand = stack.pop();
                let temp = Number.parseInt(secondOpprand, 10) + Number.parseInt(firstOpprand, 10);
                stack.push(temp);
            }else if(token==="-"){
                let firstOpprand = stack.pop();
                let secondOpprand = stack.pop();
                let temp = Number.parseInt(secondOpprand, 10) - Number.parseInt(firstOpprand, 10);
                stack.push(temp);
            }else if(token==="/"){
                let firstOpprand = stack.pop();
                let secondOpprand = stack.pop();
                let temp = Number.parseInt(secondOpprand, 10) / Number.parseInt(firstOpprand, 10);
                stack.push(Number.parseInt(temp, 10));
            }else{
               let firstOpprand = stack.pop();
                let secondOpprand = stack.pop();
                let temp = Number.parseInt(secondOpprand, 10) * Number.parseInt(firstOpprand, 10);
                stack.push(temp);
            }
        }
    }
    return Number.parseInt(stack.pop(), 10);
};

console.log(evalRPN(["4","13","5","/","+"]))