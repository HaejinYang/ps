function solve() {
  const fs = require("fs");
  const path =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
  let input = fs
    .readFileSync(path)
    .toString()
    .trim()
    .replaceAll("\r", "")
    .split("\n");

  const [N, K] = input[0].split(" ").map(Number);

  const stones = [];
  const bags = [];
  let count = 0;
  for (let i = 1; i < input.length; i++) {
    if (count < N) {
      const [weight, price] = input[i].split(" ").map(Number);
      stones.push([weight, price]);
    } else {
      bags.push(Number(input[i]));
    }
    count++;
  }

  /*
    1. 가방 하나에 최대한 넣고 거기서 가장 큰 가치를 지닌 보석을 꺼낸다.
    2. 이 가방 안에 담긴 보석들은 다음 가방에도 담긴다. 왜? 작으니까.
    3. 다음 가방에 넣을 수 있는 최대한 보석을 넣고 가장 큰 가치를 지닌 보석을 꺼낸다.
   */

  bags.sort((a, b) => a[0] - b[0]);
  stones.sort((a, b) => a[0] - b[0]);

  let answer = 0;
  let stonesInBag = [];
  let j = 0;
  for (let i = 0; i < K; i++) {
    const weight = bags[i];

    while (j < N && stones[j][0] <= weight) {
      stonesInBag.push(stones[j++][1]);
    }

    if (stonesInBag.length > 0) {
      stonesInBag.sort((a, b) => a - b);
      answer += stonesInBag.pop();
    }
  }

  console.log(answer);
}

solve();
