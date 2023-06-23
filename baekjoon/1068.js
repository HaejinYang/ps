function solve() {
    const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/test.txt';
    const fs = require('fs');
    let [N, nodes, deleted] = fs.readFileSync(path).toString().trim().replaceAll("\r").split("\n");
    N = Number(N);    
    deleted = Number(deleted);
    const tree = new Array(N).fill(null).map(_ => []);
    let root = 0;
    nodes = nodes.split(" ").map(Number);
    for(let i = 0; i < nodes.length; i++) {
        if(nodes[i] === -1) {
            root = i;
        }

        if(nodes[i] !== -1){
            tree[nodes[i]].push(i);
        }
    }

    for(let i = 0; i < tree.length; i++) {
        for(let j = 0; j < tree[i].length; j++) {
            if(tree[i][j] === deleted) {
                tree[i].splice(j, 1);
            }
        }
    }
    
    let st = tree[deleted];
    tree[deleted] = [];
    while(st.length !== 0) {
        const next = st.pop();
        st.push(...tree[next]);
        tree[next] = [];
    }

    let parents = new Set();
    for(let i = 0; i < tree.length; i++) {
        if(tree[i].length > 0) {
            parents.add(i);
        }
    }

    let result = 0;
    for(let i = 0; i < tree.length; i++) {
        for(let j = 0; j < tree[i].length; j++) {
            if(!parents.has(tree[i][j])) {
                ++result;
            }
        }
    }

    if(tree[root].length === 0 && root !== deleted) {
        ++result;
    }

    console.log(result);
}

solve();