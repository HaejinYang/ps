# Write your MySQL query statement below

SELECT ROUND(100*SUM(IF(order_date=customer_pref_delivery_date, 1, 0)) / count(*), 2)  as immediate_percentage
FROM Delivery
WHERE (customer_id, order_date) IN (SELECT customer_id, min(order_date) FROM Delivery GROUP BY customer_id)

-- 다시푼내용

SELECT ROUND((SUM(IF(order_date = customer_pref_delivery_date, 1, 0)) / count(order_date))*100, 2) as immediate_percentage
FROM Delivery
WHERE (customer_id, order_date) IN (SELECT customer_id, MIN(order_date)
FROM Delivery
GROUP BY customer_id)