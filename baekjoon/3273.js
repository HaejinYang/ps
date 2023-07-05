function solve() {
  const fs = require("fs");
  const path =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
  let [n, numbers, x] = fs
    .readFileSync(path)
    .toString()
    .trim()
    .replaceAll("\r", "")
    .split("\n");
  n = Number(n);
  x = Number(x);
  numbers = numbers.split(" ").map(Number);
  numbers.sort((a, b) => a - b);
  /*
        ai + aj = x (1 ≤ i < j ≤ n)
    */

  let l = 0;
  let r = n - 1;
  let answer = 0;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if(sum === x) {
        ++answer;
        ++l;
    } else if(sum > x) {
        --r;
    } else {
        ++l;
    }
  }

  console.log(answer);
}

solve();
