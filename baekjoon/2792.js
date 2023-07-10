function solve() {
  const path =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
  const fs = require("fs");
  let [NM, ...testCases] = fs
    .readFileSync(path)
    .toString()
    .trim()
    .replaceAll("\r", "")
    .split("\n");
  const [N, M] = NM.split(" ").map(Number);

  testCases = testCases.map(Number).sort((a, b) => a - b);

  // 1 4 4 7 7
  // 중간값 4개를 기준으로 보석을 나눠준다. 보석 수가 부족하다면, 부족한대로 준다.
  //

  let low = 0;
  let hi = 10**9;
  const students = N;
  let result = Number.MAX_SAFE_INTEGER;
  while (low <= hi) {
    const mid = Math.floor((low + hi) / 2);
    if (isSatisfied(testCases, mid, students)) {
      hi = mid - 1;
      result = Math.min(result, mid);
    } else {
      low = mid + 1;
    }
  }

  console.log(result);
}

function isSatisfied(arr, target, students) {
  for (let i = 0; i < arr.length; i++) {
    if (students < 0) {
      return false;
    }

    const q = Math.floor(arr[i] / target);
    const r = arr[i] % target;

    if (q >= 1) {
      students -= q;
      if (r > 0) {
        --students;
      }
    } else {
      --students;
    }
  }

  return students >= 0;
}

solve();
