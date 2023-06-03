function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [N, ...testCase] = fs.readFileSync(path).toString().trim().replaceAll('\r','').split("\n");
    
    const result = testCase.reduce((acc, str) => {
        let stack = [];
        for(const ch of str) {
            if(stack.length > 0 && stack[stack.length - 1] === ch) {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }

        return stack.length > 0? acc : acc + 1;
    }, 0);

    console.log(result);
}

solve();