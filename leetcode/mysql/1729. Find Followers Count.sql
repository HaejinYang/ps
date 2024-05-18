# Write your MySQL query statement below
-- count(distinct foloower_id)를 기반으로 user_id(동일한)에 구별되는 follower_id를 구할 수 있다.
SELECT user_id, count(distinct follower_id) as followers_count
FROM Followers
GROUP BY user_id;