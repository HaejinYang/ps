function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [nm, count, ...input] = fs.readFileSync(path).toString().trim().replaceAll('\r', '').split("\n");
    
    const [N, M] = nm.split(" ").map(Number);
    let minPos = 1;
    let maxPos = M;
    
    const move = (min, max, target) => {
         if(target > max) {
            return target - max;
         } else if(target < min) {
            return target - min;
         } else {
            return 0;
         }
    };

    let moveCount = 0;
    input.forEach(e => {
        let pos = Number(e);
        const next = move(minPos, maxPos, pos);
        minPos += next;
        maxPos += next;
        moveCount += Math.abs(next);
    });

    console.log(moveCount);
}

solve();