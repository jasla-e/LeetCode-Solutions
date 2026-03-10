/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let cm = [];

    for(let i = 0; i < s.length; i++){

        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            cm.push(s[i]);
        }
        else{

            let top = cm.pop();

            if(
                (s[i] === ')' && top !== '(') ||
                (s[i] === '}' && top !== '{') ||
                (s[i] === ']' && top !== '[')
            ){
                return false;
            }
        }
    }

    return cm.length === 0;
};