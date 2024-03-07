/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/169199
 * 가중치가 0인 그래프에서 최단거리 찾기
 * 처음엔 생각없이 DFS로 풀었으나, 다음과 같은 사유로 DFS는 실패한다
 * 1. 문제의 조건에 의하여 그래프이지만  트리가 아니라서 중간에 중복되는 노드를 거치는 경우에 최단거리가 있을 수 있으나 스킵하게됨
 * 2. DFS로 최단거리 BFS를 대신하려면 시간초과가 날 것임.
*/
function solution(board) {
  const row = board.length;
  const col = board[0].length;
  const visited = Array(row)
    .fill(0)
    .map((_) => Array(col).fill(false));

  let start = -1;
  let end = -1;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (board[i][j] === "R") {
        start = [j, i];
        break;
      }

      if (board[i][j] === "G") {
        end = [j, i];
        break;
      }
    }

    if (start !== -1 && end !== -1) {
      break;
    }
  }

  const [endX, endY] = end;

  const vector = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ];
  const q = [];
  let answer = -1;
  q.push([...start, 0]);
  while (q.length > 0) {
    const [x, y, count] = q.shift();
    if (visited[y][x]) {
      continue;
    }

    visited[y][x] = true;
    if (board[y][x] === "G") {
      answer = count;
      break;
    }

    vector.forEach((v) => {
      const [dx, dy] = v;
      let [multi, prevX, prevY] = [1, x, y];
      let nextX, nextY;

      while (true) {
        nextX = x + multi * dx;
        nextY = y + multi * dy;

        if (nextX < 0 || nextX >= col || nextY < 0 || nextY >= row) {
          nextX = prevX;
          nextY = prevY;

          break;
        }

        if (board[nextY][nextX] === "D") {
          nextX = prevX;
          nextY = prevY;

          break;
        }

        prevX = nextX;
        prevY = nextY;
        multi++;
      }

      q.push([nextX, nextY, count + 1]);
    });
  }

  return answer;
}
