function solution(targets) {
  targets.sort((a, b) => a[0] - b[0]);
  let base = [...targets[0]];
  let sum = 1;
  for (let i = 1; i < targets.length; i++) {
    const current = targets[i];

    if (isOverlapped(base, current)) {
      base[0] = Math.max(base[0], current[0]);
      base[1] = Math.min(base[1], current[1]);
    } else {
      sum += 1;
      base = [...current];
    }
  }

  return sum;
}

function isOverlapped(base, target) {
  return base[0] <= target[0] && target[0] < base[1];
}

/*
    1. 겹치는 구간을 찾는다
    2. 안겹치는 구간이 나타날떄까지 다음 구간을 찾는다.
    3. 안겹치는 구간이 나타나면 요격 + 1
*/
