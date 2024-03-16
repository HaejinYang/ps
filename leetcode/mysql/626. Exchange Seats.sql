# Write your MySQL query statement below
-- https://leetcode.com/problems/exchange-seats/?envType=study-plan-v2&envId=top-sql-50
-- SELECT의 CASE문이라든지, 그 안에서 다시 서브 쿼리를 한다든지... 익숙하지 못한 느낌이 드네.
SELECT
    CASE
        WHEN id % 2 = 1 AND id < (SELECT MAX(id) FROM Seat) THEN id + 1
        WHEN id % 2 = 0 THEN id - 1
        ELSE id
    END as id,
    student
FROM Seat
ORDER BY id ASC;

