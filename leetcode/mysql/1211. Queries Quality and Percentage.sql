# Write your MySQL query statement below
# https://leetcode.com/problems/queries-quality-and-percentage/?envType=study-plan-v2&envId=top-sql-50
SELECT query_name, ROUND(AVG(rating / position), 2) as quality,  ROUND(100 * SUM(IF(rating < 3, 1, 0)) / COUNT(query_name), 2) as poor_query_percentage
FROM Queries
WHERE query_name is not null
GROUP BY query_name
