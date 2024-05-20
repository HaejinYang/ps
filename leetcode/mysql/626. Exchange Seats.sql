# Write your MySQL query statement below
-- https://leetcode.com/problems/exchange-seats/?envType=study-plan-v2&envId=top-sql-50
-- SELECT의 CASE문이라든지, 그 안에서 다시 서브 쿼리를 한다든지... 익숙하지 못한 느낌이 드네.
SELECT
    CASE
        WHEN id % 2 = 1 AND id < (SELECT MAX(id) FROM Seat) THEN id + 1
        WHEN id % 2 = 0 THEN id - 1
        ELSE id
    END as id,
    student
FROM Seat
ORDER BY id ASC;

-- 다시 풀어봄, 별차이는 없네...
-- id가 홀수면 id +1, id가 짝수면 id-1
SELECT 
    CASE
        WHEN (id % 2) = 1 AND id = (SELECT MAX(id) FROM Seat) THEN id
        WHEN (id % 2) = 1 THEN id + 1
        WHEN (id % 2) = 0 THEN id - 1
    END
    AS id,
    student
FROM Seat
ORDER BY id ASC

-- 다시 풀어봄.
-- id is a continuous increment. 이 조건 덕분에 문제가 성립함. 일종의 오름차순 배열인데, 빈 공간이 없는
-- 인접한 두 레코드를 스왑, 마지막 레코드가 홀수이면 마지막은 스왑하지 않음
-- 오름차순 정렬
SELECT
    CASE
        WHEN id % 2 = 1 AND (SELECT MAX(id) FROM Seat) = id THEN id
        WHEN id % 2 = 1 THEN id + 1
        WHEN id % 2 = 0 THEN id - 1
    END as id, student
FROM Seat
ORDER BY id ASC