function solve() {
    const path = process.platform === 'linux'? '/dev/stdin' : __dirname + "/test.txt";
    const fs = require('fs');
    let [NM, ...input]= fs.readFileSync(path).toString().trim().replaceAll("\r", "").split("\n");
    const [N, M] = NM.split(" ").map(Number);
    input = input.map(e => e.split(" ").join(""));
    let map = Array(N).fill(null).map(_ => Array(M).fill(0));
    let visited = Array(N).fill(null).map(_ => Array(M).fill(false));
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            map[i][j] = input[i][j];
        }
    }

    let result = [];
    let count = 0;
    let visitCorrupt = false;
    const dfs = (y, x) => {
        count++;
        visited[y][x] = true;
    
        const vector = [[-1, 0], [1, 0], [0, 1], [0, -1]];
        for(let i = 0; i < 4; i++) {
            const nextX = x + vector[i][0];
            const nextY = y + vector[i][1];
            
            if(nextX < 0 || nextX >= M || nextY < 0 || nextY >= N) {
                continue;
            }
    
            if(visited[nextY][nextX] || map[nextY][nextX] == 1) {
                continue;
            }
    
            if(map[nextY][nextX] == 2) {
                visitCorrupt = true;
            }
    
            dfs(nextY, nextX);
        }
    }

    let max = 0;
    const solveByDfs = () => {
        let sum = 0;
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < M; j++) {
                if(!visited[i][j] && map[i][j] == 0) {
                    dfs(i, j);
                    if(!visitCorrupt) {
                        sum += count;
                    }

                    count = 0;
                    visitCorrupt = false;
                }
            }
        }

        if(sum > max) {
            max = sum;
        }
    }

    for(let i = 0; i < N*M; i++) {
        for(let j = 0; j < N*M; j++) {
            for(let k = 0; k < N*M; k++) {
                if(i !== j && j !== k && i !== k) {
                    const [firstY, firstX] = [Math.floor((i)/M), (i) % M];
                    const [secondY, secondX] = [Math.floor((j)/M), (j) % M];
                    const [thirdY, thirdX] = [Math.floor((k)/M), (k) % M];

                    if(canConstruct(map, firstY, firstX) && canConstruct(map, secondY, secondX) && canConstruct(map, thirdY, thirdX)) {
                        map[firstY][firstX] = 1;
                        map[secondY][secondX] = 1;
                        map[thirdY][thirdX] = 1;
                    } else {
                        continue;
                    }

                    solveByDfs();
                    clearVisited(visited, N, M);
                    map[firstY][firstX] = 0;
                    map[secondY][secondX] = 0;
                    map[thirdY][thirdX] = 0;
                }
            }
        }
    }

    console.log(max);
}

function canConstruct(map, i, j) {
    return map[i][j] == 0;
}

function clearVisited(visited, N, M) {
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            visited[i][j] = false;
        }
    }
}

solve();