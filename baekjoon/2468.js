function solve() {
    const path = process.platform === 'linux'? "/dev/stdin" : __dirname + "/test.txt";
    const fs = require('fs');
    const [n, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r').split("\n");
    const N = Number(n);

    let map = new Array(N).fill(null).map(_ => new Array(N).fill(0));
    let visited = new Array(N).fill(null).map(_ => new Array(N).fill(false));
    let start = 0;
    let maxHeight = 0;
    input.forEach(row => {
        const e = row.split(" ").map(Number);
        for(let i = 0; i < e.length; i++) {
            map[start][i] = e[i];

            if(e[i] > maxHeight) {
                maxHeight = e[i];
            }
        }

        ++start;
    });

    // 1부터 시작해서 낮아지는 순간이 가장 크겠네. 한 번 낮아지면 일단 더 올라갈 가능성은 없다.
    // 높이 1인 경우에 잠긴다고 치면, 높이가 1이하인곳을 다 칠할수도 있고, 높이가 1보다 큰곳을 방문할 수도 있는거네.

    const unitVector = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    
    const dfs = (x, y, height) => {
        visited[y][x] = true;

        unitVector.forEach(([dx, dy]) => {
            const nextX = dx + x;
            const nextY = dy + y;

            if(!(nextX >= 0 && nextX < N && nextY >= 0 && nextY < N)) {
                return;
            }

            if(visited[nextY][nextX]) {
                return;
            }

            if(map[nextY][nextX] <= height) {
                return;
            }
            
            dfs(nextX, nextY, height);
        })
    }

    let height = 0;
    let max = 0;
    let count = 0;
    while(height < maxHeight) {
        for(let y = 0; y < N; y++) {
            for(let x = 0; x < N; x++) {
                if(visited[y][x] === false && map[y][x] > height) {
                    dfs(x, y, height);
                    ++count;
                }
            }
        }

        if(count > max) {
            max = count;
        }

        ++height;
        count = 0;
        for(let y = 0; y < N; y++) {
            for(let x = 0; x < N; x++) {
                visited[y][x] = false;
            }
        }
    }

    console.log(max);
}


solve();