// 재귀를 이요한 풀이. 런타임 에러 발생. 재귀 깊이때문인가?
function solution(maps) {
  const answer = [];
  const rowSize = maps.length;
  const colSize = maps[0].length;
  const visited = new Array(rowSize)
    .fill(0)
    .map((_) => new Array(colSize).fill(false));

  let sum = 0;
  const traverse = (row, col) => {
    sum += Number(maps[row][col]);
    visited[row][col] = true;

    const move = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];

    move.forEach((v) => {
      const [dx, dy] = v;
      const nextX = dx + col;
      const nextY = dy + row;

      // 지도 밖
      if (nextX < 0 || nextX >= colSize || nextY < 0 || nextY >= rowSize) {
        return;
      }

      // 바다
      if (maps[nextY][nextX] === "X") {
        return;
      }

      // 방문함
      if (visited[nextY][nextX]) {
        return;
      }

      traverse(nextY, nextX);
    });
  };

  for (let row = 0; row < rowSize; row++) {
    for (let col = 0; col < colSize; col++) {
      if (visited[row][col] || maps[row][col] === "X") {
        continue;
      }

      sum = 0;

      traverse(row, col);

      answer.push(sum);
    }
  }

  if (answer.length === 0) {
    answer.push(-1);
  }

  // 오름차순
  answer.sort((a, b) => a - b);
  return answer;
}


// 큐를 이용한 풀이
function solution(maps) {
    const answer = [];
    const rowSize = maps.length;
    const colSize = maps[0].length;
    const visited = new Array(rowSize).fill(0).map((_) => new Array(colSize).fill(false));
    const q = [];
    
    let sum = 0;
    
    const isValid = (row, col) => {
        if(col < 0 || col >= colSize || row < 0 || row >= rowSize) {
            return false;
        }

        // 바다
        if(maps[row][col] === 'X') {
            return false;
        }

        // 방문함
        if(visited[row][col]) {
            return false;
        }
        
        return true;
    }
    
    const traverse = (row, col) => {
        sum += Number(maps[row][col]);
        visited[row][col] = true;
        
        const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        
        move.forEach(v => {
            const [dx, dy] = v;
            const nextX = dx + col;
            const nextY = dy + row;
            
            if(!isValid(nextY, nextX)) {
                return;
            }
            
            q.push([nextY, nextX]);
        });
    }
    
    for(let row = 0; row < rowSize; row++) {
        for(let col = 0; col < colSize; col++) {
            if(maps[row][col] === 'X' || visited[row][col]) {
                continue;
            }
            
            q.push([row, col]);
            console.log(row, " ", col);
            sum = 0;
            while(q.length !== 0) {
                const [y, x] = q.pop();
                
                if(isValid(y,x)) {
                    traverse(y, x);
                }
            }
            
            if(sum !== 0) {
                answer.push(sum);
            }
        }
    }

    if(answer.length === 0) {
        answer.push(-1);
    }
    
    // 오름차순
    answer.sort((a, b) => a - b);
    return answer;
}

