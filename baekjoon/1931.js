function solve() {
  const fs = require("fs");
  const path =
    process.platform === "linux" ? "/dev/stdin" : __dirname + "/test.txt";
  let [N, ...times] = fs
    .readFileSync(path)
    .toString()
    .trim()
    .replaceAll("\r", "")
    .split("\n");

  let meetings = [];
  times.forEach((t) => {
    meetings.push([...t.split(" ").map(Number)]);
  });

  meetings.sort((a, b) => {
    if(a[1] !== b[1]) {
        return a[1] - b[1];
    } else {
        return a[0] - b[0];
    }
  });

  let answer = 0;
  let prevTo = -1;
  for (let i = 0; i < meetings.length; i++) {
    if (prevTo > meetings[i][0]) {
      continue;
    }
    prevTo = meetings[i][1];
    answer++;
  }
  //  각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자.
  /*
        0 1 2 3 4 5 6 7 8 9 10 11 12 13 14
          a a a a
              b b b
        c c c c c c c
                  d d d
              e e e e e e
                  f f f f f
  */

  console.log(answer);
}

solve();
