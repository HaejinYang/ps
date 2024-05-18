# Write your MySQL query statement below
-- 중복된 수들 중에서 유니크한 가장 큰 수를 찾는다. 처음에 if를 써서 해볼까 접근했는데, 그것보단 유니크한 수를 모두 찾고 그중에서 가장 큰 수를  찾는게 간단.
SELECT MAX(num) AS num
FROM (SELECT num FROM MyNumbers GROUP BY num HAVING COUNT(num) = 1) as UniqueNumbers
