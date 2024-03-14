# Write your MySQL query statement below
-- https://leetcode.com/problems/patients-with-a-condition/?envType=study-plan-v2&envId=top-sql-50
SELECT *
FROM Patients
WHERE conditions LIKE 'DIAB1%' or conditions LIKE '% DIAB1%';