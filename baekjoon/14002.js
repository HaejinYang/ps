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
  const trace = new Array(N).fill(-1);
  let tractStartPoint = -1;
  let maxLength = -1;
  for (let i = 0; i < N; i++) {
    let max = 0;
    let prev = -1;
    for (let j = 0; j < i; j++) {
      if (testCases[j] < testCases[i] && max < memo[j]) {
        max = memo[j];
        prev = j;
      }
    }

    trace[i] = prev;
    memo[i] = max + 1;

    if (memo[i] > maxLength) {
      tractStartPoint = i;
      maxLength = memo[i];
    }
  }
  let answer = [];
  let cursor = tractStartPoint;
  while (cursor !== -1) {
    answer.push(testCases[cursor]);
    cursor = trace[cursor];
  }

  console.log(maxLength);
  console.log(answer.reverse().join(" "));
}

solve();
