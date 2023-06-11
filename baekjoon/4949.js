function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const testCases = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');

    let st = [];
    let result = [];

    testCases.forEach(str => {
        for(const ch of str) {
            if(st.length === 0) {
                if(isParenthesis(ch)) {
                    st.push(ch);
                }
            } else {
                if((st[st.length-1] === '[' && ch === ']') || (st[st.length-1] === '(' && ch === ')')) {
                    st.pop();
                } else {
                   if(isParenthesis(ch)) {
                    st.push(ch)
                   } 
                }
            }
        }

        st.length === 0? result.push("yes") : result.push("no");
        st = [];
    });

    result.pop();
    console.log(result.join("\n"));
}

solve();

function isParenthesis(ch) {
    return ch === '[' || ch === ']' || ch === '(' || ch === ')';
}