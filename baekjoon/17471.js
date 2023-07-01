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
    for (let i = 1; i < convertedRow.length; i++) {
      masking |= 1 << (convertedRow[i] - 1);
    }

    masking |= 1 << rowIndex;
    adjacent[rowIndex] = masking;
    ++rowIndex;
  });

  let min = Number.MAX_SAFE_INTEGER;
  let hasAnswer = false;
  // [ 11, 55, 14, 13, 18, 34 ]
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

    // group1과 group2에 선거구가 담긴다.
    if (group1.length === 0 || group2.length === 0) {
      continue;
    }

    clearVisited(visited);
    let group1Result = [];
    visit(group1, group1[0], adjacent, group2, visited, group1Result, N);

    clearVisited(visited);
    let group2Result = [];
    visit(group2, group2[0], adjacent, group1, visited, group2Result, N);

    const group1Set = new Set(group1);
    const group1IsSame = group1Result.every(e => group1Set.has(e) && group1Set.size === group1Result.length);
    const group2Set = new Set(group2);
    const group2IsSame = group2Result.every((e) => group2Set.has(e) && group2Set.size === group2Result.length);

    if(group1IsSame && group2IsSame) {
      hasAnswer = true;
      min = Math.min(Math.abs(sumPeopleInGroup(group1Result, people) - sumPeopleInGroup(group2Result, people)), min);
    }
  }

  if(hasAnswer) {
    console.log(min);
  } else {
    console.log(-1);
  }
}

/*
  1. 선거구 안에 있는 구역끼리만을 이동해서 서로 연결되어 있어야 한다.
  2. 다른 구역이 포함되면 x
*/
function visit(group, node, adjacent, except, visited, result, N) {
  const masking = adjacent[node];

  for (let i = 0; i < N; i++) {
    if ((masking & (1 << i)) && !except.includes(i) && !visited[i]) {
      visited[i] = true;
      result.push(i);
      visit(group, i, adjacent, except, visited, result, N);
    }
  }
}

function clearVisited(visited) {
  for(let i = 0; i < visited.length; i++) {
    visited[i] = false;
  }
}

function sumPeopleInGroup(group, people) {
  let sum = 0;
  for(let i = 0; i < group.length; i++) {
    sum += people[group[i]];
  }

  return sum;
}

solve();
