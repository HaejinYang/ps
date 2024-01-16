# Write your MySQL query statement below

DELETE p1 FROM person AS p1,person AS p2 
WHERE p1.email = p2.email AND p1.id > p2.id;

-- 쿼리 설명.
FROM person AS p1, person AS p2에 의하여 카티시안 프러덕트가 발생. 가능한 모든 경우의 수(3x3)가 출력되게 된다.

그리고 WHERE 컨디션에 의하여 필터링된다.

이때 남은 row는 다음과 같은 식인데
+----+------------------+----+------------------+
| id | email | id | email |
+----+------------------+----+------------------+
| 3 | john@example.com | 1 | john@example.com |
+----+------------------+----+------------------+

DELETe p1에 의하여 남은 우측 테이블에 의한 데이터만 살아남음.