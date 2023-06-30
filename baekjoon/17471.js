const { group } = require("console");

function solve() {
  const fs = require("fs");
  const path =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
  let [N, people, ...testCases] = fs
    .readFileSync(path)
    .toString()
    .trim()
    .replaceAll("\r", "")
    .split("\n");

  N = Number(N);
  people = people.split(" ").map(Number);
  const adjacent = new Array(N).fill(0);
  const visited = new Array(N).fill(false);

  let max = -1;
  let rowIndex = 0;
  testCases.forEach((row) => {
    const convertedRow = row.split(" ").map(Number);
    let masking = 0;
    convertedRow.forEach((adj) => {
      masking |= 1 << adj;
    });

    adjacent[rowIndex] = masking;
    ++rowIndex;
  });

  const visit = (index, result, group) => {
    visited[index] = true;

    if (result.length === group.length) {
      const a = [...result];
      const b = [...group];

      console.log(a, b);
      return a.sort().toString() === b.sort().toString();
    }

    const each = adjacent[index];
    let next = 1;
    let shift = 0;
    while (shift < N) {
      const comp = next << shift;
      if (comp & each && visited[shift] === false) {
        result.push(shift);
        const connected = visit(shift, [...result], group);
        if (connected) {
          return true;
        }
      }
      ++shift;
    }
    for (let next = 0; next < 1 << N; next++) {}

    return false;
  };

  const getGroupPeople = (group) => {
    let sum = 0;
    group.forEach((index) => {
      sum += people[index];
    });

    return sum;
  };

  const clearVisited = () => {
    for (let i = 0; i < visited.length; i++) {
      visited[i] = false;
    }
  };

  let min = Number.MAX_SAFE_INTEGER;
  let answer = [];
  let result1;
  let result2;
  for (let i = 0; i < 1 << N; i++) {
    let group1 = [];
    let group2 = [];
    for (let j = 0; j < N; j++) {
      if (i & (1 << j)) {
        group1.push(j);
      } else {
        group2.push(j);
      }
    }

    // 선거구 2개로 나누는것까진 했고
    // 이제 선거구 안에서 서로 연결되었는지 확인해야하는데 어떻게 확인하지.
    if (group1.length > 0 && group2.length > 0) {
      clearVisited();
      const group1IsConnected = visit(group1[0], [group1[0]], group1);
      clearVisited();
      const group2IsConnected = visit(group2[0], [group2[0]], group2);
      //   console.log(
      //     "group : ",
      //     group1,
      //     group1IsConnected,
      //     group2,
      //     group2IsConnected
      //   );
      if (group2IsConnected && group1IsConnected) {
        const result = Math.abs(
          getGroupPeople(group1) - getGroupPeople(group2)
        );

        if (result < min) {
          min = result;
          result1 = [...group1];
          result2 = [...group2];
        }
      }
    }
  }

  console.log(min, result1, result2);
}

solve();
