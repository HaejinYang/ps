const { getgroups } = require('process');

function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [NM, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n");
    const [N, M] = NM.split(" ").map(Number);
    
    const graph = new Array(N+1).fill(0).map(_ => []);
    input.forEach(relation => {
        const [from, to] = relation.split(" ").map(Number);
        graph[to].push(from);
    });

    let hackingCount = 0;
    const dfs = (node) => {
        const visited = new Array(N+1).fill(false);
        const st = [node];

        while(st.length > 0) {
            const current = st.pop();
            visited[current] = true;
            hackingCount++;
            for(let i = 0; i < graph[current].length; i++) {
                const next = graph[current][i];
                if(visited[next]) {
                    continue;
                }
                
                st.push(next);
            }
        }
    };

    let max = 0;
    let answer = [];
    for(let i = 1; i < graph.length; i++) {
        dfs(i);
        if(hackingCount > max) {
            max = hackingCount;
            answer = [];
            answer.push(i);
        } else if(hackingCount === max) {
            answer.push(i);
        }

        hackingCount = 0;
    }

    console.log(answer.join(" "));
}

solve();