function findTwoNumbers(target, height) {
    for(let i = 0; i < height.length++; i++) {
        for(let j = i + 1; j< height.length; j++) {
            if(target === height[i] + height[j]) {
                return [height[i], height[j]];
            }
        }
    }
}

function solve() {
    const fs = require('fs');
    const path = process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const height = fs.readFileSync(path).toString().trim().split("\n").map(Number);

    height.sort((a, b) => a-b);
    const total = height.reduce((acc, cur) => acc + cur, 0);
    const excess = total - 100;
    const excess_list = findTwoNumbers(excess, height);
    console.log(height.filter(e => !excess_list.includes(e)).join('\n'));
}

solve();