function solve() {
    const fs = require('fs');
    const path = process.platform === 'linux'? "/dev/stdin" : __dirname + "/test.txt";
    const [input, testCase] = fs.readFileSync(path).toString().trim().replaceAll('\r').split("\n");
    const [n, k] = input.split(" ").map(Number);
    const temperature = testCase.split(" ").map(Number);
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < temperature.length - k + 1; i++) {
        let sum = 0;
        for(let j = i; j < i + k; j++) {
            sum += Number(temperature[j]);
        }

        if(sum > max) {
            max = sum;
        }
    }

    console.log(max);
}

solve();