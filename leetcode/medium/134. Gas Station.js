// 첫번째 풀이. time limit
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const LENGTH = gas.length;
  let answer = -1;
  for (let i = 0; i < LENGTH; i++) {
    let start = i;
    let count = 0;
    let accGas = 0;

    while (count < LENGTH) {
      let currentCost = cost[start];
      let currentGas = gas[start];

      if (accGas + currentGas >= currentCost) {
        accGas = accGas + currentGas - currentCost;
        start = (start + 1) % LENGTH;
        ++count;
      } else {
        break;
      }
    }

    if (count === LENGTH) {
      answer = start;
    }
  }

  return answer;
};

// 두번쨰 풀이, 여전히 time limit
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const LENGTH = gas.length;
  let answer = -1;

  // a에서 출발하여 갈수 있는 곳과 갈 수 있는곳까지 남은 가스를 저장
  const graph = {};

  for (let i = 0; i < LENGTH; i++) {
    const start = i;
    let pos = start;
    let count = 0;
    let accGas = 0;
    while (count < LENGTH) {
      let currentCost = cost[pos];
      let currentGas = gas[pos];
      if (pos in graph && graph[pos][0] != pos) {
        const [nextPos, lastGas] = graph[pos];
        if (nextPos > pos) {
          count += nextPos - pos;
        } else {
          count += LENGTH - pos + nextPos;
        }
        accGas = accGas + lastGas;
        pos = nextPos;
      } else {
        if (accGas + currentGas >= currentCost) {
          accGas = accGas + currentGas - currentCost;
          pos = (pos + 1) % LENGTH;
          ++count;
        } else {
          graph[start] = [pos, accGas];
          break;
        }
      }
    }

    if (count === LENGTH) {
      answer = start;

      break;
    }

    console.log(graph);
  }

  return answer;
};

// 여기까지 45분쯤. 솔루션을 보기로 결정
// https://leetcode.com/problems/gas-station/solutions/4611463/detailed-visual-intuition-one-pass-no-extra-memory/?envType=study-plan-v2&envId=top-interview-150
// 솔루션이 미쳤음..
// 어찌 되었은 한바퀴 순회를 i -> i+1로 가는 가스-코스트로 변화값을 만들고, 그 변화값을 누적했을때, 0보다 작으면 어느 곳이든 갈 수 없고
// 0과 같거나 크다면, 적어도 한 곳에서는 갈 수 있다.
// 이때, 유니크하다는 것이 문제에서 보장되므로, 0과 같거나 크다면, 변화값의 합이 가장 작은 곳에서 시작해야 높은곳으로 갈일만 남아서 그 곳이 답이된다.
// 미쳤네 진짜 ㅅㅂ
