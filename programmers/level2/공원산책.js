/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/172928#
    S: 시작, O: 통로, X: 장애물
    이동 명령: N, S, W, E 그리고 숫자 ex N 5
    갈수없으면 명령 자체를 취소

    // 장애물을 만난다는 의미는 끝점에서 만난다는게 아니라 중간에서도 만날 수 있다는 것을 생각해야함.
*/
function solution(park, routes) {
  const [row, col] = [park.length, park[0].length];
  let startX, startY;
  // 시작지점 찾기
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (park[i][j] === "S") {
        [startX, startY] = [j, i];

        break;
      }
    }
  }

  // 명령 정의
  const direction = {
    N: [0, -1],
    S: [0, 1],
    W: [-1, 0],
    E: [1, 0],
  };

  let [currentX, currentY] = [startX, startY];
  routes.forEach((route) => {
    const [op, distance] = route.split(" ");
    const [nextX, nextY] = [
      currentX + direction[op][0] * distance,
      currentY + direction[op][1] * distance,
    ];

    // 범위를 벗어남
    if (nextX < 0 || nextX >= col || nextY < 0 || nextY >= row) {
      return;
    }

    // 장애물
    if (op === "N") {
      for (let i = currentY; i >= nextY; i--) {
        if (park[i][nextX] === "X") {
          return;
        }
      }
    } else if (op === "S") {
      for (let i = currentY; i <= nextY; i++) {
        if (park[i][nextX] === "X") {
          return;
        }
      }
    } else if (op === "W") {
      for (let i = currentX; i >= nextX; i--) {
        if (park[nextY][i] === "X") {
          return;
        }
      }
    } else if (op === "E") {
      for (let i = currentX; i <= nextX; i++) {
        if (park[nextY][i] === "X") {
          return;
        }
      }
    } else {
      // error
    }

    [currentX, currentY] = [nextX, nextY];
  });

  return [currentY, currentX];
}
