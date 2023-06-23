function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [nc, input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    const [N, C] = nc.split(" ").map(Number);
    const testCases = input.split(" ").map(Number);

    // 1순위 빈도, 2순위 먼저 나타난 숫자, 저장할 데이터.... 빈도랑 인덱스겠네.

    const store = new Map();
    let index = 0;
    testCases.forEach(e => {
        if(store.has(e)) {
            const val = store.get(e);
            val.count++;
            store.set(e, val);
        } else {
            store.set(e, {count:1, index});
        }

        index++;
    });

    const array = Array.from(store);
    
    array.sort((a, b) => {
        if(b[1].count === a[1].count) {
            return a[1].index - b[1].index;
        }

        return b[1].count - a[1].count;
    });

    let result = "";
    array.forEach(e => {
        result += (e[0].toString()+" ").repeat(e[1].count);
    })
    result.trimEnd();
    
    console.log(result);
}

solve();