# Write your MySQL query statement below
-- https://leetcode.com/problems/consecutive-numbers/?envType=study-plan-v2&envId=top-sql-50
-- 연속되는 숫자인지 어떻게 확인할것인가.
-- offset 0, 3 해서 3개를 구할 수 있다.
-- 3개를 다 더했을 때 첫번째 로우의 3배여야 한다.

SELECT DISTINCT l1.num as ConsecutiveNums
FROM Logs l1, Logs l2, Logs l3
WHERE l1.id = l2.id -1 and l2.id = l3.id - 1 and l1.num = l2.num and l2.num = l3.num

-- 