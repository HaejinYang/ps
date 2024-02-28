/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const minLength = strs.reduce((acc, val, index, arr)=> val.length > acc ? val.length : acc, 0); 
    let prefix = "";
    let isPrefix = true;
    for(let i = 0; i < minLength; i++) {
        prefix = strs[0].substring(0, i + 1);
        isPrefix = true;
        for(let j = 0; j < strs.length; j++) {
            if(!strs[j].startsWith(prefix)) {
                isPrefix = false;

                break;
            }
        }

        if(!isPrefix) {
            return strs[0].substring(0, i);
        }
    }

    return prefix;
};