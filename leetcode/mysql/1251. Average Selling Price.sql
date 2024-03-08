-- https://leetcode.com/problems/average-selling-price/?envType=study-plan-v2&envId=top-sql-50
# Write your MySQL query statement below
-- 카티시안 곱은 해서 모든 경우의 수를 구한 다음에, purchase date가 start와 end 사이에 있는지 확인하고 price와 units를 곱한다음 평균을 낸다?
SELECT p.product_id, IFNULL(round(sum(p.price * u.units) / sum(u.units), 2), 0)  as average_price
FROM Prices as p
LEFT JOIN UnitsSold as u
on p.product_id = u.product_id and u.purchase_date >= p.start_date and u.purchase_date <= p.end_date
GROUP BY product_id