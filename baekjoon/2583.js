function solve() {
    const path = process.platform === 'linux'? "/dev/stdin" : __dirname + "/test.txt";
    const fs = require('fs');
    const [nmk, ...squre] = fs.readFileSync(path).toString().trim().replaceAll('\r').split("\n");
    const [M, N, K] = nmk.split(" ").map(Number);

    const map = new Array(M).fill(null).map(_=> new Array(N).fill(0));
    const visitd = new Array(M).fill(null).map(_=> new Array(N).fill(false));

    squre.forEach(element => {
        e = element.split(" ").map(Number);

        const [leftX, leftY, rightX, rightY] = e;
        
        for(let i = leftY; i < rightY; i++) {
            for(let j = leftX; j < rightX; j++) {
                map[i][j] = 1;
            }
        }
    });

    const unitVector = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let area = 0;
    const dfs = (x, y) => {
        area++;
        visitd[y][x] = true;

        unitVector.forEach(([dx, dy]) => {
            const nextX = dx + x;
            const nextY = dy + y;

            if(nextX < 0 || nextX >= N || nextY < 0 || nextY >= M) {
                return;
            }

            if(map[nextY][nextX] === 1 || visitd[nextY][nextX]) {
                return;
            }
            
            dfs(nextX, nextY);
        });
    }

    let count = 0;
    let result = [];
    for(let y = 0; y < M; y++) {
        for(let x = 0; x < N; x++) {
            if(map[y][x] === 0 && visitd[y][x] === false) {
                dfs(x, y);
                ++count;
                result.push(area);
                area = 0;
            }
        }
    }

    console.log(count);
    console.log(result.sort((a,b) => a-b).join(" "));
}



solve();