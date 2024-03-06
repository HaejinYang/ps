-- https://leetcode.com/problems/managers-with-at-least-5-direct-reports/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below

SELECT name 
FROM Employee
WHERE id in (SELECT managerID FROM Employee WHERE managerId GROUP BY managerId Having count(managerId) >= 5);