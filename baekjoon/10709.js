function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [hw, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    const [H, W] = hw.split(" ").map(Number);

    const map = Array(H).fill(null).map(_ => Array(W).fill(0));
    const arrivals = Array(H).fill(null).map(_ => Array(W).fill(-1));
    
    let rowIndex = 0;
    input.forEach(row => {
        for(let i = 0; i < row.length; i++) {
            map[rowIndex][i] = row[i];
        }

        ++rowIndex;
    });

    // 동쪽에서부터 c를 찾는다, index를 기억한다, 이 index부터 시작해서 우측에 있는 board는 0, 1, 2, 3이 된다.
    // 다시 c를 찾는다. 이전의 index는 preIndex가 된다. 새로운 index부터 preIndex바로 전까지 0부터 1,2,3,3이된다.
    let prevIndex = -1;
    let index = -1;
    for(let i = 0; i < H; i++) {
        for(let j = W - 1; j >= 0; j--) {
            if(prevIndex === -1) {
                if(map[i][j] === 'c') {
                    index = j;

                    for(let k = index; k < W; k++) {
                        arrivals[i][k] = k - index;
                    }

                    prevIndex = index;
                }
            } else {
                if(map[i][j] === 'c') {
                    index = j;

                    for(let k = index; k < prevIndex; k++) {
                        arrivals[i][k] = k - index;
                    }

                    prevIndex = index;
                }
            }
        }

        prevIndex = -1;
    }
    

    for(let i = 0; i < H; i++) {
        console.log(arrivals[i].join(" "));
    }
}

solve();