# Write your MySQL query statement below
-- https://leetcode.com/problems/second-highest-salary/?envType=study-plan-v2&envId=top-sql-50

-- 내 첫번째 풀이... NULL이 안나온다
SELECT IF(count(DISTINCT salary)=0, NULL, salary) as SecondHighestSalary
FROM Employee
ORDER BY salary DESC
limit 1, 1;

-- 참고한 풀이1 .NULL이 나온다.
SELECT MAX(salary) as SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);


-- GPT가 추천해주 풀이
SELECT (
    SELECT DISTINCT salary 
    FROM Employee
    ORDER BY salary DESC
    LIMIT 1 OFFSET 1
) AS SecondHighestSalary
FROM Employee
limit 0, 1;

-- 애초에 NULL이 나오게 하려면 SELECT로 리턴된 것이 NULL이거나 저장된 값이 NULL이거나 해야하니까?