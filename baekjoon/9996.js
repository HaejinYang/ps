function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [count, pattern, ...testCase] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n");
    
    const [lhs, rhs] = pattern.split("*");
    testCase.forEach(e => {
        if(!e.startsWith(lhs)) {
            console.log("NE");

            return; 
        }

        const rest = e.split(lhs).join("");
        if(!rest.endsWith(rhs)) {
            console.log("NE");

            return;
        }

        console.log("DA");
    });
    
    return;
}

function findNextPatternIndex(next, testCase, start) {
    for(let i = start; i < testCase.length; i++) {
        if(testCase[i] === next) {
            return i;
        }
    }

    return -1;
}

solve();