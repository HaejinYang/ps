# Write your MySQL query statement below
-- https://leetcode.com/problems/user-activity-for-the-past-30-days-i/?envType=study-plan-v2&envId=top-sql-50
SELECT activity_date AS day, count(distinct user_id) As active_users 
FROM Activity
WHERE DATEDIFF('2019-07-27', activity_date) < 30 and DATEDIFF('2019-07-27', activity_date) >= 0
GROUP BY activity_date
