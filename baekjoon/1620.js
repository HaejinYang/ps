function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [input, ...testCase] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    const [n, m] = input.split(" ").map(Number);
    const store = new Map();
    for(let i = 0; i < n; i++) {
        store.set(testCase[i], i + 1);
        store.set(String(i + 1), testCase[i]);
    }

    for(let i = n; i < n + m; i++) {
        console.log(store.get(testCase[i]));
    }
    
    return;
}

solve();