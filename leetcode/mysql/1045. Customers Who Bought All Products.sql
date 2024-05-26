# Write your MySQL query statement below
--  구매자가 모든 상품을 구했는지 어떻게 알지?
SELECT customer_id
FROM (SELECT DISTINCT * FROM Customer) as UniqueCustomer
GROUP BY customer_id
HAVING count(*) = (SELECT count(*) FROM Product)

--  이문제는 FROM 절에서 SELECT의 결과를 테이블로 사용하여 유니크한 row를 추출했는데
--  다른 사람이 한걸보니 HAVING절에서 count(distinct product_key) 처럼 쓸수도있더라.


-- CTE를 이용해서 풀어보았다.
WITH uniq AS (SELECT * FROM Customer GROUP BY customer_id, product_key)
SELECT customer_id
FROM uniq
GROUP BY customer_id
HAVING count(customer_id) = (SELECT COUNT(*) FROM Product)
