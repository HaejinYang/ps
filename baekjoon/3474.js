function solve() {
    const fs = require("fs");
    const path =
        process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
    const [T, ...testCases] = fs
        .readFileSync(path)
        .toString()
        .trim()
        .replaceAll("\r", "")
        .split("\n");
    
    let result = [];
    testCases.forEach((t) => {
        let target = parseInt(t);

        let count = 0;
        for(let i = 5; i <= target; i*=5) {
            count += Math.floor(target / i);
        }

        result.push(count);
    });

    console.log(result.join("\n"));
}

solve();
