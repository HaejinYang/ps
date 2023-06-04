function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [t, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    const T = Number(t);
    const testCase = input.map(e => e.split(" ").map(Number));

    let solveCount = 0;
    let start = 0;
    while(solveCount < T) {
        //
            const[M, N, K] = testCase[start];
            const map = new Array(N).fill(0).map(_ => new Array(M).fill(0));
            const visit = new Array(N).fill(0).map(_ => new Array(M).fill(0));
            for(let i = start + 1; i < testCase.length; i++) {
                if(testCase[i].length >= 3 ) {
                    start = i;

                    break;
                }

                const [X, Y] = testCase[i];
                map[Y][X] = 1;
            }

            let result = 0;
            for(let i = 0; i < N; i++) {
                for(let j = 0; j < M; j++) {
                    if(visit[i][j] == 0 && map[i][j] == 1) {
                        dfs(map, visit, M, N, j, i);
                        ++result;
                    }
                }
            }

            console.log(result);

        //
        solveCount++;
    }
    
    return;
}

const unitVector = [[-1, 0], [1, 0], [0, 1], [0, -1]];
function dfs(map, visit, M, N, x, y) {
    visit[y][x] = 1;

    unitVector.forEach(([dx, dy]) => {
        const nextX = x+dx;
        const nextY = y+dy;
        if((nextX) < 0 || (nextX) >= M || (nextY) < 0 || (nextY) >= N) {
            return;
        }

        if(visit[nextY][nextX] == 1) {
            return;
        }

        if(map[nextY][nextX] == 0) {
            return;
        }

        dfs(map, visit, M, N, nextX, nextY);
    });
}

solve();