function solve() {
    const fs = require('fs');
    const path = process.platform === 'linux'? "/dev/stdin" : __dirname + "/test.txt";
    const [NLR, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n");
    const [N, L, R] = NLR.split(" ").map(Number);

    const map = new Array(N).fill(0).map(_ => new Array(N).fill(0));
    const visited = new Array(N).fill(0).map(_ => new Array(N).fill(false));
    let i = 0;
    input.forEach(row => {
        const convertedRow = row.split(" ").map(Number);
        for(let j = 0; j < convertedRow.length; j++) {
            map[i][j] = convertedRow[j];
        }
        ++i;
    });

    const canBeTogether = (x, y, nextX, nextY) => {
        const difference = Math.abs(map[y][x] - map[nextY][nextX]);
        
        return (difference >= L) && (difference <= R);
    };

    const unitVector = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let groups = [];
    let group = [];
    let opend = false;
    const findConnectedComponents = (row, col) => {
        group.push([row, col]);
        visited[row][col] = true;
        
        unitVector.forEach(([vX, vY]) => {
            const nextX = col + vX;
            const nextY = row + vY;

            if(nextX < 0 || nextX >= N || nextY < 0 || nextY >= N) {
                return;
            }

            if(visited[nextY][nextX]) {
                return;
            }

            if(canBeTogether(col, row, nextX, nextY)) {
                opend = true;
                findConnectedComponents(nextY, nextX);
            }
        })
    }

    let duration = 0;
    const clear = () => {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                visited[i][j] = false;
            }
        }

        groups = [];
        opend = false;
    }
    while(true) {
        clear();
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < N; j++) {
                if(!visited[i][j]) {
                    group = [];
                    findConnectedComponents(i, j);
                    groups.push([...group]);
                }
            }
        }

        if(opend) {
            ++duration;
        } else {
            break;
        }

        groups.forEach(group => {
            const count = group.length;
            const total = group.reduce((acc, cur) => {
                return acc + map[cur[0]][cur[1]];
            }, 0);
            const avg = Math.floor(total / count);

            group.forEach(([row, col]) => {
                map[row][col] = avg;
            })
        });
    }

    
    console.log(duration);
}

solve();