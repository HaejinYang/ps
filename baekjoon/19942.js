const { group } = require('console');

function solve() {
    const path = process.platform === 'linux'? '/dev/stdin' : __dirname + "/test.txt";
    const fs = require('fs');
    let [N, condition, ...cases] = fs.readFileSync(path).toString().trim().replaceAll("\r", "").split("\n");
    N = Number(N);
    condition = condition.split(" ").map(Number);
    const [cp, cf, cs, cv] = condition;
    // N개 중에 M개를 선택해서 조건을 만족하는데, 조건을 만족하는 애들 중에서 최소인 경우를 구하라.

    // N개 중에서 M개를 선택하려면 모든 경우의 수를 구해야 하네
    // N은 3~15

    let groups = [];
    for(let i = 0; i < (1 << N); i++) {
        let current = [];
        for(let j = 0; j < N; j++) {
            if(i & (1 << j)) {
                current.push(j);
            }
        }

        groups.push(current);
    }

    let minPrice = Number.MAX_SAFE_INTEGER;
    let answer = [];
    groups.forEach(group => {
        let [p, f, s, v, price] = [0, 0, 0, 0, 0];
        
        group.forEach(index => {
            const row = cases[index].split(" ").map(Number);
            p += row[0];
            f += row[1];
            s += row[2];
            v += row[3];
            price += row[4];
        })

        if(p >= cp && f >= cf && s >= cs && v >= cv) {
            if(price < minPrice) {
                answer = [];
                minPrice = price;
                answer.push([...group])
            } else if(price === minPrice) {
                answer.push([...group]);
            }
        }
    });

    
    if(answer.length === 0) {
        console.log(-1);

        return;
    }

    answer = answer.map(group => {
        return group.map(e => e +1);
    })

    
    if(answer.length >= 1) {
        answer = answer.map(group => {
            return group.map(e => e).join(" ");
        })

        answer.sort();

        console.log(minPrice);
        console.log(answer[0]);

        return;
    }
}

solve();