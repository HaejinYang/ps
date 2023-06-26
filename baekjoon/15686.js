function solve() {
    const path = process.platform === 'linux' ? '/dev/stdin' : __dirname + "/test.txt";
    const fs = require('fs');
    let [NM, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n");
    const [N, M] = NM.split(" ").map(Number);

    const map = new Array(N).fill(null).map(_ => new Array(N).fill(0));
    let chikenStores = [];
    let houses = [];
    let i = 0;
    input.forEach(row => {
        let j = 0;
        row.split(" ").map(Number).forEach(e => {
            if(e === 2) {
                chikenStores.push([i, j]);
            } else if(e === 1) {
                houses.push([i, j]);
            }
            map[i][j++] = e;
        })
        ++i;
    })

    //n개중에 2개 뽑기. 인데 순서가 안중요하네
    let groupOfChickens = [];
    const findAllCombinations = (start, result) => {
        if(result.length === M) {
            groupOfChickens.push([...result]);

            return;
        }
    
        for(let i = start + 1; i < chikenStores.length; i++) {
            result.push(i);
            findAllCombinations(i, result);
            result.pop();
        }
    }

    findAllCombinations(-1, []);

    const findMinimumLengthFromHouse = (storeRow, storeCol) => {
        let min = Number.MAX_SAFE_INTEGER;
        houses.forEach(([houseRow, houseCol]) => {
            const cur = Math.abs(houseRow - storeRow) + Math.abs(houseCol - storeCol);
            if(cur < min) {
                min = cur;
            }
        })

        return min;
    };

    // 치킨거리 찾기
    let ans = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < groupOfChickens.length; i++) {
        let stores = groupOfChickens[i];
        let result = 0;
        houses.forEach(([row, col]) => {
            let min = Number.MAX_SAFE_INTEGER;

            for(let j = 0; j < groupOfChickens[i].length; j++) {
                const [storeRow, storeCol] = chikenStores[groupOfChickens[i][j]];
                const cur = Math.abs(row - storeRow) + Math.abs(col - storeCol);
                if(cur < min) {
                    min = cur;
                }
            }

            result += min;
        });

        if(result < ans) {
            ans = result;
        }
    }

    console.log(ans);
}

function findAllCombinations(origin, start, r, result) {

}

solve();