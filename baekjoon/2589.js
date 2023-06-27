function solve() {
    const path = process.platform === 'linux'? "/dev/stdin" : __dirname + "/test.txt";
    const fs = require('fs');
    const [WH, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', "").split("\n");
    const [W, H] = WH.split(" ").map(Number);

    const map = new Array(W).fill(null).map(_ => new Array(H).fill(0));
    for(let i = 0; i < W; i++) {
        for(let j = 0; j < H; j++) {
            map[i][j] = input[i][j];
        }
    } 

    const unitVector = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const findByBfs = (startX, startY) => {
        const distance = new Array(W).fill(null).map(_ => new Array(H).fill(0));
        const visited = new Array(W).fill(null).map(_ => new Array(H).fill(false));

        let q = [];
        q.push([startX, startY]);
        visited[startY][startX] = true;
        let max = 0;
        while(q.length > 0) {
            const [x, y] = q.shift();

            unitVector.forEach(([vX, vY]) => {
                const nextX = x + vX;
                const nextY = y + vY;

                if(nextX < 0 || nextX >= H || nextY < 0 || nextY >= W) {
                    return;
                }

                if(visited[nextY][nextX] || map[nextY][nextX] === 'W') {
                    return;
                }

                q.push([nextX, nextY]);
                visited[nextY][nextX] = true;
                distance[nextY][nextX] = distance[y][x] + 1;
                max = Math.max(max, distance[nextY][nextX]);
            });
        }

        return max;
    };

    let answer = 0;
    for(let i = 0; i < W; i++) {
        for(let j = 0; j < H; j++) {
            if(map[i][j] === 'L') {
                answer = Math.max(findByBfs(j, i), answer);
            }
        }
    }

    console.log(answer);
}

solve();