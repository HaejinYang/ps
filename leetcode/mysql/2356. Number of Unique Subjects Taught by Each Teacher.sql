# Write your MySQL query statement below
-- https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/?envType=study-plan-v2&envId=top-sql-50
SELECT teacher_id, count(DISTINCT subject_id) AS cnt 
FROM Teacher 
GROUP BY teacher_id;

-- DISTINCT를 특정 컬럼에만 적용할 수 없지만, 위에처럼 count 함수와 사용하면 가능하다.
