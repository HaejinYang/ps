# https://leetcode.com/problems/find-customer-referee/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
SELECT name
FROM Customer
WHERE referee_id != 2 or referee_id is null;