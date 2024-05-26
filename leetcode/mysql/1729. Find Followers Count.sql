# Write your MySQL query statement below
-- count(distinct foloower_id)를 기반으로 user_id(동일한)에 구별되는 follower_id를 구할 수 있다.
SELECT user_id, count(distinct follower_id) as followers_count
FROM Followers
GROUP BY user_id;

-- 다시 풀었음. 예전엔 distinct를 사용했는데, 꼭 그럴필요는 없다.
-- group by에 의하여 특정 그룹을 하나의 레코드처럼 취급할 수 있고, 집계함수를 사용하면, 그 그룹이 타겟이 되기 때문.
SELECT user_id, count(*) as followers_count
FROM Followers
GROUP BY user_id
ORDER BY user_id ASC