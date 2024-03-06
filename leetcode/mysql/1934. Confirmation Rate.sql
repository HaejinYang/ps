-- https://leetcode.com/problems/confirmation-rate/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below

SELECT s.user_id, 
  ROUND(AVG(IF(c.action='confirmed',1,0)),2) as confirmation_rate
FROM Signups as s
LEFT JOIN Confirmations as c
on c.user_id = s.user_id
GROUP BY s.user_id;
