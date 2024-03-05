-- https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
 SELECT customer_id, count(customer_id) as count_no_trans FROM Visits WHERE visit_id NOT IN (SELECT visit_id FROM Transactions) GROUP BY customer_id;
