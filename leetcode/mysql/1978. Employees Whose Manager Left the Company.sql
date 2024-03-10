-- https://leetcode.com/problems/employees-whose-manager-left-the-company/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
# 30000보다 샐러기가 작고, 매니저가 회사를 떠남, 매니저가 회사를 떠나면, E 테이블에 매니저 ID는 없음

SELECT employee_id
FROM Employees AS e
WHERE e.salary < 30000 and manager_id NOT IN (SELECT employee_id FROM Employees)
ORDER BY employee_id;
