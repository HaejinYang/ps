/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  /**
        well-formed란... OC, OOCC 처럼 열고 닫는게 제대로 되어있는건데
        n = 1 ()
        n = 2 ()(), (())
        n = 3 5개,

        // 증가하는 방법이 2개네
        하나는 n=1을 반복,
        다른 하나는 그 이전의 것에 맨 앞과 맨뒤에 ()을 추가
     */

  const result = [];
  const solve = (current, openCount, closeCount, N) => {
    if (openCount + closeCount === 2 * N) {
      result.push(current);

      return;
    }

    if (openCount < N) {
      solve(current + "(", openCount + 1, closeCount, N);
    }

    if (closeCount < N && closeCount < openCount) {
      solve(current + ")", openCount, closeCount + 1, N);
    }
  };

  solve("", 0, 0, n);
  return result;
};
