# https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
SELECT u.unique_id ,e.name
FROM Employees as e
LEFT JOIN EmployeeUNI as u
ON e.id = u.id  