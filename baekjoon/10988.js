function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const input = fs.readFileSync(path).toString().trim().replace('\r', '').replace('\n', '');

    let lhs = 0;
    let rhs = input.length - 1;
    let result = 1;
    while(lhs < rhs) {
        if(input[lhs] !== input[rhs]) {
            result = 0;

            break;
        }

        lhs++;
        rhs--;
    }

    console.log(result);
}

solve();