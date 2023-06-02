function solve() {
    const fs = require('fs');
    const path = process.platform === 'linux'? "/dev/stdin" : __dirname + "/test.txt";
    const [input, testCase] = fs.readFileSync(path).toString().trim().replaceAll('\r').split("\n");
    const [n, k] = input.split(" ").map(Number);
    const temperature = testCase.split(" ").map(Number);
    let max = Number.MIN_SAFE_INTEGER;
    const sum = new Array(100000).fill(0);
    // 합계는 계속 겹치는 수를 사용함
    // 만약 3일치를 한다면, 다음 3일치는 현재 3일의 첫 번째를 뺀 나머지와 다음 날을 더한값.
    //s[1] = s[0] - t[0] + s[3] k가 3
    // 첫 번째 날 합계
    // n이 4인데 k가 3이야. 그러면 0과 1인덱스 까진 하고 0123 2번부터 안하네 n- k +1
    for(let i = 0; i < k; i++) {
        sum[0] += temperature[i];
    }

    max = sum[0];

    for(let i = 1; i < temperature.length - k + 1; i++) {
        sum[i] = sum[i - 1] - temperature[i - 1] + temperature[i + k - 1];

        if(sum[i] > max) {
            max = sum[i];
        }
    }

    console.log(max);
}

solve();