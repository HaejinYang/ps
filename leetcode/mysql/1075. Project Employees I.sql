-- https://leetcode.com/problems/project-employees-i/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
SELECT p.project_id, ROUND(SUM(e.experience_years) / COUNT(project_id), 2) as average_years
FROM Project as p
INNER JOIN Employee as e
ON p.employee_id = e.employee_id and e.experience_years is not null
GROUP BY p.project_id;