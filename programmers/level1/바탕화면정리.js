/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript
    빈칸 . 파일 #
    
    최소 거리의 정의는 rdx - lux + rdy - luy
    따라서, wallpaper에 있는 파일들중에 가장 왼쪽 위에 있는 것과 가장 오른쪽 아래에 있는 것을 찾으면 되겠다.

    //
    본문이 제시하는 (x, y)가 반대로 되어 있어서 이것때문에 약간 시간이 더 걸렸다.
*/

function solution(wallpaper) {
  const [row, col] = [wallpaper.length, wallpaper[0].length];
  let [leftX, leftY] = [col - 1, row - 1];
  let [rightX, rightY] = [0, 0];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (wallpaper[i][j] !== "#") {
        continue;
      }

      // lefttop보다 더 lefttop에 가까운지
      if (leftX >= j) {
        leftX = j;
      }

      if (leftY >= i) {
        leftY = i;
      }

      if (rightX <= j) {
        rightX = j;
      }

      if (rightY <= i) {
        rightY = i;
      }
    }
  }

  return [leftY, leftX, rightY + 1, rightX + 1];
}
