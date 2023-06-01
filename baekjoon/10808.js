function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const input = fs.readFileSync(path).toString().trim().split("");
    const start = "a".charCodeAt(0);
    
    let result = new Array(26).fill(0);
    input.forEach(ch => {
        result[ch.charCodeAt(0) - start]++;
    })

    console.log(result.join(" "));
}

solve();