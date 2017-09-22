module.exports = function check(str, bracketsConfig) {
    console.log(bracketsConfig[0]);
    //str = str.slice();
    let brackets =str.split('');
    let stack =[];
    let head = -1;
    let onDeleteBracket = false;

    stack.push(brackets[0]);
    head++;

    for(let i = 1; i < brackets.length; i++){
        stack.push(brackets[i]);
        head++;
        onDeleteBracket = false;
        for( let arr of bracketsConfig){
            if(stack[head - 1] == arr[0] &&
                stack[head] == arr[1]){
                onDeleteBracket = true;
                break;
            }
        }

        if(onDeleteBracket == true){
            stack.pop();
            stack.pop();
            head-=2;
        }

    }
    if(stack.length == 0)
        return true;
    return false;
}
