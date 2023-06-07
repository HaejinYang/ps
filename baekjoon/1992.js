function solve() {
    const path = process.platform === 'linux'? '/dev/stdin' : __dirname + '/test.txt';
    const fs = require('fs');
    const [n, ...testCases] = fs.readFileSync(path).toString().trim().replaceAll('\r').split('\n');
    const N = Number(n);

    const map = new Array(N).fill(null).map(_ => new Array(N).fill(0));
    const visited = new Array(N).fill(null).map(_ => new Array(N).fill(0));
    let row = 0;
    testCases.forEach(e => {
        for(let i = 0; i < e.length; i++) {
            map[row][i] = Number(e[i]);
        }
        row++;
    });
    let result = [];
    const dfs = (x, y, N) => {
        let sum = 0;
        for(let i = y; i < y + N; i++) {
            for(let j = x; j < x + N; j++) {
                sum += Number(map[i][j]);
            }
        }
        
        if(sum == 0) {
            result.push(0);            
        } else if(sum == N*N) {
            result.push(1);
        } else if(N != 2) {
            result.push("(");
            dfs(x, y, N/2);
            dfs(x+N/2, y, N/2);
            dfs(x, y+N/2, N/2);
            dfs(x+N/2, y+N/2, N/2);
            result.push(")");
        } else {
            result.push("(");
            result.push(map[y][x], map[y][x+1], map[y+1][x], map[y+1][x+1]);
            result.push(")");
        }
    };

    dfs(0, 0, N);

    console.log(result.join(""));
}

solve();