function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [nm, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split('\n');
    const [N, M] = nm.split(" ").map(Number);

    /*
        1) 가장 외곽에 있는 것들을 모두 0으로 바꿈, 숫자 저장
        2) 1시간 지남 판정
        3) 남은 치즈의 갯수가 0개인지 확인
        4) 0이라면 종료, 아니라면 1)로

        입력 양의정수,
        1 1
        1
        출력
        1
        1
    */

    const map = Array(N).fill(null).map(_=>Array(M).fill(0));
    const visited = Array(N).fill(null).map(_=>Array(M).fill(false));
    let leftCheeses = 0;
    let currentRow = 0;
    input.forEach(row => {
        let convertRow = row.split(" ").map(Number);
        for(let i = 0; i < M; i++) {
            map[currentRow][i] = convertRow[i];
            if(convertRow[i] === 1) {
                leftCheeses++;

            }
        }
        currentRow++;
    })

    let startPos = null;
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(map[i][j] === 0) {
                startPos = [j, i];
                
                break;
            }
        }

        if(startPos) {
            break;
        }
    }

    let toBeRemoved = [];
    const solveByDfs = () => {
        const [x, y] = startPos;
        let prev = leftCheeses;
        let hours = 0;
        while(true){
            dfs(x, y);
            ++hours;
            
            if(leftCheeses === 0) {
                return [hours, prev];
            }

            prev = leftCheeses;
            toBeRemoved.forEach(([x, y]) => {
                map[y][x] = 0;
            });

            toBeRemoved = [];
            clearVisited();
        }
    };

    const dfs = (x, y) => {
        visited[y][x] = true;
        const unitVector = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        unitVector.forEach(([dx, dy]) => {
            const nextX = dx + x;
            const nextY = dy + y;

            if(nextX < 0 || nextX >= M || nextY < 0 || nextY >= N) {
                return;
            }

            if(visited[nextY][nextX]) {
                return;
            }

            if(map[nextY][nextX] === 1) {
                --leftCheeses;
                toBeRemoved.push([nextX, nextY]);
                visited[nextY][nextX] = true;

                return;
            }

            dfs(nextX, nextY);
        })
    }

    const clearVisited = () => {
        for(let i = 0; i < N; i++) {
            for(let j = 0; j < M; j++) {
                visited[i][j] = false;
            }
        }
    }

    const result = solveByDfs();

    console.log(result.join('\n'));
}

solve();