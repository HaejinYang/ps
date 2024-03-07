/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/172927
    1. 최소한의 피로도로 광물을 캔다
    2. 곡괭이 아무거나 선택하여 광물 캐기
    3. 한번 선택하면 다 쓸때까지 선택한거쓰기
    4. 광물은 주어진 순서
    5. 모든 광물을 캐거나 더 캘 곡괭이가 없으면 마무리
    
    ///
    5개를 단위로 점수화를 시키면 되겠네.
    다이아몬드 25점, 철 5점, 돌 1점
    
    ///
    제대로 못풀었던 이유는 바로... 
    광물을 점수화해서 정렬한다는 아이디어까진 쓸만했으나
    곡괭이엔 한계가 있으므로, 뒤에 있는 광물들은 애초에 캐질 못한다.
    즉, 곡괭이가 한계라면, 6번째 미네랄은 못캔다...!
*/
function solution(picks, minerals) {
  const [diamond, iron, stone] = picks;
  const maxPickingMineralCount = (diamond + iron + stone) * 5;
  const MAX_COUNT_PER_PICK = 5;
  minerals = minerals.slice(0, maxPickingMineralCount);

  // 5개 단위로 점수화
  let scoredMinerals = [];
  for (let i = 0; i < minerals.length; i++) {
    const mineralScore = getScore(minerals[i]);
    const indexInGroup = i % MAX_COUNT_PER_PICK;
    if (indexInGroup === 0) {
      const group = Array(MAX_COUNT_PER_PICK + 1).fill(0);
      group[indexInGroup] = minerals[i];
      group[MAX_COUNT_PER_PICK] = mineralScore;
      scoredMinerals.push(group);
    } else {
      const groupIndex = Math.floor(i / MAX_COUNT_PER_PICK);
      scoredMinerals[groupIndex][indexInGroup] = minerals[i];
      scoredMinerals[groupIndex][MAX_COUNT_PER_PICK] += mineralScore;
    }
  }

  /**
        [
          [ 'diamond', 'diamond', 'diamond', 'iron', 'iron', 85 ],
          [ 'diamond', 'iron', 'stone', 0, 0, 31 ]
        ]
    */
  scoredMinerals.sort((a, b) => {
    if (a[MAX_COUNT_PER_PICK] !== b[MAX_COUNT_PER_PICK]) {
      return b[MAX_COUNT_PER_PICK] - a[MAX_COUNT_PER_PICK];
    }

    for (let i = 0; i < MAX_COUNT_PER_PICK; i++) {
      const aScore = getScore(a[i]);
      const bScore = getScore(b[i]);

      if (bScore !== aScore) {
        return bScore - aScore;
      }
    }

    return b[MAX_COUNT_PER_PICK] - a[MAX_COUNT_PER_PICK];
  });

  let answer = 0;
  for (let i = 0; i < scoredMinerals.length; i++) {
    let pickIndex = -1;
    if (picks[0] > 0) {
      pickIndex = 0;
      picks[0]--;
    } else if (picks[1] > 0) {
      pickIndex = 1;
      picks[1]--;
    } else if (picks[2] > 0) {
      pickIndex = 2;
      picks[2]--;
    } else {
      // 곡괭이 오링
    }

    if (pickIndex === -1) {
      break;
    }

    for (let j = 0; j < scoredMinerals[i].length - 1; j++) {
      const mineral = scoredMinerals[i][j];

      if (mineral === "diamond") {
        if (pickIndex === 0) {
          answer += 1;
        } else if (pickIndex === 1) {
          answer += 5;
        } else {
          answer += 25;
        }
      } else if (mineral === "iron") {
        if (pickIndex === 0 || pickIndex === 1) {
          answer += 1;
        } else {
          answer += 5;
        }
      } else if (mineral === "stone") {
        answer += 1;
      } else {
        // 빈값
      }
    }
  }

  return answer;
}

function getScore(mineral) {
  if (mineral === "diamond") {
    return 25;
  } else if (mineral === "iron") {
    return 5;
  } else {
    return 1;
  }
}
