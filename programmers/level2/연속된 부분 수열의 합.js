/**
 * 첫 번째 풀이 틀렸다. 무식하게 바로 반복문을 썼다.
 * 로직 자체는 맞지만 성능에서 탈락.
 */

function solution(sequence, k) {
  // 비 내림차순이면, 오름차순인데 같은게 있을 수 있다 이건가..
  // 시간 초과 줄일 수 있는 부분이 뭘까?????
  // 스킵 포인트
  // 그 외에 또 안봐도 되는 부분이 있나.
  const skipPoint = Math.ceil(k / 2);
  let min = 1000000;
  let result = [];
  for (let i = 0; i < sequence.length; i++) {
    let sum = 0;
    let count = 0;
    if (sequence[i] >= skipPoint && sequence[i] !== k) {
      continue;
    }

    for (let j = i; j < sequence.length; j++) {
      sum += sequence[j];
      ++count;

      if (sum >= k) {
        break;
      }
    }

    if (sum === k) {
      if (count < min) {
        min = count;
        result = [i, i + count - 1];
      }
    }
  }

  return result;
}

/**
 * 두 번째 풀이. 힌트를 보고 투포인터로 풀었다.
 *
 */
function solution(sequence, k) {
  let startIdx = 0;
  let endIdx = 0;
  let sum = sequence[0];
  let candidate = [];
  while (true) {
    if (sum < k) {
      if (endIdx === sequence.length - 1) {
        break;
      }

      sum += sequence[++endIdx];
    } else if (sum > k) {
      sum -= sequence[startIdx++];
    } else {
      candidate.push([startIdx, endIdx]);

      if (endIdx < sequence.length - 1) {
        sum += sequence[++endIdx];
      } else {
        if (startIdx < sequence.length - 1) {
          sum -= sequence[startIdx++];
        } else {
          break;
        }
      }
    }
  }

  // return 양수면 뒤에것이 앞으로 옴.
  candidate.sort((a, b) => {
    const lhsLength = a[1] - a[0];
    const rhsLength = b[1] - b[0];

    if (lhsLength < rhsLength) {
      return -1;
    } else if (lhsLength == rhsLength) {
      if (a[0] < b[0]) {
        return -1;
      }

      return 1;
    }

    return 1;
  });

  return candidate[0];
}
