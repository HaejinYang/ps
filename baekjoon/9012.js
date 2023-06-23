function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [T, ...testCases] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    
    let result = []; // array of strings
    let st = [];
    testCases.forEach(element => {
        for(const p of element) {
            if(st.length === 0) {
                st.push(p);
            } else {
                if(st[st.length - 1] === "(" &&  p === ")") {
                    st.pop();
                } else {
                    st.push(p);
                }
            }
        }

        st.length === 0? result.push("YES") : result.push("NO");
        st = [];
    });

    console.log(result.join("\n"));
}

solve();