function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [n, ...testCase] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    const N = Number(n);
    const store = new Map();
    let start = 0;
    let loopCount = 0;
    let sum = 0;
    while(loopCount++ < N) {
        store.clear();
        let count = parseInt(testCase[start]);
        let i = 0;
        for(i = start + 1; i < start + 1 + count; i++) {
            const [name, type] = testCase[i].split(" ");
            
            if(store.has(type)){
                store.set(type, store.get(type) + 1);
            } else {
                store.set(type, 1);
            }
        }
        
        sum = 1;
        for(const [key, val] of store) {
            sum *= (val + 1);
        }
        sum -= 1;

        console.log(sum);
        
        start = i;
    }
}

solve();