// 뒷 큰수의 배열을 응답, 없으면 -1, 뒷큰수란? 뒤에있는 숫자중에서 자신보다 크면서 가장 가까이 있는 수
// 백만?
function solution(numbers) {
  // 일단 찾는다고 보자. 하지만 배열 크기가 100만이니까 시간초과가 날것임. 어떻게 재활용하지?
  // 한 번 찾았을대 어떤 힌트를 남길 수 있나?
  // 오름차순이면 바로 뒤에 있는 것이 뒷큰수가 되고, 오름차순이 아니라면 3 1 2 5
  // 아 힌트를 봤다. 앞에서부터 찾으면 찾을 수가 없구나, 뒤에서 부터 찾는거구나
  // for(let i = 0; i < numbers.length; i++) {
  //     const current = numbers[i];
  //     for(let j = i + 1; j < numbers.length; j++) {
  //         if(current < numbers j]) {
  //             answer[i] = numbers[j];
  //             break;
  //         }
  //     }
  // }

  const st = [];
  const answer = new Array(numbers.length).fill(0);
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (st.length === 0) {
      st.push(numbers[i]);
      answer[i] = -1;
    } else {
      while (st.length > 0) {
        if (numbers[i] >= st[st.length - 1]) {
          st.pop();
        } else {
          break;
        }
      }

      if (st.length === 0) {
        st.push(numbers[i]);
        answer[i] = -1;
      } else {
        answer[i] = st[st.length - 1];
        st.push(numbers[i]);
      }
    }
  }

  return answer;
}
