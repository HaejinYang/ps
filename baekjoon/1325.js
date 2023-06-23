function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [NM, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n");
    const [N, M] = NM.split(" ").map(Number);
    
    const graph = new Array(N+1).fill(0).map(_ => []);
    const visited = new Array(N+1).fill(false);
    const hackingCountResult = new Array(N+1).fill(-1);
    input.forEach(relation => {
        const [from, to] = relation.split(" ").map(Number);
        graph[to].push(from);
    });

    const dfs = (node) => {
        let ret = 0;
        let st = [node];

        while(st.length > 0) {
            let next = st.pop();
            if(hackingCountResult[next] != -1) {
                ret += hackingCountResult[next];

                break;
            }

            visited[next] = true;
            ++ret;
            graph[next].forEach(n => {
                if(!visited[n]) {
                    st.push(n);
                }
            })
        }

        return ret;
    };

    let max = 0;
    let answer = [];
    for(let i = 1; i < graph.length; i++) {
        clearVisited(visited);
        hackingCountResult[i] = dfs(i);
        if(hackingCountResult[i] > max) {
            max = hackingCountResult[i];
        }
    }
    for(let i = 1; i < hackingCountResult.length; i++) {
        if(hackingCountResult[i] === max) {
            answer.push(i);
        }
    }

    console.log(answer.join(" "));
}

function clearVisited(visited) {
    for(let i = 0; i < visited.length; i++) {
        visited[i] = false;
    }
}

solve();