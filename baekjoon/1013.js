function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    let [T, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    T = Number(T);

    let answer = [];
    input.forEach(text => {
        if(/^(01|100+1+)+$/.test(text)) {
            answer.push("YES");
        } else {
            answer.push("NO");
        }
    });

    console.log(answer.join("\n"));
}

solve();