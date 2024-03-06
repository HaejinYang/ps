# Write your MySQL query statement below

--  첫 시도.... 실패
-- SELECT *
-- FROM Weather as w1
-- INNER JOIN Weather as w2
-- ON w1.id = w2.id + 1
-- WHERE (w1.temperature > w2.temperature and w1.recordDate > w2.recordDate) 
-- or (w2.temperature > w1.temperature and w2.recordDate  w1.recordDate);

-- 답을 참고함...
--  join에서 on을 생략하면, 카티시안 프러덕트, 모든 경우의수를 만드는 것.
SELECT w1.id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w1.recordDate, w2.recordDate) = 1 AND w1.temperature > w2.temperature;