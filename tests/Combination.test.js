const Combination = require("../basic/combination");

test("Calculate_3C2_ReturnCombinationResults", () => {
  const n = 3;
  const r = 2;
  const arr = [1, 2, 3];

  const comb = new Combination(n, r, arr);
  const actual = comb.calculate();
  expect(actual).toEqual([
    [1, 2],
    [1, 3],
    [2, 3],
  ]);
});
