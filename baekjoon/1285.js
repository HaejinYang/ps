const { trace } = require('console');

function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    let [T, ...cases] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    T = Number(T);
    // T가 H보다 많으면

    const map = new Array(T).fill(0).map(_=>new Array(T).fill(0));

    let rowIndex = 0;
    let min = 0;
    cases.forEach(row => {
        for(let i = 0; i < row.length; i++) {
            if(row[i] === 'T') {
                map[rowIndex][i] = 1;
                ++min;
            }
        }

        ++rowIndex;
    })

    const answer = toggle(map, 0, T);
    
    console.log(answer);
}

function toggle(map, index, T) {
    if(index === T) {
        let answer = 0;
        for(let i = 0; i < T; i++) {
            let sum = sumCol(map, i);

            answer += Math.min(sum, T - sum);
        }

        return answer;
    }

    const result = toggle(map, index + 1, T);
    toggleRow(map, index);
    const toggleResult = toggle(map, index + 1, T);

    return Math.min(result, toggleResult);
}

function toggleRow(arr, row) {
    for(let i = 0; i < arr.length; i++) {
        arr[row][i] = Number(!arr[row][i]);
    }
}

function sumCol(arr, col) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i][col];
    }

    return sum;
}

solve();