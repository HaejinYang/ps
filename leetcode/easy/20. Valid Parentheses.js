/**
 * @param {string} s
 * @return {boolean}
 */
const BRACKET_MATCH = {
    '(' : ')',
    '{' : '}',
    '[' :']'
};

/*
    "{[]}" : true
    
*/
var isValid = function(s) {
    if(s.length % 2 !== 0) {
        return false;
    }

    let arr = [];
    for(let i = 0; i < s.length; i++) {
        if(arr.length !== 0) {
            const top = arr[arr.length - 1];
            if(top in BRACKET_MATCH) {
                const match = BRACKET_MATCH[top];
                if(match === s[i]) {
                    arr.pop();
                } else {
                    arr.push(s[i]);
                }
            } else {
                arr.push(s[i]);
            }
        } else {
            arr.push(s[i]);
        }
    }

    return (arr.length === 0);
};