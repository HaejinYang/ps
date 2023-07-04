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

  const pq = new PriorityQueue();
  testCases.forEach((score) => {
    pq.push(Number.parseFloat(score));
  });

  let count = 0;
  let answer = [];
  while (count < 7) {
    answer.push(pq.pop().toFixed(3));
    ++count;
  }

  console.log(answer.join("\n"));
}

class PriorityQueue {
  #elements;

  constructor() {
    this.#elements = [];
  }

  push(e) {
    this.#elements.push(e);
  }

  pop() {
    const [top, index] = this.#elements.reduce(
      (acc, cur, index) => {
        if (acc[0] > cur) {
          return [cur, index];
        } else {
          return [acc[0], acc[1]];
        }
      },
      [Number.MAX_SAFE_INTEGER, 0]
    );

    this.#elements.splice(index, 1);

    return top;
  }

  print() {
    this.#elements.forEach((e) => {
      console.log(e);
    });
  }
}
solve();
