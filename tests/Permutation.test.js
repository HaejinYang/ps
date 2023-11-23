const Permutation = require("../basic/Permutation");

test("Calculate_PassMultipleItems_ReturnCombinationResult", () => {
  const n = 3;
  const r = 3;
  const arr = [1, 2, 3];

  const comb = new Permutation(n, r, arr);
  comb.calculate();
  const actual = comb.calculate();
  expect(actual).toEqual([
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 2, 1],
    [3, 1, 2],
  ]);
});
