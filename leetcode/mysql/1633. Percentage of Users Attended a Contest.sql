-- https://leetcode.com/problems/percentage-of-users-attended-a-contest/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
SELECT r.contest_id, ROUND((count(r.contest_id) / (SELECT count(*) FROM Users))*100, 2) as percentage
FROM Register AS r
GROUP BY r.contest_id
ORDER BY percentage desc, contest_id ASC;