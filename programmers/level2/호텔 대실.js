// 시작시간을 push
// 종료시간을 pop
// stack의 최대 갯수를 리턴하며 되겠다.
function solution(book_time) {
  const st = [];
  const timestamps = [];
  let answer = 0;

  book_time.forEach((e) => {
    let [start, end] = e;
    start = dateToTimestamp(start);
    end = dateToTimestamp(end) + 10; // 종료후 10분후까지 사용못함

    timestamps.push({
      time: start,
      type: "S",
    });

    timestamps.push({
      time: end,
      type: "E",
    });
  }); // 후조건: timestamps에 모든 데이터 적재 완료

  timestamps.sort((a, b) => {
    if (a.time !== b.time) {
      return a.time - b.time;
    } else {
      // 시간이 같으면, 나가는 것이 우선
      if (a.type === "E") {
        return -1;
      } else {
        return 1;
      }
    }
  }); // 후조건: timestamps는 정렬되어있어야 한다.

  let index = 0;
  while (index < timestamps.length) {
    const timestamp = timestamps[index];
    if (timestamp.type === "S") {
      st.push(timestamp);
      if (st.length > answer) {
        answer = st.length;
      }
    } else {
      st.pop();
    }

    ++index;
  }

  return answer;
}

function dateToTimestamp(date) {
  const [hh, mm] = date.split(":");

  return Number(hh) * 60 + Number(mm);
}
