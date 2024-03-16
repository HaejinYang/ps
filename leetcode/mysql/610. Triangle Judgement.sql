# Write your MySQL query statement below
-- https://leetcode.com/problems/triangle-judgement/?envType=study-plan-v2&envId=top-sql-50
-- 삼각형의조건이 뭐더라. 가장 긴거랑 짧은거 두개인데
-- 가장 긴게 나머지 2개를 더한값보다 짧아야 한다

SELECT x, y, z,  IF(x + y > z and y + z > x and x + z > y, "Yes", "No") as triangle
FROM Triangle

-- 처음에 제대로 못풀었다. 쉬운문제인데도 불구하고. 왜 그럴까?
-- 삼각형의 조건을 잘못 생각함. 가장 큰 변이 가장 짧은 두 변보다 크다는 조건만 생각하고
-- 가장 큰 변을 어떻게 찾지? 찾을 수 있는건가? 그렇게 생각하다가 실패
-- 하지만 조건을 다시 생각해보면 나머지 두 변이 항상 나머지 한 변보다 크다는 조건으로 확장할 수 있고
-- 그렇게 되면 x, y, z에 대하여 x + y > z를 항상 생각해볼 수 있다.

-- 결국 문젠, SELECT 안에서 IF문이라든지, SELECT 서브 쿼리, CASE를 자주 안써서 어색하여 생긴다.