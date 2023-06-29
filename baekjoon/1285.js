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

    toggle(map, 0, T);
    
    console.log(answer);
}

let answer = Number.MAX_SAFE_INTEGER;
function toggle(map, index, T) {
    if(index === T) {
        let sum = 0;
        for(let i = 0; i < T; i++) {
            let col = sumCol(map, i);

            sum += Math.min(col, T - col);
        }

        if(sum < answer) {
            answer = sum;
        }

        return;
    }

    toggle(map, index + 1, T);
    toggleRow(map, index);
    toggle(map, index + 1, T);
}

function toggleRow(arr, row) {
    for(let i = 0; i < arr.length; i++) {
        arr[row][i] = Number(!arr[row][i]);
    }
}

function toggleCol(arr, col) {
    for(let i = 0; i < arr.length; i++) {
        arr[i][col] = Number(!arr[i][col]);
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