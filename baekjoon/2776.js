function solve() {
  const fs = require("fs");
  const path =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
  let [T, ...testCases] = fs
    .readFileSync(path)
    .toString()
    .trim()
    .replaceAll("\r", "")
    .split("\n");
  T = Number(T);

    let testCount = 0;
    let answer = [];
  while (testCount < T) {
    const note1 = new Set(testCases[testCount * 4 + 1].split(" ").map(Number));
      const result = testCases[testCount * 4 + 3].split(" ").map(e => {
          return note1.has(Number(e)) ? 1 : 0;
    });

      answer.push(...result);
    ++testCount;
    }
    console.log(answer.join("\n"));
}

solve();
