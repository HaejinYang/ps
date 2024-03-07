/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/176962
    1. 과제 시작
    2. 새로운 과제 시작 시간, 기존에 진행중이던 과제는 멈추고 새로운 과제
    3. 진행중이던 과제를 끝냈는데, 잠시 멈춘 과제가 있다면 멈춰둔 과제를 이어서 진행
    4. 과제를 끝낸 시각에서, 새로운 과제와 멈춘 과제가 있다면 새로운 과제
    5. 멈춘과제가 여러개면 가장 최근 멈춘 과제부터 시작
    
*/

function solution(plans) {
  plans = plans.map((plan) => {
    const [name, start, playtime] = plan;
    let numericStart = start.split(":");
    numericStart = parseInt(numericStart[0]) * 60 + parseInt(numericStart[1]);

    return [name, numericStart, parseInt(playtime)];
  });

  plans.sort((a, b) => a[1] - b[1]);

  let prevPlan = [plans[0]]; // 가장 뒤에 있는 요소는 진행중인과제가 될것
  let answer = [];

  for (let i = 1; i < plans.length; i++) {
    const [name, start, playtime] = plans[i];
    // 진행중이던 과제가 있다?
    if (prevPlan.length > 0) {
      const prev = prevPlan.pop();

      // 진행중이던 과제가 끝났나?
      if (prev[1] + prev[2] <= start) {
        answer.push(prev[0]);
        let left = start - (prev[1] + prev[2]);

        // 남은 시간동안 이전에 했던 과제들을 할 수 있다.
        while (prevPlan.length > 0) {
          const prev = prevPlan.pop();
          // 이전의 과제들
          if (prev[2] <= left) {
            answer.push(prev[0]);
            left -= prev[2];
          } else {
            prev[2] = prev[2] - left;
            prevPlan.push(prev);
            break;
          }
        }
        // 끝나면새로운과제
        prevPlan.push(plans[i]);
      } else {
        // 진행중이던 과제가 안끝났다면? 진행중이던 과제를 멈추고
        prev[2] = prev[2] - (start - prev[1]);
        prevPlan.push(prev);

        // 현재 과제를 시작한다.
        prevPlan.push(plans[i]);
      }
    } else {
      // 진행중이던 과제가 없다.
      prevPlan.push(plans[i]);
    }
  }

  //prevPlan엔 과제가 없거나 쌓여있다. 가장 마지막부터 뽑아서 해결한다
  while (prevPlan.length > 0) {
    const [name, start, playtime] = prevPlan.pop();
    answer.push(name);
  }

  return answer; // 과제를 끝낸 순선대로 이름을 배열
}
