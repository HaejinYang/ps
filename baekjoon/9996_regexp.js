function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [count, pattern, ...testCase] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n");
    

    let [lhs, rhs] = pattern.split("*");
    lhs = "^" + lhs;
    rhs = rhs + "$";
    const regPattern = new RegExp(lhs + ".*" + rhs);
    testCase.forEach(e => {
        return regPattern.test(e) ? console.log("DA") : console.log("NE");
    })
}

solve();