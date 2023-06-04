function solve() {
    const path = process.platform === "linux"? "/dev/stdin" : __dirname + "/test.txt";
    const fs = require('fs');
    const [NM, ...map] = fs.readFileSync(path).toString().trim().replaceAll("\r").split("\n");
    const [N, M] = NM.split(" ").map(Number);

    // N -1, M-1까지 가야하네
    const distance = new Array(N).fill(0).map(e => new Array(M).fill(0).map(e=>{return {value:0, visited:false}}));
    console.log(bfs(distance, map, N, M).value + 1);
}

function bfs(distance, map, N, M) {
    const next = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    let q = [];
    q.push([0,0]);
    distance[0][0].visited = true;
    while(q.length > 0) {
        let [row, col] = q.shift();

        next.forEach(([dy, dx]) => {
            if(row + dy < N && row + dy >= 0 && col + dx < M && col + dx >=0) {
                if(distance[row+dy][col+dx].visited === false) {
                    if(map[row+dy][col+dx] == 1) {
                        distance[row+dy][col+dx].value = distance[row][col].value + 1;
                        distance[row+dy][col+dx].visited = true;
                        q.push([row+dy,col+dx]);
                    }
                }
            }
        });
        
    }

    return distance[N-1][M-1];
}

solve();