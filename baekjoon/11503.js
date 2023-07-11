function solve() {
  const fs = require("fs");
  const path =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
  let [N, ...testCases] = fs
    .readFileSync(path)
    .toString()
    .trim()
    .replaceAll("\r", "")
    .split("\n");
  N = Number(N);
  testCases = testCases[0].split(" ").map(Number);

  const memo = new Array(N).fill(0);
  let answer = 0;
  for (let i = 0; i < N; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (testCases[j] < testCases[i] && max < memo[j]) {
        max = memo[j];
      }
    }

    memo[i] = max +1;
    answer = Math.max(answer, memo[i]);
  }

  console.log(answer);
}

solve();
